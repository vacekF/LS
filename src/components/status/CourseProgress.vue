<template>
    <div class="course-progress">
        <div class="percent-display">{{progress}}</div>
        <div class="progress-bar" :style="{width: progress}"></div>
    </div>
</template>

<script>
export default {
  name: 'course-progress',
  computed: {
    progress () {
      return Math.floor(this.$store.getters.getPagesCompletion * 100) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .course-progress{
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        height:1rem;
        margin:0;
        background: color(primary);
        .percent-display{
            position:absolute;
            left:0;
            right:0;
            width:100%;
            color:#fff;
            font-size:0.8rem;
            text-align:center;
            line-height:1rem;
            @include phone{
                display: none;
            }
        }
        .progress-bar{
            width:auto;
            height: 0.8rem;
            margin:0.1rem;
            background: color(highlight);
            float:left;
        }
    }
</style>