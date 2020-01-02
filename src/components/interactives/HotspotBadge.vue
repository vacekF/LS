<template>
    <div class="hotspot-badge" v-on:click="toggle" v-bind:class="{open: active, complete: getCompletion >= 1}" :style="getCoordinates">
        <svg-container class=icon :src="icon"/>
        <div class="info">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import HotspotIcon from '@/assets/svg/icons/hotspot.svg'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'hotspot-badge',
  mixins: [CompletionMixin, GroupMixin],
  props: {
    coords: {
      type: Object,
      default: () => { return { x: 50, y: 50 } }
    }
  },
  data: function () {
    return {
      active: false,
      transitionType: 'cross-fade',
      icon: HotspotIcon
    }
  },
  computed: {
    getCoordinates () {
      let x = this.coords.x
      let y = this.coords.y
      let styleObj = {}
      if (x <= 50) {
        styleObj.left = x + '%'
      } else {
        styleObj.right = (100 - x) + '%'
      }
      if (y <= 50) {
        styleObj.top = y + '%'
      } else {
        styleObj.bottom = (100 - y) + '%'
      }
      return styleObj
    }
  },
  methods: {
    toggle: function () {
      if (!this.isLocked()) {
        this.active = !this.active
        this.setComplete(1)
        this.broadcastToGroup()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/style_utils.scss';
  .hotspot-badge{
      z-index: 2;
    display:block;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    @include float-shadow;
    cursor:pointer;
    width: 2.5rem;
    min-height: 2.5rem;
    height: auto;
    transition: width 0.2s 0.3s ease-in, border-radius 0.1s 0.5s ease-in;
    overflow:hidden;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    /deep/ .icon{
      width: 2.5rem;
      height: 2.5rem;
      position:absolute;
      box-sizing: border-box;
      transition: opacity 0.2s 0.6s ease-in, transform .2s 0.6s ease-in-out;
      opacity:1;
      transform-origin: 50% 50%;
      transform: rotate(0deg);
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
    .info{
      position:relative;
      opacity:0;
      max-height: 0;
      @include padding(0,0,0,0);
      transition: max-height 0.2s 0.1s ease-in, opacity 0.1s ease-in, padding 0.2s 0.1s ease-in;
    }
    &.open{
      z-index: 3;
      width:50%;
      @include phone {
          width: 100%;
      }
      border-radius: 0.5rem;
      transition: width 0.2s 0.2s ease-in, border-radius 0.1s 0.1s ease-in;
      .info{
          opacity:1;
          max-height: 90vh;
          @include padding(0.5,0.5,0.5,0.5);
          transition: max-height 0.2s 0.4s ease-in, opacity 0.1s 0.6s ease-in, padding 0.1s 0.6s ease-in;
          @include close-x;
      }
      .icon{
          opacity: 0;
          transform: rotate(135deg);
          transition: opacity 0.2s, transform .2s ease-in-out;;
      }
    }
  }
</style>
