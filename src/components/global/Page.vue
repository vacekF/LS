<template>
<div class="page">
    <div class="scroll-container" :class="{watched: isWatched === 1}" :style="{backgroundColor:getBackground}">
        <slot></slot>
    </div>
</div>
</template>

<script>
import WatchMixin from 'simple-core/mixins/WatchMixin'
export default {
  name: 'page',
  mixins: [WatchMixin],
  props: {
    background: {
      default: ''
    },
    backgroundWatched: {
      default: ''
    }
  },
  computed: {
    getBackground () {
      if (this.watched() === 1) {
        return this.backgroundWatched
      } else {
        return this.background
      }
    }
  },
  mounted () {
    this.$store.dispatch('setDefaultPageCompletion')
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
.page{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 1rem;
    bottom:0;
    display:block;
    .scroll-container{
        width:100%;
        max-height: calc( 100vh - 2rem );
        overflow-x: hidden;
        overflow-y: scroll; 
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        @include desktop {
            max-width: $desktop_breakpoint;
            margin: 0 auto;
        }
        transition: background-color 2s;
        &.watched {
            background-color: color(watched_page)
        }
    }
    .scroll-container::-webkit-scrollbar { width: 0 !important }
}
</style>