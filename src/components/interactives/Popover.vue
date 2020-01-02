<template>
    <div class="popover" v-show="active" @click="closePopover">
        <slot></slot>
    </div>
</template>

<script>
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'popover',
  mixins: [GroupMixin],
  data () {
    return {
      el: null,
      active: false,
      observerConfig: {
        attributes: true,
        childList: false,
        characterData: false
      },
      observer: null
    }
  },
  mounted () {
    this.el = this.$el
    this.observer = new MutationObserver(this.visibilityChanged)
    this.observer.observe(this.$el, this.observerConfig)
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  methods: {
    visibilityChanged () {
      if (window.getComputedStyle(this.el).display !== 'none') {
        this.active = true
        this.broadcastToGroup()
      }
    },
    closePopover () {
      this.active = false
      this.activeItem = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/style_utils.scss';
.popover{
    position: absolute;
    z-index: 2;
    @include padding(0.6,0.5,0.5,0.5);
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    @include float-shadow;
    cursor: pointer;
    @include close-x;
}
</style>