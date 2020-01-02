<template>
<div class="timeline" :style="{'height': calcHeight, 'background-color': this.lineColor}">
    <div class="line" :style="{'left': calcDivide}"/>
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
      selected: -1
    }
  },
  props: {
    start: {
      type: Number,
      default: 0,
      size: 0
    },
    end: {
      type: Number,
      default: 10
    },
    divide: {
      type: Number,
      default: 33
    },
    scale: {
      type: Number,
      default: 4
    },
    lineColor: {
      default: ''
    }
  },
  provide: function () {
    return {
      size: {
        start: this.start,
        end: this.end,
        divide: this.divide
      },
      getSelected: this.getSelected,
      setSelected: this.setSelected
    }
  },
  computed: {
    calcHeight () {
      let range = this.end - this.start
      return (range * this.scale) + 'rem'
    },
    calcDivide () {
      return this.divide + '%'
    }
  },
  methods: {
    getSelected () {
      return this.selected
    },
    setSelected (pos) {
      this.selected = pos
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .timeline{
        position:relative;
        .line{
            position: absolute;
            width: 0.25rem;
            height:100%;
            background-color: color(primary_gray);
        }
    }

</style>