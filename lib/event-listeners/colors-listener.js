import { appendTopColor } from '../response-handlers/colors-response-handlers'
import { postColor } from '../ajax-requests/colors-requests'
import COLORS from '../data/colors'

const $ = require('jquery')

$(document).ready( function() {
  appendTopColor()

  $('button').on('click', function() {
    addSwatches()
    sendColors()
  })

  $('textarea').keypress( (event) => {
    let key = event.keyCode
    if(key === 13) {
      addSwatches()
      sendColors()
    }
  })
})

const getText = () => {
  return $('textarea').val().toLowerCase()
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

const getColorHexValues = (colors) => {
  let output = []
  colors.forEach( (color) => {
    output.push(COLORS[color])
  })
  return output
}

const appendColorSwatches = (colorHexes) => {
  colorHexes.forEach( (hexVal) => {
    $('.colorized-text').append(
      `<div class="swatch" style="background-color:${hexVal};"></div>`
      )
  })
}

const addSwatches = () => {
  let text = getText()
  let colors = getColorsFromText(text)
  let colorHexes = getColorHexValues(colors)
  appendColorSwatches(colorHexes)
}

const getColorsWithCount = () => {
  let output = {}
  let text = getText()
  let colors = Object.keys(COLORS)
  colors.forEach( (color) => {
    let regEx = new RegExp(color, 'g')
    if(text.match(regEx))
      output[color] = text.match(regEx).length
  })
  return output
}

const sendColors = () => {
  let colorsWithCount = getColorsWithCount()
  $.each(colorsWithCount, function(color, count) {
    for(let i=0; i < count; i++)
      postColor(color)
  })
}












