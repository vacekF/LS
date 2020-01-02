<template>
    <div class="pool-results">
        <table class="pool-table">
            <tr>
                <th>{{getStrings.pool}}</th>
                <th>{{getStrings.answered}}</th>
                <th colspan="2">{{getStrings.percentage}}</th>
            </tr>
            <tr v-for="(pool, index) in poolList" :key="index" :class="[pool.pass ? 'pass' : 'fail']">
                <td class="names-col">{{pool.name}}</td>
                <td class="correct-col">{{pool.correct}} of {{pool.total}}</td>
                <td class="percentage-col">{{pool.percent}}% </td>
                <td class="required-col">{{pool.passPercent}}% {{getStrings.required}}</td>
            </tr>
        </table>
        <slot name="pass" v-if="quizPass"></slot>
        <slot name="fail" v-else></slot>
    </div>
</template>

<script>
export default {
  name: 'pool-results',
  inject: ['quiz', 'quizList', 'options'],
  data () {
    return {
      answeredCorrect: 0,
      totalQuestions: 0,
      percentageCorrect: 0,
      quizPass: true,
      localQuizList: [],
      localOptions: {},
      poolList: []
    }
  },
  created () {
    this.localQuizList = this.quizList()
    this.localOptions = this.options()
    this.localOptions.recordScore = 1
    let contents
    let poolsObject = {}
    if (typeof this.quiz === 'object') {
      contents = this.quiz.contents
    } else {
      contents = this.$store.getters.getQuiz(this.quiz).contents
    }
    for (let j = 0; j < contents.length; j++) {
      if (typeof contents[j] === 'object') {
        if (!poolsObject.hasOwnProperty(contents[j].name)) {
          poolsObject[contents[j].name] = {}
          poolsObject[contents[j].name].history = this.$store.getters.getPoolHistory(contents[j].name)
          poolsObject[contents[j].name].total = contents[j].total
          poolsObject[contents[j].name].pass = contents[j].pass
          poolsObject[contents[j].name].group = contents[j].group
        }
      } else {
        let other = this.$store.getters.getString({ category: 'pool-results', name: 'other' })
        if (!poolsObject.hasOwnProperty(other)) {
          poolsObject[other] = {}
          poolsObject[other].history = []
          poolsObject[other].total = 0
          poolsObject[other].pass = this.localOptions.passingPercentage
          poolsObject[other].group = ''
        }
        poolsObject[other].history.push({ name: contents[j], history: this.$store.getters.getQuestionHistory(contents[j]) })
        poolsObject[other].total++
      }
    }
    for (let pool in poolsObject) {
      let myPool = poolsObject[pool]
      let poolAttempted = 0
      let poolCorrect = 0
      let correct = 0
      for (let i = 0; i < myPool.history.length; i++) {
        if (myPool.history[i].history.length > 0) {
          if (this.localQuizList.indexOf(myPool.history[i].name) > -1) {
            poolAttempted++
          }
          if (myPool.history[i].history[myPool.history[i].history.length - 1].correct) {
            poolCorrect++
            if (this.localQuizList.indexOf(myPool.history[i].name) > -1) {
              correct++
            }
          }
        }
      }
      if (correct === 0 && poolAttempted === 0) {
        correct = poolCorrect
      }
      let percent = Math.floor((correct / myPool.total) * 100)
      let pass = (percent >= myPool.pass)
      if (pass) {
        if (myPool.group.length > 0) {
          this.$store.dispatch('setGroupCompletion', myPool.group)
        }
      } else {
        this.quizPass = false
      }
      this.answeredCorrect += correct
      this.totalQuestions += myPool.total
      this.poolList.push({
        name: pool,
        correct: correct,
        total: myPool.total,
        percent: percent,
        passPercent: myPool.pass,
        pass: pass
      })
    }
    this.percentageCorrect = Math.floor((this.answeredCorrect / this.totalQuestions) * 100)
    if (this.localOptions.recordScore) {
      this.$store.dispatch('setScore', {
        raw: this.answeredCorrect,
        min: 0,
        max: this.totalQuestions,
        scaled: this.percentageCorrect / 100
      })
    }
    if (this.quizPass) {
      this.$parent.$emit('grade-result', true)
      if (this.localOptions.completeCourse) {
        this.$store.dispatch('setCourseCompletion')
      }
    } else {
      this.$parent.$emit('grade-result', false)
    }
  },
  computed: {
    getStrings () {
      let stringObj = {}
      stringObj.pool = this.$store.getters.getString({ category: 'pool-results', name: 'pool' })
      stringObj.answered = this.$store.getters.getString({ category: 'pool-results', name: 'answered' })
      stringObj.percentage = this.$store.getters.getString({ category: 'pool-results', name: 'percentage' })
      stringObj.required = this.$store.getters.getString({ category: 'pool-results', name: 'required' })
      return stringObj
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .pool-results{
        display: block;
        width: 100%;
        background: white;
        @include padding(1,1,1,1);
        .pool-table{
            width: 100%;
            @include margin(0,0,0.5,0);
            tr{
                border-bottom: solid white 1px;
                th{
                    font-size: 120%;
                    @include padding(0.25,0.25,0.1,0.25);
                    &:first-child{
                        text-align: left;
                    }
                }
                &.pass{
                    background: green;
                    color: white;
                }
                &.fail{
                    background: red;
                    color: white;
                }
                .required-col{
                    background: black;
                    width: 6.5rem;
                    text-align: left;
                }
            }
            td{
                font-size: 105%;
                @include padding(0.25,0.25,0.25,0.25);
            }
            .names-col{
                text-align: left;
            }
            .correct-col{
                text-align: center;
                width: 4rem;
            }
            .percentage-col{
                text-align: right;
                width: 4rem;
            }
        }
    }
</style>