const $ = require('jquery')

const url = 'https://color-swatch-api.herokuapp.com/api/v1/'

const getTopColor = () => {
  return $.get(`${url}top_color`)
}

export { getTopColor }