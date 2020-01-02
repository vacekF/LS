<template>
    <select class="language-selection" v-model="defaultLanguage">
        <option v-for="lang in availableLanguages" :value="lang" :key="lang.code">
            {{lang.name}}
        </option>
    </select>
</template>

<script>
export default {
  name: 'language-selection',
  data () {
    return {
      availableLanguages: []
    }
  },
  created () {
    this.availableLanguages = this.$store.getters.getAvailableLanguages
  },
  computed: {
    defaultLanguage: {
      get () {
        let defaultLanguage = this.$store.getters.getDefaultLanguage.slice(1)
        for (let i = 0; i < this.availableLanguages.length; i++) {
          let languageItem = this.availableLanguages[i]
          if (languageItem.code === defaultLanguage) {
            return languageItem
          }
        }
        return null
      },
      set (val) {
        this.$store.commit('setDefaultLanguage', '/' + val.code)
        let path = this.$store.getters.getPath
        this.$store.dispatch('navByPath', path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .language-selection{
        margin-top: 0px;
        height: 23px;
        padding: 1px 5px;
        font-size: 1em;
        border-radius: 3px;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 1px solid #DDD;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.5), 0 -1px 0px #FFF, 0 1px 0 #FFF;
        &:focus{
            outline: none;
        }
    }
</style>