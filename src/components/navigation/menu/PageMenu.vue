<template>
    <div class="menu-holder">
        <div class="page-holder" v-for="(page, index) in getPages" :key="index" >
            <button class="page-btn" @click="pageSelected(page.path)">
                <p>{{page.title}}</p>
                <svg-container :src="check" class="check" v-if="pageComplete(page.path) >= 1"></svg-container>
            </button>
        </div>
    </div>
</template>

<script>
import Check from '@/assets/svg/icons/check.svg'
import SvgContainer from '@/components/global/SvgContainer'
export default {
  name: 'page-menu',
  data () {
    return {
      check: Check
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
    getPages () {
      if (Array.isArray(this.groups)) {
        let groupArray = []
        for (let i = 0; i < this.groups.length; i++) {
          groupArray = groupArray.concat(this.$store.getters.getGroupPages(this.groups[i]))
        }
        return groupArray
      } else if (this.groups === '') {
        return this.$store.getters.getPages
      } else {
        let groupsArray = this.$store.getters.getGroupsPages(this.groups)
        let pageArray = []
        for (let i = 0; i < groupsArray.length; i++) {
          pageArray = pageArray.concat(groupsArray[i])
        }
        return pageArray
      }
    }
  },
  methods: {
    pageSelected (path) {
      if (!this.$store.getters.isGated(path)) {
        this.$store.dispatch('navByPath', path)
        this.$emit('toggle-menu', false)
      }
    },
    pageComplete (path) {
      return this.$store.getters.getPageCompletion(path)
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .menu-holder{
        width: 21rem;
        .page-btn{
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
    }
</style>