<template>
    <div class="nav-bar">
        <div class="bar">
            <button class="invisible" v-on:click="goStart">
              <svg-container :src="logo" class="logo_home" />
            </button>
            <button class="menu-btn" v-on:click="menuToggle"><svg-container :src="menu" /></button>
            <language-selection style="margin-left:1rem"></language-selection>
            <p class="title">{{title}}</p>
            <course-progress></course-progress>
        </div>
        <transition :name="transitionType">
            <div class="menu" v-if="revealMenu">
                <slot name="menu"></slot>
            </div>
        </transition>

    </div>
</template>

<script>
import MenuIcon from '@/assets/svg/icons/menu.svg'
import LanguageSelection from '@/components/navigation/LanguageSelection'
import CourseProgress from '@/components/status/CourseProgress'
export default {
  name: 'nav-bar',
  props: {
    logo: {
      default: ''
    },
    groups: {
      type: String,
      default: ''
    },
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menu: MenuIcon,
      transitionType: 'menu-open',
      revealMenu: false
    }
  },
  components: {
    'language-selection': LanguageSelection,
    'course-progress': CourseProgress
  },
  watch: {
    showMenu (val) {
      this.revealMenu = val
    }
  },
  methods: {
    menuToggle () {
      this.revealMenu = !this.revealMenu
      // this.showMenu = this.revealMenu
      this.$emit('toggle-menu', this.revealMenu)
    },
    selectMenu (val) {
      switch (val) {
        case 'page':
          this.$emit('menu-select', 'page')
          break
        case 'chapter':
          this.$emit('menu-select', 'chapter')
          break
        case 'chapterPage':
          this.$emit('menu-select', 'chapterPage')
          break
      }
    },
    goStart () {
      this.$store.dispatch('navByPath', '/')
    }
  },
  computed: {
    title () {
      return this.$store.getters.getCourseTitle
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .nav-bar{
        display:block;
        position: relative;
        width:100vw;
        .bar{
            overflow: hidden;
            position: relative;
            z-index:2;
            width:100%;
            height: 3rem;
            overflow-y: hidden;
            @include padding(0, 0.25, 0, 0.25);
            background: color(primary);
            display:flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            position: relative;
            align-items: center;
            .menu-btn{
                display:block;
                box-sizing:border-box;
                align-self: center;
                justify-self: left;
                appearance: none;
                cursor: pointer;
                outline: none;
                border: none;
                margin-bottom: 0;
                padding: 0;
                background: transparent;
                width: 2rem;
                height: 100%;
                /deep/ .svg-container{
                    width: 2rem;
                    height: 2rem;
                    display:flex;
                    align-items: center;
                    svg{
                        fill: color(text_inverse);
                        width: auto;
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
            .title{
                position: relative;
                display:block;
                flex: 1;
                font-size:1.5rem;
                margin-bottom: 0;
                padding-left: 0.5rem;
                padding-right: 8rem;
                color: color(text_inverse);
                white-space: nowrap;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                min-width: 0;
                width: calc( 100% - 8.5rem );
            }
            .course-progress {
                bottom: 0.9rem;
                left:auto;
                right: 1rem;
                width: 6rem;
                border: solid 1px #ccc;
                height: 1.1rem;
            }
            .menu-select{
                @include clear-btn;
                height: 3rem;
                color: white;
                font-size: 80%;
                border-left: 1px solid #3a3a3a;
                @include padding(.5,.5,0,.5);
                cursor: pointer;
                &.selected{
                    background: #52af8a;
                }
            }
            .logo{
                height: calc(100% - .5rem);
                width: 6.5rem;
                position:relative;
                margin-right:0;
                /deep/ svg{
                    fill: color(text_inverse);
                    height: 1.8rem;
                    width: auto;
                }
            }
            .invisible {
              padding: 0px;
              margin: 0px;
              background: none;
              border: 0px;
              cursor: pointer;
            }
            .logo_home {
               height: calc(100% - .5rem);
                width: 6.5rem;
                position:relative;
                margin-left:0;
                /deep/ svg{
                    fill: color(text_inverse);
                    height: 1.8rem;
                    width: auto;
                }

            }
        }
        .menu{
            position: absolute;
            left: 0;
            top: 3rem;
            z-index:1;
        }
        .bar .menu-btn .svg-container svg {
          fill: #fff !important;
        }
    }
</style>
