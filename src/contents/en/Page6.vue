<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 6: Click & Reveal + Popovers</h1>
    <p>Popovers provide interactivity where the revealed text can appear anywhere on the page in a new layer. Select each bulleted iteam to reveal the popovers. </p>
    <ul>
      <li>
        <click-reveal target="target3" complete="0">Open Popover 1</click-reveal>
      </li>
      <li>
        <click-reveal target="target4" complete="1">Open Popover 2</click-reveal>
      </li>
      <li>
        <click-reveal target="target5" complete="2">Open Popover 3</click-reveal>
      </li>
    </ul>
    <popover id="target3" group="a">
      <p>I am <span class="bold">popover 1</span>! You can close me by selecting a new <span class="bold">Popover</span> or selecting me.</p>
    </popover>
    <popover id="target4" group="a">
      <p>I am <span class="bold">popover 2</span>! You can close me by selecting a new <span class="bold">Popover</span> or selecting me.</p>
    </popover>
    <popover id="target5" group="a">
      <p>I am <span class="bold">popover 3</span>! You can close me by selecting a new <span class="bold">Popover</span> or selecting me.</p>
    </popover>
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
import ClickReveal from '@/components/completion/ClickReveal'
import Popover from '@/components/interactives/Popover'
export default {
  name: 'page6',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'click-reveal': ClickReveal,
    'Popover': Popover
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
    background: white;
    @include padding(1,1,1,1);
    position:relative;
    /deep/ .click-reveal{
      .check{
        right: -1.2rem;
        top: -.25rem;
      }
    }
    #target3{
        top:6rem;
        right:0;
        width:50%;
    }
    #target4{
        top:8rem;
        left:25%;
        width:50%;
    }
    #target5{
        top:8rem;
        left:30%;
        width:50%;
    }
    .spacer {
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