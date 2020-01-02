<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 9: Info Badge</h1>
    <p>Information badges can be used to present content tips, feedback, or more information about a selected item. The badges can be added throughout keypoint of the course, or where learners may need additional direction. Select the icon to reveal the associated content.</p>
    <info-badge complete="0">
      <p>I am an <span class="bold">InfoBadge</span>. Simple framework can track my completion if desired, or I can be used for optional information.</p>
    </info-badge>
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
import InfoBadge from '@/components/interactives/InfoBadge'
export default {
  name: 'page9',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'info-badge': InfoBadge
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
    @include padding(1,1,1,1);
    background: white;
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