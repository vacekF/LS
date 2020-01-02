<template>
<span>
    <slot></slot>
</span>
</template>
<script>
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
export default {
  name: 'dependancy-complete',
  mixins: [CompletionMixin],
  props: {
    target: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // console.log('dependancy-completion')
    this.checkCompletion()
  },
  methods: {
    checkCompletion () {
      let test = 0
      if (this.target.indexOf('/') > -1) {
        // get completion value if a page
        test = this.pageComplete(this.target)
      } else {
        // get completion value if a group
        test = this.groupComplete(this.target)
      }
      // mark completed is complete
      if (test >= 1) {
        this.setComplete(1)
      }
    },
    pageComplete (path) {
      return this.$store.getters.getPageCompletion(path)
    },
    groupComplete (path) {
      return this.$store.getters.getGroupCompletion(path)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>