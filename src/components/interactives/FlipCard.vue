<template>
    <div class="flip-card" v-on:click="flipCard" v-bind:class="{active: active}">
        <div class="flip-top">
            <svg-container class="check" :src="check" v-if="getCompletion > 0"/>
            <slot name="top"></slot>
        </div>
        <div class="flip-bottom">
            <svg-container class="check" :src="check" v-if="getCompletion > 0"/>
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
import CompletionMixin from 'simple-core/mixins/CompletionMixin'
import GroupMixin from 'simple-core/mixins/GroupMixin'
export default {
  name: 'flip-card',
  mixins: [CompletionMixin, GroupMixin],
  data () {
    return {
      active: false
    }
  },
  methods: {
    flipCard () {
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

    .flip-card {
        height: 100%;
        position: relative;
        cursor: pointer;
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 100%;
        grid-template-columns: 100%;
    }

    /deep/ .svg-container {
        width: 1rem;
        height: 1.5rem;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        display: block;
        svg {
            fill: #dddddd;
            width: auto;
            height: calc(100% - .25rem);
        }
    }

    .flip-top, .flip-bottom {
        -ms-grid-column: 1;
        grid-column: 1;
        -ms-grid-row: 1;
        grid-row: 1;
        transition: transform 1.0s ease-in-out;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @include float-shadow();
        @include ie {
            transition: transform 1.0s ease-in-out, opacity 1.0s ease-in-out;
        }
    }

    .flip-card.horz {
        .flip-top {
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transform: perspective(800px) rotateY(0deg);
            @include ie {
                opacity: 1;
            }
        }
        .flip-bottom {
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transform: perspective(800px) rotateY(180deg);
            @include ie {
                opacity: 0;
            }
        }
        &.active {
            .flip-top {
                transform: perspective(800px) rotateY(-179.9deg);
                @include ie {
                    opacity: 0;
                }
            }
            .flip-bottom {
                transform: perspective(800px) rotateY(0);
                @include ie {
                    opacity: 1;
                }
            }
        }
    }

    .flip-card.vert {
        .flip-top {
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transform: perspective(800px) rotateX(0deg);
            @include ie {
                opacity: 1;
            }
        }
        .flip-bottom {
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transform: perspective(800px) rotateX(180deg);
            @include ie {
                opacity: 0;
            }
        }
        &.active {
            .flip-top {
                transform: perspective(800px) rotateX(-179.9deg);
                @include ie {
                    opacity: 0;
                }
            }
            .flip-bottom {
                transform: perspective(800px) rotateX(0);
                @include ie {
                    opacity: 1;
                }
            }
        }
    }
</style>