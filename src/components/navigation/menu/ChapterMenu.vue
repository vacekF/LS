<template>
    <div class="menu-holder">
        <div class="chapter-holder" v-for="(group, index) in menuGroups" :key="index" >
            <button class="chapter-btn" @click="groupSelected(group)">
                <p>{{group.title}}</p>
                <svg-container :src="check" class="check" v-if="groupComplete(group.title) >= 1"></svg-container>
            </button>
        </div>
    </div>
</template>

<script>
import Check from '@/assets/svg/icons/check.svg'
import SvgContainer from '@/components/global/SvgContainer'
export default {
  name: 'chapter-menu',
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
    },
    location: {
      type: String,
      default: ''
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
      if (this.location.length === 0) {
        if (!this.$store.getters.isGated(group.pages[0])) {
          this.$store.dispatch('navByGroup', group.title)
          this.$emit('toggle-menu', false)
        }
      } else {
        if (!this.$store.getters.isGated({ location: this.location, path: group.pages[0] })) {
          this.$store.dispatch('navByGroup', group.title)
          this.$emit('toggle-menu', false)
        }
      }
    },
    groupComplete (title) {
      return this.$store.getters.getGroupCompletion(title)
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
    }
</style>