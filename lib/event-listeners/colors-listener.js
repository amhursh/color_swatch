import { appendTopColor } from '../response-handlers/colors-response-handlers'
import { addSwatches } from './helpers/add-swatches'
import { sendColors } from './helpers/send-colors'
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












