<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 3 FR: Active Image</h1>
    <p>FR: is a component that allows for the simple animation of an image. While not a complete animation solution, ActiveImage has the power to create a multitude of visual effects. Active image has <span class="bold">3 modes:</span></p>
    <ul style="margin-left: 1.5rem">
      <li class="bold">FR: Viewport</li>
      <li class="bold">FR: Time</li>
      <li class="bold">FR: Trigger</li>
    </ul>
    <p>FR: Over the next 3 pages we will review how these modes work and sample some of the stuff you can do with ActiveImage.</p>
    <hr>
    <h3>FR: Viewport mode</h3>
    <p>FR: Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam velit, rhoncus vel nibh in, ultrices bibendum eros. Duis ac risus facilisis, auctor felis non, consectetur lorem. Donec sodales quis leo quis bibendum. Nullam non rhoncus mi. Donec faucibus ullamcorper dolor aliquam ultrices. Sed vitae nulla non lorem viverra rhoncus ut maximus orci. Nullam ut metus non quam fringilla sagittis in at dui. Vestibulum blandit tortor felis, et commodo augue ultricies non.</p>
    <p>Aliquam vitae magna id ante cursus pulvinar vitae id mi. Cras eget urna tempus, molestie ante et, posuere ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sodales consequat libero, ac laoreet odio volutpat id. Sed consectetur blandit sapien at tincidunt. Aliquam a dignissim nulla. Vivamus convallis urna ac nibh rhoncus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies accumsan ex sed dignissim. In hac habitasse platea dictumst. Duis ac tempor purus. Pellentesque id risus vitae eros posuere faucibus. Integer vel pretium tortor, id tincidunt nisl.</p>
    <p>Donec egestas faucibus tellus, ac volutpat magna consectetur a. Pellentesque nec ullamcorper ipsum. Proin iaculis velit vel nulla auctor, tristique aliquet diam varius. Maecenas a pharetra magna, at pulvinar nunc. Nulla aliquam erat tellus, at scelerisque elit fringilla interdum. Donec ultricies dolor eget scelerisque vestibulum. Sed ac venenatis ligula. Mauris gravida lacus sed mauris hendrerit eleifend. Fusce sit amet euismod dui. Quisque feugiat pretium orci, vitae imperdiet metus. Suspendisse rhoncus vitae felis sit amet faucibus. Integer efficitur mauris pharetra tortor tincidunt, a mattis mi aliquam.</p>
  </panel>
  <panel class="panel-single" uid="2">
    <active-image class="parallax-image" :settings="aiSettings1" :src="aiBg2">
    </active-image>
  </panel>
  <panel class="panel2" uid="3">
    <p>FR: Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam velit, rhoncus vel nibh in, ultrices bibendum eros. Duis ac risus facilisis, auctor felis non, consectetur lorem. Donec sodales quis leo quis bibendum. Nullam non rhoncus mi. Donec faucibus ullamcorper dolor aliquam ultrices. Sed vitae nulla non lorem viverra rhoncus ut maximus orci. Nullam ut metus non quam fringilla sagittis in at dui. Vestibulum blandit tortor felis, et commodo augue ultricies non.</p>
    <p>Aliquam vitae magna id ante cursus pulvinar vitae id mi. Cras eget urna tempus, molestie ante et, posuere ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sodales consequat libero, ac laoreet odio volutpat id. Sed consectetur blandit sapien at tincidunt. Aliquam a dignissim nulla. Vivamus convallis urna ac nibh rhoncus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies accumsan ex sed dignissim. In hac habitasse platea dictumst. Duis ac tempor purus. Pellentesque id risus vitae eros posuere faucibus. Integer vel pretium tortor, id tincidunt nisl.</p>
    <p>Donec egestas faucibus tellus, ac volutpat magna consectetur a. Pellentesque nec ullamcorper ipsum. Proin iaculis velit vel nulla auctor, tristique aliquet diam varius. Maecenas a pharetra magna, at pulvinar nunc. Nulla aliquam erat tellus, at scelerisque elit fringilla interdum. Donec ultricies dolor eget scelerisque vestibulum. Sed ac venenatis ligula. Mauris gravida lacus sed mauris hendrerit eleifend. Fusce sit amet euismod dui. Quisque feugiat pretium orci, vitae imperdiet metus. Suspendisse rhoncus vitae felis sit amet faucibus. Integer efficitur mauris pharetra tortor tincidunt, a mattis mi aliquam.</p>
    <p>Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
  </panel>
  <panel class="panel-triple" uid="4">
    <active-image class="triple-parallax" :settings="aiSettings3_1" :src="aiBg3"></active-image>
    <active-image class="triple-parallax" :settings="aiSettings3_2" :src="aiBg3"></active-image>
    <active-image class="triple-parallax" :settings="aiSettings3_3" :src="aiBg3"></active-image>
  </panel>
  <panel class="panel3" uid="5">
    <p>FR: Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam velit, rhoncus vel nibh in, ultrices bibendum eros. Duis ac risus facilisis, auctor felis non, consectetur lorem. Donec sodales quis leo quis bibendum. Nullam non rhoncus mi. Donec faucibus ullamcorper dolor aliquam ultrices. Sed vitae nulla non lorem viverra rhoncus ut maximus orci. Nullam ut metus non quam fringilla sagittis in at dui. Vestibulum blandit tortor felis, et commodo augue ultricies non.</p>
    <p>Aliquam vitae magna id ante cursus pulvinar vitae id mi. Cras eget urna tempus, molestie ante et, posuere ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sodales consequat libero, ac laoreet odio volutpat id. Sed consectetur blandit sapien at tincidunt. Aliquam a dignissim nulla. Vivamus convallis urna ac nibh rhoncus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies accumsan ex sed dignissim. In hac habitasse platea dictumst. Duis ac tempor purus. Pellentesque id risus vitae eros posuere faucibus. Integer vel pretium tortor, id tincidunt nisl.</p>
    <p>Donec egestas faucibus tellus, ac volutpat magna consectetur a. Pellentesque nec ullamcorper ipsum. Proin iaculis velit vel nulla auctor, tristique aliquet diam varius. Maecenas a pharetra magna, at pulvinar nunc. Nulla aliquam erat tellus, at scelerisque elit fringilla interdum. Donec ultricies dolor eget scelerisque vestibulum. Sed ac venenatis ligula. Mauris gravida lacus sed mauris hendrerit eleifend. Fusce sit amet euismod dui. Quisque feugiat pretium orci, vitae imperdiet metus. Suspendisse rhoncus vitae felis sit amet faucibus. Integer efficitur mauris pharetra tortor tincidunt, a mattis mi aliquam.</p>
    <p>Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
  </panel>
  <panel class="panel-double" uid="6">
    <active-image class="double-parallax" :settings="aiSettings2_1" :src="aiBg4"></active-image>
    <active-image class="double-parallax" :settings="aiSettings2_2" :src="aiBg4"></active-image>
  </panel>
  <panel class="panel4" uid="7">
    <p>FR: Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam velit, rhoncus vel nibh in, ultrices bibendum eros. Duis ac risus facilisis, auctor felis non, consectetur lorem. Donec sodales quis leo quis bibendum. Nullam non rhoncus mi. Donec faucibus ullamcorper dolor aliquam ultrices. Sed vitae nulla non lorem viverra rhoncus ut maximus orci. Nullam ut metus non quam fringilla sagittis in at dui. Vestibulum blandit tortor felis, et commodo augue ultricies non.</p>
    <p>Aliquam vitae magna id ante cursus pulvinar vitae id mi. Cras eget urna tempus, molestie ante et, posuere ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sodales consequat libero, ac laoreet odio volutpat id. Sed consectetur blandit sapien at tincidunt. Aliquam a dignissim nulla. Vivamus convallis urna ac nibh rhoncus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies accumsan ex sed dignissim. In hac habitasse platea dictumst. Duis ac tempor purus. Pellentesque id risus vitae eros posuere faucibus. Integer vel pretium tortor, id tincidunt nisl.</p>
    <p>Donec egestas faucibus tellus, ac volutpat magna consectetur a. Pellentesque nec ullamcorper ipsum. Proin iaculis velit vel nulla auctor, tristique aliquet diam varius. Maecenas a pharetra magna, at pulvinar nunc. Nulla aliquam erat tellus, at scelerisque elit fringilla interdum. Donec ultricies dolor eget scelerisque vestibulum. Sed ac venenatis ligula. Mauris gravida lacus sed mauris hendrerit eleifend. Fusce sit amet euismod dui. Quisque feugiat pretium orci, vitae imperdiet metus. Suspendisse rhoncus vitae felis sit amet faucibus. Integer efficitur mauris pharetra tortor tincidunt, a mattis mi aliquam.</p>
    <p>Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Cras sagittis tellus risus. Donec quam magna, interdum venenatis neque eu, blandit finibus lacus. Vivamus luctus arcu at ligula fermentum, vitae consectetur eros ullamcorper. Nam sit amet dolor eu odio tristique sagittis. Nullam in porttitor lectus. Maecenas risus eros, dictum in luctus sit amet, efficitur semper turpis. Pellentesque tincidunt arcu laoreet purus fringilla tristique. Pellentesque a viverra sapien, eu vulputate sapien. Nullam sodales dignissim ultrices. Nulla varius arcu velit, non lobortis neque pretium id. Nulla dictum enim nec ex condimentum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac augue imperdiet, porttitor tortor a, auctor urna. Nunc nec dignissim ipsum. Duis tincidunt tellus et condimentum fermentum. Sed dui elit, euismod ut dapibus sed, consequat vitae leo.</p>
    <p>Cras neque orci, vehicula sit amet turpis sed, porta ultrices orci. Aenean ac dui nec dolor ultrices consequat vel non magna. Proin ut porttitor sapien. Nam pellentesque tortor ornare, ultricies ante eget, gravida urna. Duis imperdiet pellentesque velit, at tincidunt odio scelerisque ut. Mauris aliquet in tellus ut molestie. Fusce sodales ante quis eros fermentum tincidunt.</p>
  </panel>
  <panel class="panel-end" uid="8">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import ActiveImage from '@/components/interactives/ActiveImage'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import Bg1 from '@/assets/images/bg4.jpg'
