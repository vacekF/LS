<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel01" uid="1">
    <h1>Page 8: Knowledge Check</h1>
  </panel>
  <panel class="panel1" uid="2">
    <knowledge-check settings="kc1" id="kc1" complete="0">
      <basic-results>
        <template slot="pass">
          <p>Congratulations! You have passed.</p>
        </template>
        <template slot="fail">
          <p>Sorry! You have failed. Select Next to continue.</p>
        </template>
      </basic-results>
    </knowledge-check>
    <div class="spacer"></div>
  </panel>
  <panel class="panel2" uid="3">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
import KnowledgeCheck from '@/components/assessments/KnowledgeCheck'
import BasicResults from '@/components/assessments/results/BasicResults'
export default {
  name: 'page8',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'knowledge-check': KnowledgeCheck,
    'basic-results': BasicResults
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
@import '../../assets/styles/examples/multiple_choice_skin.scss';
.panel01{
  background: white;
  @include padding(0.5,1,0,1);
}
.panel1{
  @include multiple-choice-skin();
  // background: white
  /deep/ .multiple-choice .question .distractors {
    margin-top: 3rem;
  }
  /deep/ .multiple-choice .question .query {
    margin-top: 3rem;
  }
  /deep/ .multiple-choice .feedback .correct {
    color: black;
  }
  .spacer {
    background-color:#58964a;
    width: 100%;
    height: 5rem;
  }
}
.panel2{
  position: absolute;
  bottom: 0;
  max-width: 1024px;
  width: 100%;
  margin-top: 50px;
  @include padding(0.5,0.5,0.5,0.5);
  transition:opacity 1s linear 1s;
  opacity: 1;
  background: rgba(#ffffff, 0.3);
  color: color(support_green);
}
</style>