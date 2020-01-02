<template>
    <button class="back-btn" @click="goto">{{getString}}<svg-container :src="chevron"/></button>
</template>

<script>
import Chevron from '@/assets/svg/icons/chevron_back.svg'
export default {
  name: 'back-button',
  data () {
    return {
      chevron: Chevron
    }
  },
  computed: {
    getString () {
      return this.$store.getters.getString({ category: 'back-button', name: 'label' })
    }
  },
  methods: {
    goto () {
      this.$store.dispatch('navBack')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .back-btn{
        position: relative;
        height:auto;
        box-sizing: border-box;
        border: none;
        color: color(text_inverse);
        background-color: color(statusbar);
        appearance: none;
        @include padding(0.35, 0.75, 0.35, 0.80);
        margin-bottom: 0;
        cursor: pointer;
        outline: none;
        float: left;
        /deep/ .svg-container{
            width: 1rem;
            height: 1.5rem;
            position: absolute;
            left: 0.2rem;
            top: 50%;
            transform: translateY(-50%);
            svg{
                fill: color(text_inverse);
                width: auto;
                height: calc(100% - .25rem);
            }
        }
    }
</style>