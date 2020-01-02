<template>
    <button class="next-btn" @click="goto">{{pageTitle}}<svg-container :src="chevron"/></button>
</template>

<script>
import Chevron from '@/assets/svg/icons/chevron_forward.svg'
export default {
  name: 'next-button',
  data () {
    return {
      chevron: Chevron
    }
  },
  computed: {
    pageTitle () {
      let connections = this.$store.getters.getPageConnections()
      if (connections.length > 0) {
        return this.$store.getters.getPage(connections[0].path).title
      } else {
        return ''
      }
    },
    getString () {
      return this.$store.getters.getString({ category: 'next-button', name: 'label' })
    }
  },
  methods: {
    goto () {
      let connections = this.$store.getters.getPageConnections()
      if (connections.length > 0) {
        this.$store.dispatch('navByPath', connections[0].path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .next-btn{
        position: relative;
        height:auto;
        box-sizing: border-box;
        border: none;
        color: color(text_inverse);
        background-color: color(statusbar);
        appearance: none;
        @include padding(0.35, 0.80, 0.35, 0.75);
        margin-bottom: 0;
        cursor: pointer;
        outline: none;
        float: right;
        /deep/ .svg-container{
            width: 1rem;
            height: 1.5rem;
            position: absolute;
            right: 0.2rem;
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