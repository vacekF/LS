<template>
    <div class="knowledge-check">
        <transition :name="transitionType" v-if="validQuiz === true">
            <component v-if="!showResults" class="question-holder" ref="question" :is="compositeQuestion.type" @submittable="onSubmittable" :question="currentQuestion" :lock="lockQuestion" :show-feedback="showFeedback" :count="questionCount" :key="currentQuestion.id"></component>
            <div v-else class="results-holder">
                <slot></slot>
            </div>
        </transition>
        <div class="no-quiz" v-else>
            <p>This KnowledgeCheck component needs a valid quiz</p>
        </div>
        <div class="button-bar">
            <div class="btn submit-btn" v-if="showSubmitBtn" @click="onSubmit">{{getStrings.submit}} &#187;</div>
            <div class="btn review-btn" v-if="showReviewBtn" @click="onReview">&#171; {{getStrings.review}}</div>
            <div class="btn feedback-btn" v-if="showFeedbackBtn" @click="onFeedback">{{getStrings.feedback}} &#187;</div>
            <div class="btn tryagain-btn" v-if="showTryAgainBtn" @click="onTryAgain">&#171; {{getStrings.tryagain}}</div>
            <div class="btn retake-btn" v-if="showRetakeBtn" @click="onRetake">&#171; {{getStrings.retake}}</div>
            <div class="btn next-btn" v-if="showNextBtn" @click="onNext">{{getStrings.next}} &#187;</div>
        </div>
    </div>
</template>

