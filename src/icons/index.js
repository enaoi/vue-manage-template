import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

const svg = require.context('./svg', false, /\.svg$/)
const colorSvg = require.context('./colorSvg', false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(svg)
requireAll(colorSvg)
