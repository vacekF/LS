import { questions as en_questions, quizzes, pools, questionRecords, quizRecords } from './en/questions'
import { questions as fr_ca_questions } from './fr_ca/questions'

export let courseQuestions = {
  'en': en_questions,
  'fr_ca': fr_ca_questions
}
export let courseQuizzes = quizzes
export let coursePools = pools
export let courseQuestionRecords = questionRecords
export let courseQuizRecords = quizRecords
