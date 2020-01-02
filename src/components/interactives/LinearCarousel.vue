<template>
    <div class="linear-carousel">
        <svg-container class="check" :src="check" v-if="getCompletion >= 1"/>
        <carousel :position="position" :transitionType="transition" class="carousel" :length.sync="slideTotal">
            <slot></slot>
        </carousel>
        <div class="control-bar" :style="{backgroundColor: barColor}" :class="{complete: getCompletion >= 1}">
            <button @click="back" class="back" v-show="position > 0">
                <svg-container class="back-icon" :src="backIcon"/>
            </button>
            <p class="position-display">{{positionDisplay}}</p>
            <button @click="forward" class="forward" v-show="position < slideTotal-1">
                <svg-container class="forward-icon" :src="forwardIcon"/>
            </button>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/interactives/Carousel'
import ForwardIcon from '@/assets/svg/icons/chevron_forward.svg'
import BackIcon from '@/assets/svg/icons/chevron_back.svg'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
export default {
  name: 'linear-carousel',
  mixins: [CompletionMixin],
  components: {
    'carousel': Carousel
  },
  props: {
    barColor: {
      default: ''
    }
  },
  data () {
    return {
      position: 0,
      slideTotal: 0,
      transition: 'slide-forward',
      forwardIcon: ForwardIcon,
      backIcon: BackIcon
    }
  },
  computed: {
    positionDisplay () {
      return (this.position + 1) + '/' + this.slideTotal
    }
  },
  methods: {
    forward () {
      if (!this.isLocked()) {
        this.transition = 'slide-forward'
        this.position++
        if (this.position === this.slideTotal - 1) {
          this.setComplete(1)
        }
      }
    },
    back () {
      if (!this.isLocked()) {
        this.transition = 'slide-back'
        this.position--
      }
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/styles/style_utils.scss';
    .linear-carousel{
        position:relative;
        display: -ms-grid;
        display: grid;
        overflow: hidden;
        -ms-grid-columns: 100%;
        grid-template-columns: 100%;
        -ms-grid-rows: 1fr 2.5rem;
        grid-template-rows: 1fr 2.5rem;
        .check{
            width: 1rem;
            height: 1.5rem;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            display: block;
            svg{
                fill: color(text_inverse);
                width: auto;
                height: calc(100% - .25rem);
            }
        }
        .carousel{
            -ms-grid-column: 1;
            grid-column: 1;
            -ms-grid-row: 1;
            grid-row: 1;
        }
    }
    .control-bar{
        background-color: color(component_chrome);
        width:100%;
        height:2.5rem;
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 2;
        grid-row: 2;
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 3rem 1fr 3rem 1fr 3rem;
        grid-template-columns: 3rem 1fr 3rem 1fr 3rem;
        transition: background 2s, color 2s;
        &.complete{
            background: color(component_chrome_complete) !important;
        }
        button{
            height:2.5rem;
            overflow: hidden;
            appearance: none;
            outline: none;
            border: none;
            cursor: pointer;
            background: transparent;
            .svg-container{
                width: 2rem;
                height: 2rem;
                border: 0.1rem solid color(white_bright);
                box-sizing: border-box;
                background-color: color(hightlight);
                border-radius: 50%;
                svg{
                    width: 1rem;
                    height: 1.2rem;
                    fill: color(white_bright);
                }
            }
        }
        .position-display{
            color: color(text_inverse);
            -ms-grid-column: 3;
            grid-column: 3;
            line-height: 2.5rem;
        }
        .forward{
            -ms-grid-column: 5;
            grid-column: 5;
            .svg-container{
                svg{
                    transform: translate(0.1rem, 0.25rem);
                }
            }
        }
        .back{
            -ms-grid-column: 1;
            grid-column: 1;
            .svg-container{
                svg{
                    transform: translate(-0.1rem, 0.25rem);
                }
            }
        }
    }
</style>