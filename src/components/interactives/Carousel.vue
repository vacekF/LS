<script>
export default {
  name: 'carousel',
  props: {
    position: Number,
    transitionType: String,
    length: Number
  },
  render (createElement) {
    for (let i = this.$slots.default.length - 1; i > 0; i--) {
      if (this.$slots.default[i].tag === undefined) {
        this.$slots.default.splice(i, 1)
      } else {
        this.$slots.default[i].data.key = this.position.toString()
      }
    }
    this.$emit('update:length', this.$slots.default.length)
    return createElement(
      'transition',
      {
        props: {
          name: this.transitionType,
          tag: 'div'
        }
      },
      [this.$slots.default[this.position]])
  }
}
</script>

<style lang="scss" scoped>

</style>