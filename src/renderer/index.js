import { $ } from './utils'
import { setTheme } from './setTheme'
import { populateThemeSelector } from './populateThemeSelector'
import { updateClock } from './updateClock'
import './index.css'

const THEME_SELECTOR = $('select')

THEME_SELECTOR.addEventListener(
  'change',
  ({ target: { value: selectedTheme } }) => {
    setTheme(selectedTheme)
  }
)

setInterval(updateClock, 1000)
populateThemeSelector()
updateClock()
setTheme('kately')
