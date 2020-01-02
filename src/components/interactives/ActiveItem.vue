<template>
<div class="active-item" :style="styleObject">
    <slot></slot>
</div>
</template>

<script>
import Easing from 'simple-core/easing-utils'
export default {
  name: 'active-item',
  data () {
    return {
      position: {},
      internalSettings: {},
      styleObject: {},
      settingsDefault: {
        perspective: 'none',
        perspectiveOrigin: 'center',
        ease: 'linear',
        blendMode: 'normal',
        startRotateX: [null, 'deg'],
        startRotateY: [null, 'deg'],
        startRotateZ: [null, 'deg'],
        endRotateX: null,
        endRotateY: null,
        endRotateZ: null,
        startScaleX: [null, ''],
        startScaleY: [null, ''],
        startScaleZ: [null, ''],
        endScaleX: null,
        endScaleY: null,
        endScaleZ: null,
        startTranslateX: [null, '%'],
        startTranslateY: [null, '%'],
        startTranslateZ: [null, '%'],
        endTranslateX: null,
        endTranslateY: null,
        endTranslateZ: null,
        startSkewX: [null, 'deg'],
        startSkewY: [null, 'deg'],
        endSkewX: null,
        endSkewY: null,
        startBlur: [null, 'px'],
        endBlur: null,
        startBrightness: [null, '%'],
        endBrightness: null,
        startContrast: [null, '%'],
        endContrast: null,
        startGrayscale: [null, '%'],
        endGrayscale: null,
        startHueRotate: [null, 'deg'],
        endHueRotate: null,
        startInvert: [null, '%'],
        endInvert: null,
        startOpacity: [null, '%'],
        endOpacity: null,
        startSaturate: [null, '%'],
        endSaturate: null,
        startSepia: [null, '%'],
        endSepia: null
      }
    }
  },
  props: {
    settings: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  inject: ['parentPosition'],
  mounted () {
    let rawSettings = Object.assign({}, this.settingsDefault, this.settings)
    this.buildSettings(rawSettings)
    this.setStyleObject(0)
    this.position = this.parentPosition
  },
  watch: {
    settings (newSettings, oldSettings) {
      let rawSettings = Object.assign({}, this.settingsDefault, newSettings)
      this.buildSettings(rawSettings)
      this.setStyleObject(this.position.position)
    },
    position: {
      handler: function (newPos, oldPos) {
        this.setStyleObject(newPos.position)
      },
      deep: true
    }
  },
  methods: {
    buildSettings (rawSettings) {
      let settingsNames = ['perspective', 'perspectiveOrigin', 'ease', 'blendMode']
      let propNames = ['ScaleX', 'ScaleY', 'ScaleZ', 'RotateX', 'RotateY', 'RotateZ', 'ScaleZ', 'TranslateX', 'TranslateY', 'TranslateZ', 'SkewX', 'SkewY', 'Blur', 'Brightness', 'Contrast', 'Grayscale', 'HueRotate', 'Invert', 'Opacity', 'Saturate', 'Sepia']
      let processedSettings = {}
      for (let i = 0; i < settingsNames.length; i++) {
        processedSettings[settingsNames[i]] = rawSettings[settingsNames[i]]
      }
      for (let j = 0; j < propNames.length; j++) {
        let startRaw = this.parseUnit(rawSettings['start' + propNames[j]])
        let startDefault = this.settingsDefault['start' + propNames[j]]
        let endRaw = this.parseUnit(rawSettings['end' + propNames[j]])
        /* console.log('///////////' + propNames[j])
        console.log(rawSettings['start' + propNames[j]])
        console.log(startRaw)
        console.log(startDefault)
        console.log(endRaw) */
        if (Array.isArray(startRaw)) {
          if (startRaw[1].length > 0) {
            processedSettings['start' + propNames[j]] = (startRaw[0] === 'none') ? 'none' : [startRaw[0], startRaw[1]]
            processedSettings['end' + propNames[j]] = (Array.isArray(endRaw)) ? endRaw[0] : endRaw
          } else {
            processedSettings[('start' + propNames[j])] = [startRaw[0], startDefault[1]]
            processedSettings['end' + propNames[j]] = (Array.isArray(endRaw)) ? endRaw[0] : endRaw
          }
        } else {
          processedSettings['start' + propNames[j]] = startRaw
          processedSettings['end' + propNames[j]] = (Array.isArray(endRaw)) ? endRaw[0] : endRaw
        }
      }
      this.internalSettings = processedSettings
    },
    parseUnit (val) {
      if (val === null) {
        return val
      } else if (Array.isArray(val)) {
        if (val[0] === null) {
          return null
        } else {
          return val
        }
      }
      let str = String(val)
      let num = parseFloat(str)
      num = (isNaN(num)) ? str : [parseFloat(str), str.replace(num, '')]
      return num
    },
    setStyleObject (pos) {
      let sObj = {}
      if (this.internalSettings.perspective !== null) {
        sObj.perspective = this.internalSettings.perspective
      }
      if (this.internalSettings.perspectiveOrigin !== null) {
        sObj.perspectiveOrigin = this.internalSettings.blendMode
      }
      if (this.internalSettings.blendMode !== 'normal') {
        sObj.backgroundBlendMode = this.internalSettings.perspectiveOrigin
      }
      let filter = this.buildFilter(pos)
      if (filter !== null) {
        sObj.filter = filter[0]
      }
      let transform = this.buildTransform(pos)
      if (transform !== null) {
        sObj.transform = transform
      }
      this.styleObject = sObj
    },
    buildPropertyValue (startVal, endVal, pos) {
      if (endVal === null) {
        if (Array.isArray(startVal)) {
          return startVal.join('')
        } else {
          return startVal
        }
      } else {
        return Easing[this.internalSettings.ease](pos, startVal[0], endVal, 1) + startVal[1]
      }
    },
    buildFilter (pos) {
      let KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g
      let filters = ['Blur', 'Brightness', 'Contrast', 'Grayscale', 'HueRotate', 'Invert', 'Opacity', 'Saturate', 'Sepia']
      let filterArray = []
      let scale = false
      for (let i = 0; i < filters.length; i++) {
        if (this.internalSettings['start' + filters[i]] !== null) {
          let num = this.buildPropertyValue(this.internalSettings['start' + filters[i]], this.internalSettings['end' + filters[i]], pos)
          let propName = filters[i].replace(KEBAB_REGEX, function (match) {
            return '-' + match.toLowerCase()
          })
          filterArray.push(propName.slice(1) + '(' + num + ')')
          if (filters[i] === 'Blur') {
            scale = true
          }
        }
      }
      if (filterArray.length === 0) {
        return null
      } else {
        let returnArray = [filterArray.join(' '), scale]
        return returnArray
      }
    },
    buildTransform (pos) {
      let transforms = ['RotateX', 'RotateY', 'RotateZ', 'ScaleX', 'ScaleY', 'ScaleZ', 'TranslateX', 'TranslateY', 'TranslateZ', 'SkewX', 'SkewY']
      let filterArray = []
      for (let i = 0; i < transforms.length; i++) {
        if (this.internalSettings['start' + transforms[i]] !== null) {
          let num = this.buildPropertyValue(this.internalSettings['start' + transforms[i]], this.internalSettings['end' + transforms[i]], pos)
          let propName = transforms[i]
          filterArray.push(propName.charAt(0).toLowerCase() + propName.slice(1) + '(' + num + ')')
        }
      }
      if (filterArray.length === 0) {
        return null
      } else {
        let returnArray = filterArray.join(' ')
        return returnArray
      }
    }
  }
}
</script>

<style lang="scss">

</style>