<template>
    <div class="basic-results">
        <h2 v-html="results"></h2>
        <slot name="pass" v-if="percentageCorrect >= localOptions.passingPercentage"></slot>
        <slot name="fail" v-else></slot>
    </div>
</template>

<script>
export default {
  name: 'basic-results',
  inject: ['quiz', 'quizList', 'options'],
  data () {
    return {
      answeredCorrect: 0,
      totalQuestions: 0,
      percentageCorrect: 0,
      localQuizList: [],
      localOptions: {}
    }
  },
  created () {
    this.localQuizList = this.quizList()
    this.localOptions = this.options()
    this.answeredCorrect = 0
    for (let i = 0; i < this.localQuizList.length; i++) {
      let questionResult = this.$store.getters.getQuestionHistory(this.localQuizList[i])
      if (questionResult[questionResult.length - 1].correct) {
        this.answeredCorrect++
      }
      this.totalQuestions++
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
    if (this.percentageCorrect >= this.localOptions.passingPercentage) {
      this.$parent.$emit('grade-result', true)
      if (this.localOptions.completeCourse) {
        this.$store.dispatch('setCourseCompletion')
      }
    } else {
      this.$parent.$emit('grade-result', false)
    }
  },
  computed: {
    results () {
      let myString = this.$store.getters.getString({ category: 'basic-results', name: 'results' })
      let regex1 = /{{answeredCorrect}}/g
      let regex2 = /{{totalQuestions}}/g
      let regex3 = /{{localOptions.passingPercentage}}/g
      let regex4 = /{{percentageCorrect}}/g

      myString = myString.replace(regex1, this.answeredCorrect)
      myString = myString.replace(regex2, this.totalQuestions)
      myString = myString.replace(regex3, this.localOptions.passingPercentage)
      myString = myString.replace(regex4, this.percentageCorrect)

      return myString
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .basic-results{
        display: block;
        width: 100%;
        background: white;
        @include padding(1,1,1,1);
    }
</style>