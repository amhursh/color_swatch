import COLORS from '../../data/colors'

export { addSwatches, getText }

const $ = require('jquery')


function getText() {
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

function addSwatches() {
  let text = getText()
  let colors = getColorsFromText(text)
  let colorHexes = getColorHexValues(colors)
  appendColorSwatches(colorHexes)
}

// const clearSwatches = () => {
//   $('.colorized-text').clear()
// }