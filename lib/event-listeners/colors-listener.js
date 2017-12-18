import { appendTopColor } from '../response-handlers/colors-response-handlers'
import COLORS from '../data/colors'

const $ = require('jquery')

$(document).ready( function() {
  appendTopColor()

  $('button').on('click', function() {
    let text = getText()
    getColorsFromText(text)
    // appendColorSwatches()
  })
})

const getText = () => {
  return $('textarea').val()
}

const getColorsFromText = (text) => {
  let colors = Object.keys(COLORS)
  colors.forEach( (element) => {
    console.log(element)
  })
  // console.log(Object.keys(COLORS))
}