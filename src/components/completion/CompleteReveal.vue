<template>
    <transition :name="transition" v-if="isWatched >= 1">
        <slot></slot>
    </transition>
</template>

<script>
import WatchMixin from 'simple-core/mixins/WatchMixin'
export default {
  name: 'complete-reveal',
  props: {
    transition: {
      type: String,
      default: ''
    }
  },
  mixins: [WatchMixin]
}
</script>

<style lang="scss">

</style>