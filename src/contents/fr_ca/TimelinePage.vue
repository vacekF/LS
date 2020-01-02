<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 4 FR: Timeline</h1>
    <p>FR: The timeline interactive reveals multiple items along the line. Select each point to reveal the associated content. </p>
    <timeline :start="0" :end="8" :divide="20" class="timeline">
      <time-node complete="0" label="FR: First Entry" :position="1" class="time" group="z" id="tn1">
        <h2>FR: First Entry</h2>
        <p>FR: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum justo quis enim elementum, vitae consectetur sem feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis convallis turpis
          id nisi pharetra posuere. Fusce quis nunc quis eros rutrum posuere quis quis quam. Proin ultrices at quam eu porta. Suspendisse fringilla, enim eget tincidunt interdum, elit nunc vehicula velit, id egestas leo tortor ac augue. In ut lacinia
          ipsum. Etiam nisl ante, condimentum sed lectus a, pulvinar placerat tellus. In eget ligula eros. Etiam vitae sapien ullamcorper, faucibus quam vel, faucibus eros. Suspendisse vel molestie lacus, in accumsan nulla. Etiam ullamcorper ac odio ut
          laoreet. Ut non fermentum augue, ac finibus enim. Phasellus volutpat tortor nec semper aliquet.</p>
      </time-node>
      <time-node complete="1" label="FR: Second Entry" :position="3" class="time" group="z" id="tn2">
        <h2>FR: Second Entry</h2>
        <p>FR: Nam ac est sem. Sed cursus tincidunt lacinia. Donec id luctus augue, sit amet vestibulum sapien. Aliquam condimentum tortor nulla, ac ultricies lorem dapibus ut. Duis malesuada in ipsum ut varius. Sed interdum, massa et dapibus porta, ante risus
          porta sapien, a ornare risus nulla vitae diam. Mauris nibh diam, molestie vitae nulla in, vestibulum blandit ligula. Quisque porttitor in diam at sagittis. Aenean pretium leo nisl, nec efficitur neque accumsan ac. Donec feugiat augue nisl, at
          mollis dui eleifend vel. Nulla ut purus egestas, pretium libero placerat, lacinia est. Ut lobortis purus in justo molestie, eu eleifend mi efficitur. Donec a aliquet ligula, malesuada convallis risus. Nullam sit amet quam id diam lacinia lacinia.
          Nunc eu lectus tristique dolor rutrum euismod et a sapien.</p>
      </time-node>
      <time-node complete="2" label="FR: Third Entry" :position="5" class="time" group="z" id="tn3">
        <h2>FR: Third Entry</h2>
        <p>FR: Cras venenatis, ligula quis vulputate tristique, nunc libero tempus nulla, et posuere risus ipsum eget tortor. Integer tellus risus, suscipit non nibh id, imperdiet sodales purus. Etiam blandit est turpis, in finibus massa mattis sed. Etiam sed
          efficitur turpis, a imperdiet est. Praesent aliquet dignissim elit, sit amet tincidunt enim condimentum rhoncus. Nullam quis lectus sed lectus vestibulum bibendum sit amet vitae felis. Sed accumsan libero dolor, id feugiat arcu iaculis id. Sed
          mattis et massa eu luctus. In hac habitasse platea dictumst.</p>
      </time-node>
      <time-node complete="3" label="FR: Fourth Entry" :position="7" class="time" group="z" id="tn4">
        <h2>FR: Fourth Entry</h2>
        <p>FR: Nullam mattis, purus ac iaculis rutrum, est sapien congue enim, sed sollicitudin massa metus ac elit. Pellentesque massa augue, convallis vel erat sed, fringilla tristique justo. Phasellus et euismod augue. Duis sed nunc urna. Proin sodales leo
          at porta venenatis. Morbi ac varius dolor, eu semper tellus. Maecenas condimentum consectetur odio, sit amet hendrerit eros fringilla sit amet. Fusce blandit ipsum ac quam euismod accumsan. Curabitur finibus risus ac est congue, id mollis purus
          sagittis. Nullam porta, felis vel suscipit accumsan, lacus mauris cursus nisi, non accumsan diam tortor eget est. Mauris ac felis lobortis, eleifend turpis faucibus, mattis tellus.</p>
      </time-node>
    </timeline>
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
import Timeline from '@/components/interactives/Timeline'
import TimeNode from '@/components/interactives/TimeNode'
export default {
  name: 'timeline-page',
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'timeline': Timeline,
    'time-node': TimeNode
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
  @include padding(1,1,1,1);
  background: white;
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