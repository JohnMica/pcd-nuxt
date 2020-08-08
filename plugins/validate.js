import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'
import { extend } from 'vee-validate'

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  })
})
const urlPattern = new RegExp(
  /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
)

const latlongPatt = new RegExp(
  '^' + // No leading content.
  '[-+]?' + // Optional sign.
  '(?:[0-9]{0,30}\\.)?' + // Optionally 0-30 decimal digits of mantissa.
  '[0-9]{1,30}' + // 1-30 decimal digits of integer or fraction.
  '(?:[Ee][-+]?[1-2]?[0-9])?' + // Optional exponent 0-29 for scientific notation.
    '$' // No trailing content.
)

extend('name', {
  validate(value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'The field must have more then {length} characters',
})
extend('arr', {
  validate(arr, { length }) {
    return Array.isArray(arr) && arr.length >= length
  },
  params: ['length'],
  message: 'The field must have more then {length} entries',
})

extend('url_string', (value) => {
  if (urlPattern.test(value)) {
    return true
  }
  return 'The field is not a valid URL'
})

extend('latlong', (value) => {
  if (latlongPatt.test(value)) {
    return true
  }
  return 'The field is not a valid Latitude / Longitude'
})
extend('alpha_num', {
  validate(value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'The field must have at least {length} language',
})
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message:
    'The field must have at least {min} characters and {max} characters at most',
})
