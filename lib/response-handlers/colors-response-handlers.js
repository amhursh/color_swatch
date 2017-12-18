import { getTopColor } from '../ajax-requests/colors-requests'

const $ = require('jquery')

const appendTopColor = () => {
  getTopColor()
    .then((data) => {
      $('.top-color').text(data.value)
    })
}

export { appendTopColor }