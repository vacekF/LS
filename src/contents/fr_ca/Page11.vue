<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <knowledge-check settings="posttest" complete="0">
      <pool-results>
        <template slot="pass">
          <p>FR: Congratulations! You have passed. Please click 'Start' button to return to the main menu.</p>
        </template>
        <template slot="fail">
          <p>FR: Sorry! You have failed. Select Next to continue.</p>
        </template>
      </pool-results>
    </knowledge-check>
    <div class="spacer"></div>
  </panel>
  <panel class="panel2" uid="2">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
import KnowledgeCheck from '@/components/assessments/KnowledgeCheck'
import PoolResults from '@/components/assessments/results/PoolResults'
export default {
  name: 'page11',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'knowledge-check': KnowledgeCheck,
    'pool-results': PoolResults
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1 {
  .spacer {
    background-color:green;
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