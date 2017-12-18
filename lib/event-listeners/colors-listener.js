import { appendTopColor } from '../response-handlers/colors-response-handlers'
import COLORS from '../data/colors'

const $ = require('jquery')

$(document).ready( function() {
  appendTopColor()

  $('button').on('click', function() {
    let text = getText()
    let colors = getColorsFromText(text)
    console.log(colors)
    // appendColorSwatches()
  })
})

const getText = () => {
  return $('textarea').val()
}

const getColorsFromText = (text) => {
  let output = []
  let colors = Object.keys(COLORS)
  colors.forEach( (element) => {
    if(text.includes(element))
      output.push(element)
  })
  return output
}