<template>
    <div class="info-badge" v-on:click="toggle" v-bind:class="{open: active, complete: getCompletion >= 1}">
        <svg-container class=icon :src="info"/>
        <div class="info">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import InfoIcon from '@/assets/svg/icons/info.svg'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'info-badge',
  mixins: [CompletionMixin, GroupMixin],
  data: function () {
    return {
      active: false,
      transitionType: 'cross-fade',
      info: InfoIcon
    }
  },
  methods: {
    toggle: function () {
      if (!this.isLocked()) {
        this.active = !this.active
        if (this.active) {
          this.setComplete(1)
          this.broadcastToGroup()
        } else {
          this.activeItem = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/style_utils.scss';
  .info-badge{
    display:block;
    position:relative;
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
      transition: opacity 0.1s 0.6s ease-in;
      opacity:1;
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
          transition: opacity 0.1s;
      }
    }
  }
</style>
