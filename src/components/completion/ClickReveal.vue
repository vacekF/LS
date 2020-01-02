<template>
<span class="click-reveal" @click="clicked">
    <slot></slot>
    <svg-container class="check" :src="check" v-if="getCompletion >= 1"/>
</span>
</template>

<script>
import Completion from 'simple-core/mixins/CompletionMixin'
export default {
  name: '',
  data () {
    return {
      targetCollection: []
    }
  },
  mixins: [Completion],
  props: {
    target: {
      type: [String, Array],
      default: ''
    },
    addClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    clicked () {
      if (!this.isLocked()) {
        for (let i = 0; i < this.targetCollection.length; i++) {
          if (this.addClass.length > 0) {
            let className = this.addClass
            document.getElementById(this.targetCollection[i]).classList.add(className)
          } else {
            document.getElementById(this.targetCollection[i]).style.display = 'block'
          }
        }
        this.setComplete(1)
      }
    }
  },
  mounted () {
    let targetIDs = []
    if (this.target !== -1) {
      if (Array.isArray(this.target)) {
        targetIDs = this.target
      } else {
        if (this.target.length > 0) {
          targetIDs.push(this.target)
        }
      }
    }
    this.targetCollection = targetIDs
    if (this.addClass.length === 0) {
      console.log(this.targetCollection)
      if (this.targetCollection.length > 0) {
        for (let i = 0; i < this.targetCollection.length; i++) {
          document.getElementById(this.targetCollection[i]).style.display = 'none'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/style_utils';
    .click-reveal{
        position: relative;
        cursor: pointer;
    }
    /deep/ .svg-container{
        width: 1rem;
        height: 1.5rem;
        position: absolute;
        top: 0;
        right: 0;
        svg{
            fill: color(text);
            width: 1rem;
            height: 1.5rem;

        }
    }
</style>