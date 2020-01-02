<script>
export default {
  name: 'complete-course-now',
  render () {
    return this.$slots.default
  },
  mounted () {
    console.log('complete-course-now')
    this.$store.dispatch('setCourseCompletion')
  }
}
</script>

<style lang="scss" scoped>

</style>