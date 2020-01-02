<template>
<span>
    <slot></slot>
</span>
</template>

<script>
import ViewportMixin from 'simple-core/mixins/ViewportMixin'
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
export default {
  name: 'viewport-complete',
  mixins: [ViewportMixin, CompletionMixin],
  watch: {
    viewport: function (newViewport, oldViewport) {
      if (!this.isLocked()) {
        if (newViewport) {
          this.setComplete(1)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>