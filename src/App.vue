<template>
  <div id="app">
    <bookmark-alert @bookmark-complete="closeBookmarkAlert" v-if="justStarted && isBookmarkAvailable">
      <h2>Welcome back</h2>
      <p>Would you like to return to where you left off?</p>
    </bookmark-alert>
    <nav-bar :logo="logo" :show-menu="showMenu" v-on:toggle-menu="toggleMenu" @menu-select="menuSelect" :menu-type="menuType">
      <page-menu slot="menu" groups="" class="chapter-menu" v-on:toggle-menu="toggleMenu" v-if="menuType == 'page'"/>
      <chapter-menu slot="menu" :groups="chapters" class="chapter-menu" v-on:toggle-menu="toggleMenu" v-else-if="menuType == 'chapter'"/>
      <chapter-page-menu slot="menu" :groups="chapters" class="chapter-menu" v-on:toggle-menu="toggleMenu" v-else-if="menuType == 'chapterPage'"/>
    </nav-bar>
    <div class="route-holder">
      <transition :name="transitionType">
        <router-view :key="$route.fullPath"/>
      </transition>
    </div>
    <edit-panel v-if="buildType === 'development'"/>
  </div>
</template>
<script>
import EditPanel from 'simple-editing/EditPanel'
import NavBar from '@/components/navigation/NavBar'
import ChapterMenu from '@/components/navigation/menu/ChapterMenu'
import PageMenu from '@/components/navigation/menu/PageMenu'
import ChapterPageMenu from '@/components/navigation/menu/ChapterPageMenu'
import Logo from '@/assets/branding/logo.svg'
import BookmarkAlert from '@/components/status/BookmarkAlert'
import InitPathMixin from 'simple-core/mixins/InitPathMixin'
import CourseProgress from '@/components/status/CourseProgress'
export default {
  name: 'app',
  mixins: [InitPathMixin],
  components: {
    'edit-panel': EditPanel,
    'nav-bar': NavBar,
    'page-menu': PageMenu,
    'chapter-menu': ChapterMenu,
    'chapter-page-menu': ChapterPageMenu,
    'bookmark-alert': BookmarkAlert,
    'course-progress': CourseProgress
  },
  data () {
    return {
      logo: Logo,
      buildType: process.env.NODE_ENV,
      showMenu: false,
      justStarted: true,
      chapters: ['Chapter1', 'Chapter2', 'Chapter3'],
      menuType: 'chapterPage'
    }
  },
  methods: {
    toggleMenu (show) {
      this.showMenu = show
    },
    closeBookmarkAlert () {
      this.justStarted = false
    },
    menuSelect (val) {
      this.menuType = val
    }
  },
  computed: {
    transitionType () {
      return this.$store.getters.getTransitionType
    },
    isBookmarkAvailable () {
      return this.$store.getters.isBookmarkAvailable
    }
  }
}
</script>
<style lang="scss">
  @import '~reset-css/sass/_reset';
  @import './assets/styles/style_utils';
  @import './assets/styles/fonts';
  @import './assets/transitions/slideForward';
  @import './assets/transitions/slideBack';
  @import './assets/transitions/slideUp';
  @import './assets/transitions/slideDown';
  @import './assets/transitions/flipForward';
  @import './assets/transitions/flipBack';
  @import './assets/transitions/flipUp';
  @import './assets/transitions/flipDown';
  @import './assets/transitions/crossFade';
  @import './assets/transitions/menuOpen';
  html {
    @include responsive-text($font-grow, $font-min, $font-max, $font-max);
    @include text-ratio();
    @include text-styles();
    img{
      display:block;
    }
    @include defaultFont();
  }
  body{
    overflow: hidden;
    background: #aaaaaa;
    background-image: url('./assets/images/bg7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
  div{
    box-sizing: border-box;
  }
  div, p, li, button{
    font-weight: 100;
  }
  #app{
    display:grid;
    grid-template-rows: 2rem 1fr;
    width:100%;
    height: 100vh;
    .route-holder{
      display:grid;
      position:relative;
      width:100%;
      height: 100%;
    }
  }
</style>