import Bg2 from '@/assets/images/bg2p.jpg'
import Bg3 from '@/assets/images/bg5p.jpg'
import Bg4 from '@/assets/images/bg6p.jpg'
export default {
  name: 'page3',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'active-image': ActiveImage
  },
  data () {
    return {
      aiBg1: Bg1,
      aiBg2: Bg2,
      aiBg3: Bg3,
      aiBg4: Bg4,
      aiSettings0: {
        animationType: 'time', // viewport, time, trigger
        ease: 'sineInOut',
        startX: 50,
        startY: 30,
        endX: 50,
        endY: 10,
        startWidth: 100,
        duration: 40,
        repeatType: 'reverse'
      },
      aiSettings1: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 50,
        startY: 100,
        startWidth: 'auto',
        startheight: '100vh',
        endX: null,
        endY: 0
      },
      aiSettings3_1: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 0,
        startY: 0,
        endX: null,
        endY: 100,
        startWidth: 300
      },
      aiSettings3_2: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 50,
        startY: 100,
        endX: null,
        endY: 0,
        startWidth: 300
      },
      aiSettings3_3: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 100,
        startY: 150,
        endX: null,
        endY: -50,
        startWidth: 300
      },
      aiSettings2_1: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 0,
        startY: 0,
        endX: 100,
        startWidth: 120
      },
      aiSettings2_2: {
        animationType: 'viewport', // viewport, time, trigger
        ease: 'linear',
        startX: 100,
        startY: 100,
        endX: 0,
        startWidth: 120
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel0{
  .header-image{
    height: 5rem;
    overflow: hidden;
    h1{
      color: white;
      font-weight: bold;
      font-size: 7.3rem;
      transform: translateY(-1rem);
      opacity: 0.35;
      text-align: center;
    }
  }
}
.panel1, .panel2, .panel3, .panel4{
  background: #fdfdfd;
  @include padding(1,1,1,1);
}
.panel-single{
  .parallax-image{
    width: 100%;
    height: 20rem;
  }
}
.panel-triple{
  @include legacy_columns(1, 1, 1);
  .triple-parallax{
    @include legacy_placement(3, 1);
    width: 100%;
    height: 20rem;
  }
}
.panel-double{
  .double-parallax{
    width: 100%;
    height: 18.9rem;
  }
}
.panel3{
  background: #fdfdfd;
  @include padding(1,1,1,1);
}
.panel-end{
  margin-top: 50px;
  position: absolute;
  bottom: 0;
  max-width: 1024px;
  width: 100%;
  @include padding(0.5,0.5,0.5,0.5);
  transition:opacity 1s linear 1s;
  opacity: 1;
  background: rgba(#ffffff, 0.3);
  color: color(support_green);
}

</style>