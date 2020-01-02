<template><page>
  <panel class="panel0" uid="0">
    <page-completion-status></page-completion-status>
  </panel>
  <panel class="panel1" uid="1">
    <h1>Page 7 FR: Complete Reveal</h1>
    <p>FR: Any interactive object can reveal additional content when completion is triggered. The revealed content can be text in the same panel, another panel of content, or another interactive. If you want a learner to complete multiple tasks on one page, you can use these content reveals to present additional content at each step. Click each accordion pnael to reveal the text.</p>
    <accordion-panel id="ap1" group="a" complete="0">
      <content-element slot="title" uid="0">
        <p>FR: Accordion Panel 1</p>
      </content-element>
      <content-block slot="content" uid="1">
        <p>FR: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis nec arcu nec scelerisque. Sed aliquam odio velit, a mollis justo pulvinar vel. Mauris rhoncus mi a justo dignissim, id finibus dui viverra. Nullam ac dictum est, in molestie
          erat. Etiam pellentesque fermentum risus, a pellentesque libero auctor eget. Curabitur posuere lacinia orci, ut eleifend nunc blandit dignissim. Nulla hendrerit felis et lorem bibendum, in auctor enim consectetur. Vivamus non nunc id elit fringilla
          rhoncus eu et leo. Fusce semper dignissim odio et dictum. Integer auctor, massa et placerat mattis, odio felis dignissim mi, a tristique magna libero eget nibh.</p>
      </content-block>
    </accordion-panel>
    <accordion-panel id="ap2" group="a" complete="1">
      <content-element slot="title" uid="2">
        <p>FR: Accordion Panel 2</p>
      </content-element>
      <content-block slot="content" uid="3">
        <p>FR: Nullam posuere lorem nec magna blandit imperdiet. Suspendisse eget molestie felis. Etiam maximus egestas leo, id luctus mauris sodales in. Cras justo lacus, congue eget erat vel, sagittis dignissim velit. Vestibulum mollis pellentesque elementum.
          Mauris eleifend ultrices rhoncus. Maecenas convallis nisi velit, vel dapibus sem fermentum sed. Phasellus suscipit pharetra maximus. Aliquam erat volutpat.</p>
      </content-block>
    </accordion-panel>
    <accordion-panel id="ap3" group="a" complete="2">
      <content-element slot="title" uid="4">
        <p>FR: Accordion Panel 3</p>
      </content-element>
      <content-block slot="content" uid="5">
        <p>FR: Proin vitae augue id tellus condimentum porttitor quis tempor leo. Mauris vitae vehicula nisi, et iaculis tellus. Aenean accumsan pulvinar porttitor. Vestibulum commodo mollis ornare. Donec justo eros, gravida nec vulputate at, condimentum eget
          tortor. Pellentesque pulvinar eu nibh et venenatis. Aenean et dictum justo, et hendrerit dolor. Etiam pellentesque lorem enim, ut condimentum mi ornare a. Sed vel volutpat urna. Vestibulum tempus facilisis nunc eu egestas. Vivamus ultricies
          arcu quis fringilla posuere.</p>
      </content-block>
    </accordion-panel>
    <complete-reveal :watch="crWatch" transition="slide-forward">
      <h1>FR: I'm content that is revealed once the accordion panels are complete!</h1>
    </complete-reveal>
  </panel>
  <panel class="panel2" uid="2">
    <back-button></back-button>
    <next-button></next-button>
  </panel>
</page></template>

<script>
import CompleteReveal from '@/components/completion/CompleteReveal'
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import PageCompletionStatus from '@/components/status/PageCompletionStatus'
import AccordionPanel from '@/components/interactives/AccordionPanel'
export default {
  name: 'page7',
  data () {
    return {
      crWatch: ['ap1', 'ap2', 'ap3']
    }
  },
  components: {
    'back-button': BackButton,
    'next-button': NextButton,
    'page-completion-status': PageCompletionStatus,
    'accordion-panel': AccordionPanel,
    'complete-reveal': CompleteReveal
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/style_utils';
.panel1{
    @include padding(1,1,1,1);
    background: white;
    h1 {
      padding-top:1rem;
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