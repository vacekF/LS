<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 10: Click & Reveal</h1>
    <p>Simple can present click-to-reveal content in multiple ways. These examples show how content can be revealed by inline text or objects, or also by blocks containing images or other features. Select the the following text and image to reveal the content and complete the page. </p>
  </panel>
  <panel class="panel2" uid="2">
    <div>
      <h2>Inline Example</h2>
      <click-reveal target="target1" complete="0">
        <p class="bold">SELECT ME!</p>
      </click-reveal>
      <p id="target1">I am the revealed content!</p>
    </div>
    <div>
      <h2>Block Example</h2>
      <click-reveal target="target2" complete="1">
        <img src="@/assets/images/bg1.jpg">
      </click-reveal>
      <p id="target2">I am the revealed content!</p>
    </div>
  </panel>
  <panel class="panel3" uid="3">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
import ClickReveal from '@/components/completion/ClickReveal'
export default {
  name: 'page10',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'click-reveal': ClickReveal
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
  background: white;
  @include padding(1,1,0,1);
}
.panel2{
    background: white;
    @include padding(1,1,1,1);
    @include legacy_columns(1,1);
    div{
        @include legacy_placement(2,1);
        img{
            display:block;
            width: calc( 100% - 0.25rem );
            cursor: pointer;
        }
    }
}
.panel3{
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