<script>
import Randomize from 'simple-core/mixins/RandomizeMixin'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import QuizMixin from 'simple-assessment/mixins/QuizMixin'
export default {
  name: 'knowledge-check',
  mixins: [Randomize, CompletionMixin, QuizMixin],
  props: {
    settings: {
      type: [Object, String],
      default: () => {}
    }
  },
  provide () { // Provides data for results page
    return {
      quiz: this.settings,
      quizList: () => this.quizList,
      options: () => this.quizOptions
    }
  },
  data () {
    return {
      transitionType: 'slide-forward',
      currentQuestion: {},
      position: -1,
      questionAttempts: 0,
      quizList: [],
      showSubmitBtn: false,
      showReviewBtn: false,
      showFeedbackBtn: false,
      showTryAgainBtn: false,
      showRetakeBtn: false,
      showNextBtn: false,
      showFeedback: false,
      lockQuestion: false,
      showResults: false,
      quizOptions: {}
    }
  },
  watch: {
    lock () {
      if (this.lock) {
        this.lockQuestion = true
      } else {
        this.lockQuestion = false
      }
    }
  },
  created () {
    this.getQuestionList()
    this.$on('grade-result', this.onGraded)
  },
  computed: {
    compositeQuestion () {
      return this.getQuestion()
    },
    questionCount () {
      return {
        position: this.position + 1,
        total: this.quizList.length
      }
    },
    getStrings () {
      let stringObj = {}
      stringObj.submit = this.$store.getters.getString({ category: 'knowledge-check', name: 'submit' })
      stringObj.review = this.$store.getters.getString({ category: 'knowledge-check', name: 'review' })
      stringObj.feedback = this.$store.getters.getString({ category: 'knowledge-check', name: 'feedback' })
      stringObj.tryagain = this.$store.getters.getString({ category: 'knowledge-check', name: 'tryagain' })
      stringObj.retake = this.$store.getters.getString({ category: 'knowledge-check', name: 'retake' })
      stringObj.next = this.$store.getters.getString({ category: 'knowledge-check', name: 'next' })
      return stringObj
    }
  },
  methods: {
    getQuestion () {
      let question = this.$store.getters.getQuestion(this.quizList[this.position])
      let questionOptions = question.options
      let compositeOptions = Object.assign({}, this.quizOptions, questionOptions)
      question.options = compositeOptions
      question.id = this.quizList[this.position]
      return question
    },
    onSubmittable (submittable) {
      if (this.getQuestion().options.autoSubmit && !this.getQuestion().options.multiSelect) {
        this.onSubmit()
      } else if (submittable) {
        this.showSubmitBtn = true
      } else {
        this.showSubmitBtn = false
      }
    },
    onSubmit () {
      this.lockQuestion = true
      this.questionAttempts++
      this.showSubmitBtn = false
      let grade = this.$refs.question.grade(true)
      this.$store.commit('setQuestionHistory', { name: this.quizList[this.position], history: grade })
      let questionOptions = this.getQuestion().options
      if (questionOptions.noFeedback) {
        this.onNext()
      } else {
        if (grade.correct) {
          this.showNextBtn = true
          if (questionOptions.reviewQuestion) {
            this.showReviewBtn = true
          }
        } else {
          if (questionOptions.questionAttempts > this.questionAttempts || questionOptions.questionAttempts === 0) {
            this.showTryAgainBtn = true
          } else {
            this.showNextBtn = true
            if (questionOptions.reviewQuestion) {
              this.showReviewBtn = true
            }
          }
        }
        if (!this.$slots['default'] && this.position >= this.quizList.length - 1) {
          this.showRetakeBtn = true
          this.showNextBtn = false
          if (!this.anonymousQuiz) {
            this.$store.commit('setQuizPosition', { name: this.settings, position: -1 })
          }
          this.setComplete(1)
        }
        this.showFeedback = true
      }
    },
    onReview () {
      this.showFeedback = false
      this.showReviewBtn = false
      this.showFeedbackBtn = true
    },
    onFeedback () {
      this.showFeedback = true
      this.showReviewBtn = true
      this.showFeedbackBtn = false
    },
    onTryAgain () {
      this.$refs.question.clear()
      this.showFeedback = false
      this.lockQuestion = false
      this.showTryAgainBtn = false
    },
    onNext () {
      this.$refs.question.clear()
      this.showSubmitBtn = false
      this.showReviewBtn = false
      this.showFeedbackBtn = false
      this.showTryAgainBtn = false
      this.showNextBtn = false
      this.showFeedback = false
      this.lockQuestion = false
      this.questionAttempts = 0
      this.position++
      if (!this.anonymousQuiz) {
        this.$store.commit('setQuizPosition', { name: this.settings, position: this.position })
      }
      if (this.position >= this.quizList.length) {
        if (!this.anonymousQuiz) {
          this.$store.commit('setQuizPosition', { name: this.settings, position: -1 })
          if (this.quizOptions.quizAttempts === 0 || this.quizOptions.quizAttempts > this.$store.getters.getQuizHistory(this.settings).length) {
            this.showRetakeBtn = true
          }
        } else {
          this.showRetakeBtn = true
        }
        if (this.$slots['default']) {
          this.showResults = true
        }
      } else {
        this.currentQuestion = this.getQuestion()
      }
    },
    onRetake () {
      this.position = 0
      this.questionAttempts = 0
      this.showSubmitBtn = false
      this.showReviewBtn = false
      this.showFeedbackBtn = false
      this.showTryAgainBtn = false
      this.showRetakeBtn = false
      this.showNextBtn = false
      this.showFeedback = false
      this.lockQuestion = false
      this.showResults = false
      this.getQuestionList()
    },
    onGraded (grade) {
      if (grade) {
        this.setComplete(1)
        if (this.quizOptions.hideRetakeOnPass) {
          this.showRetakeBtn = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .knowledge-check{
        position: relative;
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 100%;
        grid-template-columns: 100%;
        .question-holder, .results-holder{
            @include item_location(1,1);
        }
        /*.results-holder{
            display: block;
            width: 100%;
        }*/
        .button-bar {
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 3rem;
            .btn {
                height: 2rem;
                position: absolute;
                top: 0.5rem;
                font-size: 1rem;
                line-height: 1.5rem;
                padding: 0.25rem 0.5rem;
                background-color: color(secondary);
                color: color(text_inverse);
                cursor: pointer;
            }
            .submit-btn{
                right: 2rem;
            }
            .review-btn{
                left: 2rem;
            }
            .feedback-btn{
                left: 2rem;
            }
            .tryagain-btn{
                left: 2rem;
            }
            .retake-btn{
                left: 2rem;
            }
            .next-btn{
                right: 2rem;
            }
        }
        .no-quiz{
            @include padding(1,1,1,1);
            background: red;
            color: white;
        }
    }

</style>