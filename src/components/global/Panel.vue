<template>
    <div class="panel" :class="{watched: isWatched === 1}" :style="{backgroundColor:getBackground}">
        <slot></slot>
    </div>
</template>

<script>
import WatchMixin from 'simple-core/mixins/WatchMixin'
export default {
  name: 'panel',
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
  }
}
</script>

<style lang="scss">
    @import '@/assets/styles/style_utils.scss';
    .panel{
        box-sizing:border-box;
        overflow: hidden;
        transition: background-color 2s;
        &.watched {
            background-color: color(watched_panel)
        }
    }
</style>