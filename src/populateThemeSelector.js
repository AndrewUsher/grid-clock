import { $ } from './utils'
import themes from './themes'

const populateThemeSelector = () => {
  $('select').innerHTML += Object.keys(themes)
    .map(theme => `<option value="${theme}">${theme}</option>`)
    .join('')
}

export { populateThemeSelector }
