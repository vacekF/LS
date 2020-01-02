<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 5: Hotspot Badge</h1>
    <p>Hotspot badges can be added as an overlay on an image. These badges are ideal for revealing more information releated to specific points in a diagram, illustration or other visual layout. They could also be used with a scenario image where clicking on a person reveals a thought or speech bubble. Select each symbol to reveal the content.</p>
    <div class="img-holder">
      <img src="@/assets/images/bg2.jpg">
      <hotspot-badge :coords="{x:20, y:20}" id="hb1" group="b" complete="0">
        <p>Hello! I have all the info you need about this location.</p>
      </hotspot-badge>
      <hotspot-badge :coords="{x:84, y:27}" id="hb2" group="b" complete="1">
        <p>Hello! I have all the info you need about this location.</p>
      </hotspot-badge>
      <hotspot-badge :coords="{x:70, y:80}" id="hb3" group="b" complete="2">
        <p>Hello! I have all the info you need about this location.</p>
      </hotspot-badge>
    </div>
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
import HotspotBadge from '@/components/interactives/HotspotBadge'
export default {
  name: 'page5',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'hotspot-badge': HotspotBadge
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
    @include padding(1,1,1,1);
    background: white;
    .img-holder{
        @include padding(0.5,0,0,0);
        position: relative;
        img{
            width:100%;
            display:block;
        }
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