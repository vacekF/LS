<template>
    <div class="accordion-panel" :class="{complete: getCompletion >= 1}">
        <div class="accordion-bar" v-on:click="barSelected" :style="{backgroundColor: barColor}">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <svg-container class="check" :src="check" v-if="getCompletion >= 1"/>
            <div class="icon" v-bind:class="{open: active}">+</div>
        </div>
        <div class="accordion-content" v-bind:class="{open: active, padding: padding}">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'accordion-panel',
  mixins: [CompletionMixin, GroupMixin],
  props: {
    barColor: {
      default: ''
    },
    padding: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    barSelected () {
      if (!this.isLocked()) {
        this.active = !this.active
        if (this.active) {
          this.setComplete(1)
          this.broadcastToGroup()
        } else {
          this.activeItem = false
        }
      }
    }// ,
    /* groupToggle (g) {
      if (!this.isLocked()) {
        if (g === this.group) {
          if (!this.activeItem) {
            this.active = false
          } else {
            this.activeItem = false
          }
        }
      }
    } */
  }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/style_utils';
    .accordion-panel{
        .accordion-bar{
            display: flex;
            position: relative;
            width: 100%;
            height: 2rem;
            background: color(component_chrome);
            color: color(white_bright);
            transition: background 2s, color 2s;
            @include padding(0.1,0.5,0.1,0.5);
            cursor:pointer;
            margin: 1px 0;
            .title{
                line-height:150%;
                font-size: 110%;
                p{
                    margin-bottom: 0;
                }
                /deep/ .content-element{
                    p{
                        margin-bottom: 0;
                    }
                }
            }
            /deep/ .svg-container{
                width: 1rem;
                height: 1.5rem;
                position: relative;
                right: 0.2rem;
                margin-left: 0.5rem;
                // display:none;
                svg{
                    fill: color(text_inverse);
                    width: auto;
                    height: calc(100% - .25rem);
                }
            }
            .icon{
                font-size:150%;
                font-weight:bold;
                transform-origin: 50% 50%;
                transform: rotate(0deg);
                transition: transform 0.5s ease-in-out;
                position:absolute;
                right: 0;
                margin-right: 0.5rem;
                &.open{
                    transform: rotate(45deg);
                }
            }
        }
        .accordion-content{
            width: 100%;
            max-height: 0;
            overflow-x: hidden;
            overflow-y: auto;
            border: none;
            opacity: 0;
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, border 0.5s ease-in-out, padding 0.5s ease-in-out;
            &.padding{
                @include padding(0,0.5,0,0.5);
            }
            &.open{
                opacity: 1;
                max-height: 90vh;
                border: 1px solid color(primary_gray);
                &.padding {
                    @include padding(0.5, 0.5, 0.5, 0.5);
                }
            }
        }
        &.complete{
            .accordion-bar{
                background: color(component_chrome_complete) !important;
                color: color(text_inverse);

                .check{
                    fill: color(text_inverse);
                    align-self: center;
                    // display:block;
                }
            }
        }
    }
</style>
