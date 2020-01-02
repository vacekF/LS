<template><page class="page">
  <panel class="panel1" uid="0">
    <content-element uid="0">
      <h1>
        Apprentissage simple
      </h1>
    </content-element>
    <content-block uid="1">
      <p>
        FR: is a framework for building elearning solutions. Out of the box, Simple Learning offers:
      </p>
      <ul style="padding-left: 1rem;" class="local">
        <li>
          FR: In browser content editing
        </li>
        <li>
          FR: Robust Gating
        </li>
        <li>
          FR: Granular completion tracking
        </li>
        <li>
          FR: Branching nav structure
        </li>
        <li>
          FR: Easy layout and styling tools
        </li>
        <li>
          FR: One more time
        </li>
      </ul>
    </content-block>
  </panel>
  <panel class="introText" uid="1" v-if="showFinished() == false">FR: This Scorm 1.2 module contains two fully gated modules. Each module showcases various page types with interactivities. Chapter 3 contains assessment part. Upon completion of this module, user gets completion status and score.</panel>
  <panel class="panel2 menu" uid="2">
    <button v-for="(getPage, index) in getPages" :key="index" @click="navTo(getPage,getPage.chapterTitle)">
       <svg-container :src="bullseye" class="bullseye"></svg-container>
      <span class="bTitle">{{getPage.title}}</span>
      <svg-container :src="check" class="check" v-if="showCheck(getPage.chapterTitle) === 1"></svg-container>
    </button>
    <button class="finalMsg" v-if="showFinished() == true" @click="closeModule"><svg-container :src="handshake" class="bullseye"></svg-container><span class="bText">Ce module s'est terminé avec succès. Cliquez sur ce bouton pour fermer ce module.</span></button>
  </panel>
   <!--panel class="panel2 menu" uid="3">
    <button v-for="(getPage, index) in getPages" :key="index">{{getPage.title}}</button>
  </panel-->
</page></template>

<script>
import BackButton from '@/components/navigation/BackButton'
import NextButton from '@/components/navigation/NextButton'
import Check from '@/assets/svg/icons/check.svg'
import Bullseye from '@/assets/svg/icons/bullseye.svg'
import Handshake from '@/assets/svg/icons/handshake.svg'
export default {
  name: 'start',
  data () {
    return {
      check: Check,
      handshake: Handshake,
      bullseye: Bullseye
    }
  },
  components: {
    'back-button': BackButton,
    'next-button': NextButton
  },
  computed: {
    chapters () {
      let chapters = ['Chapter1', 'Chapter2', 'Chapter3']
      let groups = []
      for (let i = 0; i < chapters.length; i++) {
        let group = this.$store.getters.getGroup(chapters[i])
        groups.push(group)
      }
      return groups
    },
    getPages () {
      let groups = this.$store.getters.getGroups()
      let groupArray = []
      for (let i = 0; i < groups.length; i++) {
        let chapterObject = {}
        console.log(groups[i].title)
        chapterObject.chapterTitle = groups[i].title
        /* Grab info from strings.js */
        chapterObject.title = this.$store.getters.getString({ category: 'chapters', name: groups[i].title })
        chapterObject.firstPage = groups[i].pages[0]
        groupArray.push(chapterObject)
      }
      return groupArray
    }
  },
  methods: {
    navTo (chapter, title) {
      console.log(title)
      if (!this.$store.getters.isGated(chapter.firstPage)) {
        this.$store.dispatch('navByGroup', title)
      }
    },
    showCheck (title) {
      return this.$store.getters.getGroupCompletion(title)
    },
    showFinished () {
      // return false
      console.log('course completion = ' + this.$store.getters.getCourseCompletion)
      return this.$store.getters.getCourseCompletion
    },
    closeModule () {
      window.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/style_utils';
  .page{
    background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(255,255,255,0.5));
    .panel1{
      @include padding(0.3,1,0.2,1);
      transition:opacity 1s linear 1s;
      opacity: 1;
      background: rgba(#ffffff, 0.3);
      color: color(support_green1);
      font-size: 1.1rem;
      :hover {
        background-color: white;
      }
      h1 {
        font-size: 2em;
        color: #01863d;
        font-weight: bold;
        padding-left: 0.5rem;
      }
      .local {
        padding-left: 0.5rem;
        :hover {
          background-color:rgba(#000000, 0.1)
        }
      }
      .content-block {
        padding-left: 0.7rem;
        padding-bottom: 0.5rem;
      }
       button {
        @include clear-btn;
        cursor: pointer;
        background-image: linear-gradient(to bottom, rgba(#68ddac, 0.6)0%,rgba(#045837, 0.8) 100%);
        color: #ffffff;
        border: solid 1px white;
        @include margin(0.25,0.25,0.25,0.25);
        height: 5rem;
        width: calc( 90% - 0.5rem );
        /deep/ .check{
          position: relative;
          svg{
              fill: white;
              width: 2rem;
              height: 2rem;
              float: right;
              margin-top: -2.5rem;
          }
        }
      }
    }
    .introText {
      padding-top: 0.5rem;
      padding-left: 2.5rem;
      padding-right: 2rem;
      padding-bottom: 0.5rem;
      color: black;
      font-size:1.1rem;
      line-height: 1.5rem;
      text-align: justify;
    }
    .panel2{
      @include padding(0.5,1,0.5,1);
      @include legacy_columns(1,1);
      background: rgba(#000000, 0.2);
      .finalMsg {
        color: #014620;
        font-weight: bold;
      }
      .bullseye {
        width: 3rem;
        padding-left: 0.5rem;
        float: left;
      }
      .bTitle {
        display: block;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        width: 80%;
      }
      .bText {
        color: #ffd587;
      }
      button {
        @include clear-btn;
        cursor: pointer;
        background-image: linear-gradient(to bottom, rgba(#68ddac, 0.6)0%,rgba(#045837, 0.8) 100%);
        color: #ffffff;
        border: solid 1px white;
        @include margin(0.25,0.25,0.25,0.25);
        height: 5rem;
        width: calc( 90% - 0.5rem );
        /deep/ .check{
          position: relative;
          svg{
              fill: white;
              width: 2rem;
              height: 2rem;
              float: right;
              margin-top: -2.5rem;
          }
        }
      }
    }
  }
</style>
