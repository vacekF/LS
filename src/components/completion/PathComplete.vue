<template>
<span class="path-completion" v-on:click="goToPage" v-bind:class="{complete: getCompletion >= 1}">
    <slot></slot>
    <svg-container :src="check" class="check" v-if="getCompletion >= 1"></svg-container>
</span>
</template>

<script>
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
export default {
  name: 'path-complete',
  mixins: [CompletionMixin],
  props: {
    path: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    goToPage () {
      if (!this.isLocked()) {
        this.setComplete(1)
        if (typeof this.path === 'number') {
          this.$store.dispatch('navByConnection', this.path)
        } else {
          this.$store.dispatch('navByPath', this.path)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .path-completion{
        position: relative;
        cursor: pointer;
        /deep/ .svg-container{
            width: 1rem;
            height: 1.5rem;
            position: absolute;
            top: -0.25rem;
            right: -1rem;
            svg{
                fill: color(text);
                width: 1rem;
                height: 1.5rem;

            }
        }
    }
</style>