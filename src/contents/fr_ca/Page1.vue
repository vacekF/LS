<template><page class="page">
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 1 FR: ACCORDION</h1>
  </panel>
  <accordion-panel id="c" group="a" complete="0" barcolor="#0000ff">
    <p slot="title">FR: Accordion Panel Title1</p>
    <p slot="content" class="acontent">FR: Sample Content1</p>
  </accordion-panel>
  <accordion-panel id="d" group="a" complete="1" barcolor="#0000ff">
    <p slot="title">FR: Accordion Panel Title2</p>
    <p slot="content" class="acontent">FR: Sample Content2</p>
  </accordion-panel>
  <accordion-panel id="e" group="a" complete="2" barcolor="#0000ff">
    <p slot="title">FR: Accordion Panel Title2</p>
    <p slot="content" class="acontent">FR: Sample Content2</p>
  </accordion-panel>
  <panel class="panel1 flip" uid="2">
    <h1>FR: FLIP CARD</h1>
    <flip-card class="vert" group="b" complete="3">
      <img src="@/assets/images/bg1f.jpg" slot="top">
      <img src="@/assets/images/bg1f1.jpg" slot="bottom">
      <div slot="bottom" class="bottom">
        <p style="z-index: 1000; position: absolute; left: 150px; top:50px; color:white">FR: Content for backside of FlipCard</p>
      </div>
    </flip-card>
  </panel>
  <panel class="panel2" uid="3">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import AccordionPanel from '@/components/interactives/AccordionPanel'
import FlipCard from '@/components/interactives/FlipCard'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
export default {
  name: 'page1',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    AccordionPanel,
    FlipCard
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
 .page{
    .panel1{
      @include padding(0.5,0.5,0.5,0.5);
      transition:opacity 1s linear 1s;
      opacity: 1;
      background: rgba(#ffffff, 0.3);
      color: color(support_green);
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
    .flip {
      height: 400px;
    }
  }
</style>
<style lang="scss">
 .accordion-content[data-v-23442eda] {
        opacity: 1;
        background-color: rgba(#ffffff, 0.7) !important;
  }
  .flip-card {
        width: 95%;
        height: 15em !important;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;

         img {
        margin-left: 120px;
        margin-right: auto;
            }

  }
  .flip-bottom {
     /*   background-color:white; */
  }

</style>