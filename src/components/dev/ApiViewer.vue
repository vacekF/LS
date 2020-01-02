<template>
    <div class="api-viewer">
        <div class="section">
            <h2>COURSE FIELDS</h2>
            <div class="fields-holder">
                <p class="fields"><span class="bold">getCourseTitle:</span> {{courseTitle}}</p>
                <p class="fields"><span class="bold">getDefaultLanguage:</span> {{defaultLanguage}}</p>
                <p class="fields"><span class="bold">getPath:</span> {{getPath}}</p>
                <button  class="toggle-btn" v-on:click="toggleIgnoreGating"><span class="bold">Ignore Gating:</span> {{getIgnoreGating}}</button>
                <p class="fields"><span class="bold">getCourseCompletion:</span> {{courseCompletion}}</p>
                <p class="fields"><span class="bold">getPagesCompletion:</span> {{getPagesCompletion}}</p>
                <p class="fields"><span class="bold">getTransitionType:</span> {{getTransitionType}}</p>
                <button  class="toggle-btn" v-on:click="toggleOverrideTransition"><span class="bold">Override Transition:</span> {{getOverrideTransition}}</button>
            </div>
        </div>
        <div class="section">
            <h2>CURRENT PAGE</h2>
            <div>
                <div class="page-holder">
                    <p class="fields"><span class="bold">Title:</span> {{getPage.title}}</p>
                    <p class="fields"><span class="bold">Path:</span> {{getPage.path}}</p>
                    <button class="toggle-btn back-btn" v-on:click="navBack"><span class="bold">navBack</span></button>
                    <p class="fields"><span class="bold">Comp:</span> {{getPageCompletion}}</p>
                    <div class="fields">
                        <p><span class="bold">completion items:</span> red=incomplete, green=complete</p>
                        <div class="completion-holder">
                            <div class="completion-tile" v-for="(item, m) in getCompletionItems " :key="m" v-bind:class="{ complete: item >= 1}"></div>
                        </div>
                    </div>
                    <div class="fields grid-span">
                        <p><span class="bold">getPageConnections:</span> navByConnection</p>
                        <div class="nav-holder">
                            <button class="nav-btn" v-for="(page, index) in getPageConnections" v-on:click="navByConnection(index)" :key="index">
                                <p><span class="bold">Path:</span> {{page.path}}</p>
                                <p><span class="bold">Gate:</span> {{page.gate}}</p>
                                <p><span class="bold">ForwardTransition:</span> {{page.forwardTransition}}</p>
                                <p><span class="bold">BackwardsTransition:</span> {{page.backwardTransition}}</p>
                            </button>
                        </div>
                    </div>
                    <div class="fields grid-span">
                        <p><span class="bold">getPageConnectionsAsPages:</span> navByPath</p>
                        <div class="nav-holder">
                            <button class="nav-btn" v-for="(page, index) in getPageConnectionsAsPages" v-on:click="navByPath(page.path)" :key="index">
                                <div class="nav-holder"></div>
                                <p><span class="bold">Title:</span> {{page.title}}</p>
                                <p><span class="bold">Path:</span> {{page.path}}</p>
                                <p><span class="bold">Connection #:</span> {{page.connections.length}}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <h2>Groups</h2>
            <div>
                <div class="group-holder">
                    <div class="fields">
                        <p><span class="bold">getGroup: </span> <input v-model="groupFilter" placeholder="filter"></p>
                        <p><span class="bold">Title: </span> {{getGroup.title}}</p>
                        <div class="group-page" v-for="(page, j) in getGroup.pages" :key="j">{{page}}</div>
                        <p><span class="bold">Comp: </span>{{getGroupCompletion(getGroup.title)}}</p>
                    </div>
                    <div class="fields">
                        <p><span class="bold">getGroupPages: </span> <input v-model="groupByPageFilter" placeholder="filter"></p>
                        <div class="nav-holder">
                            <div class="group-tile" v-for="(p, l) in getGroupPages" :key="l">
                                <p><span class="bold">Title: </span> {{p.title}}</p>
                                <p><span class="bold">Path: </span> {{p.path}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="fields">
                        <p><span class="bold">getGroups: </span> <input v-model="groupsFilter" placeholder="filter"></p>
                        <div class="nav-holder">
                            <div class="group-tile" v-for="(group, i) in getGroups" v-on:click="setGroup(group)" :key="i">
                                <p>{{group.title}}</p>
                                <div class="group-page" v-for="(page, j) in group.pages" :key="j">{{page}}</div>
                                <p><span class="bold">Comp: </span>{{getGroupCompletion(group.title)}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="fields">
                        <p><span class="bold">getGroupsPages: </span> <input v-model="groupsByPageFilter" placeholder="filter"></p>
                        <div class="nav-holder">
                            <div class="group-tile" v-for="(groupPages, k) in getGroupsPages" :key="k">
                                <div class="group-page" v-for="(p, l) in groupPages" :key="l">{{p.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  /* eslint-disable */
export default {
name: '',
  data () {
    return {
      groupsFilter: '',
      groupsByPageFilter: '',
      groupFilter: '',
      groupByPageFilter: ''
    }
  },
  methods: {
    setGroup (group) {
      this.group = group
    },
    getGroupCompletion (title) {
      return this.$store.getters.getGroupCompletion(title)
    },
    toggleIgnoreGating () {
      this.$store.commit('setIgnoreGating', !this.getIgnoreGating)
    },
    toggleOverrideTransition () {
      this.$store.commit('setOverrideTransition', !this.getOverrideTransition)
    },
    navByPath (path) {
      this.$store.dispatch('navByPath', path)
    },
    navByConnection (index) {
      this.$store.dispatch('navByConnection', index)
    },
    navBack () {
      this.$store.dispatch('navBack')
    }
  },
  computed: {
    courseCompletion () {
      return this.$store.getters.getCourseCompletion
    },
    courseTitle () {
      return this.$store.getters.getCourseTitle
    },
    defaultLanguage () {
      return this.$store.getters.getDefaultLanguage
    },
    getGroup () {
      let group = this.$store.getters.getGroup(this.groupFilter)
      if (group === null) {
        return {title:''}
      } else{
        return group
      }
    },
    getGroupPages () {
      return this.$store.getters.getGroupPages(this.groupByPageFilter)
    },
    getGroups () {
      return this.$store.getters.getGroups(this.groupsFilter)
    },
    getGroupsPages () {
      return this.$store.getters.getGroupsPages(this.groupsByPageFilter)
    },
    getIgnoreGating () {
      return this.$store.getters.getIgnoreGating
    },
    getOverrideTransition () {
      return this.$store.getters.getOverrideTransition
    },
    getPagesCompletion () {
      return this.$store.getters.getPagesCompletion
    },
    getPath () {
      return this.$store.getters.getPath
    },
    getTransitionType () {
      return this.$store.getters.getTransitionType
    },
    getPage () {
      return this.$store.getters.getPage()
    },
    getPageCompletion () {
      return this.$store.getters.getPageCompletion()
    },
    getCompletionItems () {
      return this.$store.getters.getCompletionItems
    },
    getPageConnections () {
      return this.$store.getters.getPageConnections()
    },
    getPageConnectionsAsPages () {
      return this.$store.getters.getPageConnectionsAsPages()
    }

  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
.api-viewer{
    font-size: 75%;
    P{
        margin-bottom: 0.25rem;
    }
    input{
        margin-left: 0.125rem !important;
    }
    .toggle-btn{
        font-size: 75%;
        height:100%;
        position:relative;
        float:right;
        appearance: none;
        cursor: pointer;
        outline: none;
        border: none;
        background: color(primary_blue);
        color: color(white_bright);
        @include padding(0.25, 0.25, 0.25, 0.25);
    }
    .nav-btn{
        font-size: 75%;
        text-align: left;
        width:100%;
        position:relative;
        float:right;
        appearance: none;
        cursor: pointer;
        outline: none;
        border: none;
        background: color(primary_blue);
        color: color(white_bright);
        margin-bottom: 0;
        @include padding(0.25, 0.25, 0.25, 0.25);
    }
    .back-btn{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .group-tile {
        font-size: 75%;
        height:100%;
        position:relative;
        border: none;
        background: color(primary_blue);
        color: color(white_bright);
        @include padding(0.25, 0.25, 0.25, 0.25);
        .group-page{
            color: color(white_bright);
            font-style: italic;
            font-weight: 100;
        }
    }
    .nav-holder{
        @include columns(false, 1, 1, 1, 1, 1);
        display: grid;
        grid-gap: .125rem;
    }
    .grid-span{
        grid-column-start: 1;
        grid-column-end: 4;
    }
    .section {
        border: 1px solid #999999;
        background: #dddddd;
        margin-bottom: 0.25rem;
        h2{
            font-size: 110%;
            background: #666666;
            color: #ffffff;
            border-bottom: 1px solid #999999;
            width: calc( 100% - 0.5rem );
            @include padding(0.25, 0, 0.125, 0.25);
            margin-bottom: 0;
        }
    }
    .fields{
        background: #eeeeee;
        border: 1px solid #999999;
        @include padding(0.125, 0.125, 0.125, 0.125);
        margin-bottom: 0;
    }
    .fields-holder{
        display: grid;
        grid-gap: .125rem;
        @include columns(false, 1, 1, 1, 1);
        @include padding(0.125, 0.125, 0.125, 0.125);
    }
    .page-holder{
         display: grid;
         grid-gap: .125rem;
         @include columns(false, 2, 2, 1);
         @include padding(0.125, 0.125, 0.125, 0.125);
         .completion-holder{
             @include columns(false, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
             display: grid;
             .completion-tile{
                 width:1rem;
                 height: 1rem;
                 background: red;
                 &.complete{
                     background: darkgreen;
                 }
             }
         }
     }
    .group-holder{
        display: grid;
        grid-gap: .125rem;
        @include columns(false, 1, 1);
        @include padding(0.125, 0.125, 0.125, 0.125);
    }
}
</style>