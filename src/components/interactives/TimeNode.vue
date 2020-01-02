<template>
    <div class="time-node" :style="{top: topPosition}">
        <div class="label-holder" :style="{width: labelPos}">
            <p class="label" :class="{inactive: !active}" :style="{backgroundColor: color}">{{label}}</p>
        </div>
        <button class="time-btn" :style="{backgroundColor: color, left: labelPos}" @click="openContent"></button>
        <svg-container class="check" :src="check" v-if="getCompletion >= 1" :style="{left: labelPos}"/>
        <div class="content" v-show="active" :style="{width: contentWidth}">
            <div class="line"/>
            <div class="content-holder" :style="{transform: translateY}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'time-node',
  mixins: [CompletionMixin, GroupMixin],
  props: {
    label: {
      type: String,
      default: ''
    },
    position: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  inject: ['size', 'setSelected', 'getSelected'],
  computed: {
    topPosition () {
      return (((this.position - this.size.start) / (this.size.end - this.size.start)) * 100) + '%'
    },
    showContent () {
      if (this.getSelected() === this.position) {
        return true
      }
      return false
    },
    translateY () {
      return 'translateY(-' + (((this.position - this.size.start) / (this.size.end - this.size.start)) * 100) + '%)'
    },
    labelPos () {
      return this.size.divide + '%'
    },
    contentWidth () {
      return (98 - this.size.divide) + '%'
    }
  },
  methods: {
    openContent () {
      if (!this.isLocked()) {
        this.active = !this.active
        if (this.active) {
          this.setComplete(1)
          this.broadcastToGroup()
        } else {
          this.activeItem = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .time-node{
        position:absolute;
        width: 100%;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .label-holder{
            .label{
                position: relative;
                font-weight: 500;
                float: right;
                transition: padding 0.2s ease-in;
                border-radius: 0.75rem 0 0 0.75rem;
                @include padding(0.10,1,0,0.4);
                color: color(text_inverse);
                background-color: color(highlight);
                border: 0.10rem solid #ffffff;
                @include float-shadow;
                &.inactive{
                    color: color(text);
                    @include padding(0.10,0.5,0,0.4);
                    border: none;
                    background-color: transparent !important;
                    box-shadow: none;
                }
            }
        }
        .time-btn{
            position:absolute;
            top: 1rem;
            transform: translate( -42%, -58%);
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
            box-sizing: border-box;
            border: 0.10rem solid #ffffff;
            appearance: none;
            cursor: pointer;
            outline: none;
            z-index:2;
            background-color: color(highlight);
            @include float-shadow;
        }
        /deep/ .svg-container{
            width: 1rem;
            height: 1.5rem;
            position: absolute;
            top: -1rem;
            margin-left: 0.8rem;
            svg{
                fill: color(text);
                width: auto;
                height: calc(100% - .25rem);
            }
        }
        .content{
            position:relative;
            .line{
                position: absolute;
                top: 0.35rem;
                left: 2rem;
                width: 2rem;
                transform: translate(-1rem,0.5rem);
                height: 0.125rem;
                background-color: #cccccc;
            }
            .content-holder{
                margin-left: 2.5rem;
                position: absolute;
                border: solid #cccccc 0.125rem;
                border-radius: 0.4rem;
                box-sizing: border-box;
                background-color: #fafafa;
                color: color(text);
                width: calc( 100% - 1.6rem );
                @include padding(0.5,0.5,0.5,0.5);
                box-shadow: inset 0 0 1rem rgba(#000000, 0.13), 0.05rem 0.1rem 0.1rem 0.05rem rgba(#000000, 0.1);
            }
        }
    }
</style>