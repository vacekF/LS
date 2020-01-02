<template>
<div class="active-image">
    <div class="background" :style="styleObject"></div>
    <slot></slot>
</div>
</template>

<script>
import ColorMixin from 'simple-core/mixins/ColorMixin'
import ViewportMixin from 'simple-core/mixins/ViewportMixin'
import Easing from 'simple-core/easing-utils'
export default {
  name: 'active-image',
  mixins: [ViewportMixin, ColorMixin],
  data () {
    return {
      onScreen: false,
      currentTime: null,
      position: 0,
      repeatCount: 0,
      directionForward: true,
      internalSettings: {},
      styleObject: {},
      settingsDefault: {
        animationType: 'none', // viewport, time, trigger
        duration: 0,
        repeat: 0,
        repeatType: 'none', // loop, reverse
        blendMode: 'normal',
        background: null,
        ease: 'linear',
        scrollDirection: 'vert', // horz
        startX: [50, '%'],
        startY: [50, '%'],
        endX: null,
        endY: null,
        startWidth: [100, '%'],
        startHeight: ['auto', '%'],
        endWidth: null,
        endHeight: null,
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
  provide () {
    const parentPosition = {}
    Object.defineProperty(parentPosition, 'position', {
      enumerable: true,
      get: () => this.position
    })
    return { parentPosition }
  },
  props: {
    settings: {
      type: Object,
      default: () => {
        return {}
      }
    },
    src: {
      type: [String, Array],
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    src (newSrc, oldSrc) {
      this.setStyleObject(0)
    },
    active (newActive, oldActive) {
      console.log('active toggled: ' + newActive)
      if (this.internalSettings.animationType === 'trigger') {
        if (newActive) {
          this.reset()
          window.requestAnimationFrame(this.animate)
        }
      }
    },
    viewportPosition (newPos, oldPos) {
      if (this.viewport && this.internalSettings.animationType === 'viewport') {
        let pos = (this.internalSettings.scrollDirection === 'vert') ? newPos.y : newPos.x
        this.position = pos
        this.setStyleObject(pos)
      }
    },
    viewport (newViewport, oldViewport) {
      if (newViewport) {
        if (this.internalSettings.animationType === 'time') {
          window.requestAnimationFrame(this.animate)
        }
      } else {
        if (this.internalSettings.animationType === 'time') {
          this.reset()
        }
      }
    }
  },
  mounted () {
    // this.internalSettings = Object.assign({}, this.settingsDefault, newSettings)
    // this._src = (newSrc.charAt(0) === '@')? '../..' + newSrc.slice(1) : newSrc
    let rawSettings = Object.assign({}, this.settingsDefault, this.settings)
    this.buildSettings(rawSettings)
    this.setStyleObject(0)
  },
  methods: {
    buildSettings (rawSettings) {
      let settingsNames = ['animationType', 'repeatType', 'blendMode', 'ease', 'duration', 'repeat', 'background', 'scrollDirection']
      let propNames = ['X', 'Y', 'Width', 'Height', 'Blur', 'Brightness', 'Contrast', 'Grayscale', 'HueRotate', 'Invert', 'Opacity', 'Saturate', 'Sepia']
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
            processedSettings['start' + propNames[j]] = (startRaw[0] === 'auto') ? 'auto' : [startRaw[0], startRaw[1]]
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
      if (this.internalSettings.background !== null) {
        sObj.backgroundColor = this.internalSettings.background
      }
      if (this.internalSettings.blendMode !== 'normal') {
        sObj.backgroundBlendMode = this.internalSettings.blendMode
      }
      // image source
      let imgSrc
      if (Array.isArray(this.src)) {
        imgSrc = "url('" + this.src.join("') url('") + "')"
      } else {
        imgSrc = "url('" + this.src + "')"
      }
      sObj.backgroundImage = imgSrc
      let x = this.buildPropertyValue(this.internalSettings.startX, this.internalSettings.endX, pos)
      let y = this.buildPropertyValue(this.internalSettings.startY, this.internalSettings.endY, pos)
      let w = this.buildPropertyValue(this.internalSettings.startWidth, this.internalSettings.endWidth, pos)
      let h = this.buildPropertyValue(this.internalSettings.startHeight, this.internalSettings.endHeight, pos)
      sObj.backgroundPosition = x + ' ' + y
      sObj.backgroundSize = w + ' ' + h
      let filter = this.buildFilter(pos)
      if (filter !== null) {
        sObj.filter = filter[0]
        if (filter[1]) {
          sObj.transform = 'scale(1.1)'
        }
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
    animate (timestamp) {
      if ((this.viewport && this.internalSettings.animationType === 'time') || (this.active && this.internalSettings.animationType === 'trigger')) {
        if (this.currentTime === null) { // Generate starting timestamp
          this.currentTime = timestamp
          window.requestAnimationFrame(this.animate)
        } else {
          let time
          if (this.directionForward) {
            time = (timestamp - this.currentTime) / (this.internalSettings.duration * 1000)
          } else {
            time = 1 - (timestamp - this.currentTime) / (this.internalSettings.duration * 1000)
          }
          this.position = time
          if (time >= 1 && this.directionForward) {
            this.setStyleObject(1)
            switch (this.internalSettings.repeatType) {
              case 'reverse':
                this.directionForward = !this.directionForward
                this.currentTime = null
                if (this.internalSettings.repeat === 0) {
                  this.repeatCount = 0
                  window.requestAnimationFrame(this.animate)
                } else if (this.repeatCount < (this.internalSettings.repeat - 1)) {
                  this.repeatCount++
                  window.requestAnimationFrame(this.animate)
                }
                break
              case 'loop':
                this.currentTime = null
                if (this.internalSettings.repeat === 0) {
                  this.repeatCount = 0
                  window.requestAnimationFrame(this.animate)
                } else if (this.repeatCount < (this.internalSettings.repeat - 1)) {
                  this.repeatCount++
                  window.requestAnimationFrame(this.animate)
                }
                break
              default:
                break
            }
          } else if (time <= 0 && !this.directionForward) {
            this.setStyleObject(0)
            this.directionForward = !this.directionForward
            this.currentTime = null
            if (this.internalSettings.repeat === 0) {
              this.repeatCount = 0
              window.requestAnimationFrame(this.animate)
            } else if (this.repeatCount < this.internalSettings.repeat - 1) {
              this.repeatCount++
              window.requestAnimationFrame(this.animate)
            }
          } else {
            this.setStyleObject(time)
            window.requestAnimationFrame(this.animate)
          }
        }
      } else { // Not in Viewport or Active
        this.reset()
      }
    },
    reset () {
      this.currentTime = null
      if (this.internalSettings.animationType !== 'trigger') {
        this.setStyleObject(0)
      }
      this.repeatCount = 0
      this.directionForward = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .active-image{
        position: relative;
        .background{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            overflow: hidden;
            z-index: -1;
        }
    }
</style>