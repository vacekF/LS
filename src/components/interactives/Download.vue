<template>
<div class="download" v-on:click="openResource" v-bind:class="{complete: getCompletion >= 1}">
    <svg-container  class=icon :src="icon1"/>
    <p>
        <slot></slot>
    </p>
</div>
</template>

<script>
import Icon from '@/assets/svg/icons/download.svg'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
export default {
  name: 'download',
  mixins: [CompletionMixin],
  props: {
    link: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: 'resource'
    }
  },
  data () {
    return {
      icon1: Icon
    }
  },
  methods: {
    openResource () {
      if (!this.isLocked()) {
        this.setComplete(1)
        if (this.link.length > 0) {
          window.open(this.link, this.target)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/style_utils.scss';
.download{
    width:100%;
    height: 2.5rem;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 2.5rem 1fr;
    grid-template-columns: 2.5rem 1fr;
    cursor: pointer;
    /deep/ .icon{
        width: 2.5rem;
        height: 2.5rem;
        box-sizing: border-box;
        @include item_location(1,1);
        @include float-shadow;
        border-radius: 50%;
        svg{
            transition: fill 2s ease-in;
            width: 2.5rem;
            height: 2.5rem;
            #background{
                fill: color(highlight);
            }

        }
    }
    &.complete{
        /deep/ .icon{
            svg{
                #background{
                    fill: color(badge_complete);
                }
            }
        }
    }
    P{
        padding-left: 0.5rem;
        align-self: center;
        margin-bottom: 0;
        font-weight: bold;
        line-height: 1;
        @include item_location(2,1);
    }
}
</style>