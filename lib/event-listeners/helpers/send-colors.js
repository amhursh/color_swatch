import { getText } from '../helpers/add-swatches'
import { postColor } from '../../ajax-requests/colors-requests'
import COLORS from '../../data/colors'

export { sendColors }

const $ = require('jquery')

const getColorsWithCount = () => {
  let output = {}
  let text = getText()
  let colors = Object.keys(COLORS)
  colors.forEach( (color) => {
    let regEx = new RegExp(` ${color}`, 'g')
    if(text.match(regEx))
      output[color] = text.match(regEx).length
  })
  return output
}

function sendColors() {
  let colorsWithCount = getColorsWithCount()
  $.each(colorsWithCount, function(color, count) {
    for(let i=0; i < count; i++)
      postColor(color)
  })
}