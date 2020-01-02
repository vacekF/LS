<template>
    <div class="menu-holder">
        <div class="chapter-holder" v-for="(group, index) in menuGroups" :key="index" >
            <button class="chapter-btn" @click="groupSelected(group)">
                <p>{{group.title}}</p>
                <svg-container :src="check" class="check" v-if="groupComplete(group.title) >= 1"></svg-container>
            </button>
            <div class="pages-holder" v-show="selected === group.title && showMenu">
                <div class="page-bg"/>
                <div class="page-btn-holder">
                    <button class="page-btn" v-for="(page, Pindex) in groupPages(group)" :key="Pindex" @click="goto(page)">
                        {{page.title}}
                        <svg-container :src="check" class="check" v-if="pageComplete(page.path) >= 1"></svg-container>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Check from '@/assets/svg/icons/check.svg'
import SvgContainer from '@/components/global/SvgContainer'
export default {
  name: 'chapter-page-menu',
  data () {
    return {
      check: Check,
      selected: ''
    }
  },
  components: {
    'svg-container': SvgContainer
  },
  props: {
    groups: {
      type: [String, Array],
      default: ''
    },
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    menuGroups () {
      if (Array.isArray(this.groups)) {
        let groupArray = []
        for (let i = 0; i < this.groups.length; i++) {
          groupArray.push(this.$store.getters.getGroup(this.groups[i]))
        }
        return groupArray
      } else {
        return this.$store.getters.getGroups(this.groups)
      }
    }
  },
  methods: {
    groupSelected (group) {
      if (group.title === this.selected) {
        this.selected = ''
      } else {
        if (group.pages.length === 1) {
          if (!this.$store.getters.isGated(group.pages[0])) {
            this.$store.dispatch('navByPath', group.pages[0])
            this.selected = ''
            this.$emit('toggle-menu', false)
          }
        } else {
          this.selected = group.title
        }
      }
    },
    groupComplete (title) {
      return this.$store.getters.getGroupCompletion(title)
    },
    pageComplete (path) {
      return this.$store.getters.getPageCompletion(path)
    },
    groupPages (group) {
      return this.$store.getters.getGroupPages(group.title)
    },
    goto (page) {
      if (!this.$store.getters.isGated(page.path)) {
        this.$store.dispatch('navByPath', page.path)
        this.selected = ''
        this.$emit('toggle-menu', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .menu-holder{
        width: 21rem;
        .chapter-btn{
            display:block;
            position: relative;
            width: 100%;
            height:auto;
            box-sizing: border-box;
            border: none;
            background: color(secondary);
            color: color(text_inverse);
            appearance: none;
            text-align: left;
            margin: 0;
            @include padding(0.5, 0.25, 0, 0.25);
            cursor: pointer;
            outline: none;
            P{
                float: left;
            }
            /deep/ .svg-container{
                width: 1.5rem;
                height: 1.5rem;
                float: right;
                svg{
                    fill: color(text_inverse);
                    width: auto;
                    height: calc(100% - .25rem);
                }
            }
            &:hover{
                background: color(primary_gray_dark);
            }
        }
        .pages-holder{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(100%);
            .page-bg{
                opacity: 0.85;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1
            }
            .page-btn-holder{
                display:flex;
                flex-direction: column;
                height: 100%;
                .page-btn{
                    width: 100%;
                    height:auto;
                    box-sizing: border-box;
                    border: none;
                    background: color(secondary);
                    color: color(text_inverse);
                    appearance: none;
                    text-align: left;
                    margin: 0;
                    @include padding(0.5, 0, 0.5, 0.25);
                    cursor: pointer;
                    outline: none;
                    &:hover{
                        background: color(primary_gray_dark);
                    }
                    /deep/ .svg-container{
                        width: 1.5rem;
                        height: 1.5rem;
                        float: right;
                        margin-right: 0.5rem;
                        svg{
                            fill: color(text_inverse);
                            width: auto;
                            height: calc(100% - .25rem);
                        }
                    }
                }

            }
        }
    }
</style>