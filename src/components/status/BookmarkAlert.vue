<template>
    <div class="bookmark-alert">
        <div class="panel">
            <slot></slot>
            <div class="btn-holder">
                <button class="no" @click="noSelected">{{getStrings.no}}</button>
                <button class="yes" @click="yesSelected">{{getStrings.yes}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bookmark-alert',
  props: {
    clearData: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    noSelected () {
      if (this.clearData) {
        this.$store.dispatch('resetState')
      } else {
        this.$store.commit('_setStoredHistory', ['/'])
      }
      this.$emit('bookmark-complete')
    },
    yesSelected () {
      this.$store.dispatch('gotoBookmark')
      this.$emit('bookmark-complete')
    }
  },
  computed: {
    getStrings () {
      let stringObj = {}
      stringObj.yes = this.$store.getters.getString({ category: 'bookmark-alert', name: 'yes' })
      stringObj.no = this.$store.getters.getString({ category: 'bookmark-alert', name: 'no' })
      return stringObj
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/style_utils.scss';
    .bookmark-alert{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#000000, 0.5);
        z-index: 4;
        .panel{
            width:20rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @include padding(0.5,0.5,0.5,0.5);
            background-color: color(white_bright);
            border-radius: 0.3rem;
            @include float-shadow;
            .btn-holder{
                width:100%;
                display: flex;
                flex-direction: row;
                button{
                    flex: 1;
                    display:block;
                    appearance: none;
                    border: none;
                    color: color(text_inverse);
                    background-color: color(primary);
                    border: none;
                    outline: none;
                    @include padding(0.3,0.5,0.3,0.5);
                    cursor:pointer;
                    margin: 1px;
                }
            }
        }
    }
</style>