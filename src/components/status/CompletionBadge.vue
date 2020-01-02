<template>
    <table class="completion-badge">
        <tr>
            <td class="badge" :class="{active: isWatched >= 1}">
                <div class="top">
                    <svg-container :src="CBIcon"/>
                </div>
                <div class="bottom">
                    <svg-container :src="CBIconCheck"/>
                </div>
            </td>
            <td class="content italic">
                <slot></slot>
            </td>
        </tr>
    </table>
</template>

<script>
import CBIcon from '@/assets/svg/icons/completionBadge.svg'
import CBIconCheck from '@/assets/svg/icons/completionBadgeCheck.svg'
import WatchMixin from 'simple-core/mixins/WatchMixin'
export default {
  name: 'completion-badge',
  mixins: [WatchMixin],
  data () {
    return {
      CBIcon: CBIcon,
      CBIconCheck: CBIconCheck
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .completion-badge{

        .badge{
            width: 2.5rem;
            height: 2.5rem;
            display: block;
            position:relative;
            .top, .bottom{
                transition: transform 1.0s ease-in-out;
                overflow: hidden;
                position: absolute;
                top:0;
                right:0;
                bottom:0;
                left:0;
                border-radius: 50%;
                @include float-shadow();
                @include ie {
                    transition: transform 1.0s ease-in-out, opacity 1.0s ease-in-out;
                }

            }
            .top{
                backface-visibility: hidden;
                transform-style: preserve-3d;
                transform: perspective(800px) rotateY(0deg);
                /deep/ .svg-container{
                    width: 2.5rem;
                    height: 2.5rem;
                    position: relative;
                    svg{
                        #background{
                            fill: color(highlight);
                        }
                    }
                }
                @include ie {
                    opacity: 1;
                }
            }
            .bottom{
                backface-visibility: hidden;
                transform-style: preserve-3d;
                transform: perspective(800px) rotateY(180deg);
                /deep/ .svg-container{
                    width: 2.5rem;
                    height: 2.5rem;
                    position: relative;
                    svg{
                        #background{
                            fill: color(pass_green);
                        }
                    }
                }
                @include ie {
                    opacity: 0;
                }
            }
            &.active{
                .top{
                    transform: perspective(800px) rotateY(-179.9deg);
                    @include ie {
                        opacity: 0;
                    }
                }
                .bottom{
                    transform: perspective(800px) rotateY(0);
                    @include ie {
                        opacity: 1;
                    }
                }
            }
        }
        .content{
            padding-left: 0.5rem;
            vertical-align: middle;
        }
    }

</style>