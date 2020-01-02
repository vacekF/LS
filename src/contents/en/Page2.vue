<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 2: Linear Carousel</h1>
    <p>The linear carousel breaks up page content onto multiple slides in the carousel. It is a good option to break up content in a scenario, present multiple concepts that build on each other, or reduce scrolling on a page with a large amount of content. The slides can contain images, text, a mix of both, or interactive elements as presented on other pages.</p>
    <linear-carousel class="linearc" complete="0" id="lc">
      <img src="@/assets/images/bg1.jpg" key="bg1">
      <img src="@/assets/images/bg2.jpg" key="bg2">
      <img src="@/assets/images/bg3.jpg" key="bg3">
      <img src="@/assets/images/bg4.jpg" key="bg4">
      <img src="@/assets/images/bg5.jpg" key="bg5">
      <img src="@/assets/images/bg6.jpg" key="bg6">
      <img src="@/assets/images/bg7.jpg" key="bg7">
      <img src="@/assets/images/bg8.jpg" key="bg8">
    </linear-carousel>
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
import LinearCarousel from '@/components/interactives/LinearCarousel'
export default {
  name: 'page2',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'linear-carousel': LinearCarousel
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
    @include padding(1,1,1,1);
    background: white;
  img{
    width: 100%;
  }
  .linearc {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .spacer {
    width: 100%;
    height: 3rem;
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