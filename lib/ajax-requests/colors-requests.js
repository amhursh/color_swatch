const $ = require('jquery')

const url = 'https://color-swatch-api.herokuapp.com/api/v1/'

const getTopColor = () => {
  return $.get(`${url}top_color`)
}

const postColor = (validColor) => {
  let data = { color: { value: validColor } }
  $.post(`${url}colors`, data)
    .done( function(response) {
      console.log(response)
    })
}

export { getTopColor, postColor }