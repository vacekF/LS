<template>
<div class="bar">
    <div class="status" v-if="courseComplete">
        Course Complete
    </div>
    <div class="status" v-else-if="pageComplete >= 1">
        <span style="color:#fbbe04;">Page Complete</span>
    </div>
    <div class="status" v-else>
        Page Incomplete
    </div>
</div>
</template>

<script>
export default {
  name: 'page-completion-status',
  computed: {
    courseComplete () {
      return this.$store.getters.getCourseCompletion
    },
    pageComplete () {
      return this.$store.getters.getPageCompletion()
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .bar{
        position:relative;
        width:100%;
        height: 2rem;
        @include padding(0.25,0.5,0,0);
        background-color: color(statusbar);
        color: color(text_inverse);
        .status{
            position:relative;
            float: right;
        }
    }
</style>