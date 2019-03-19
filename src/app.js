import { $ } from './utils'
import { setTheme } from './setTheme'
import { populateThemeSelector } from './populateThemeSelector'
import { updateClock } from './updateClock'

const THEME_SELECTOR = $('select')

THEME_SELECTOR.addEventListener('change', e => {
  setTheme(e.target.value)
})

/** Main / Update Clock
----------------------------------------------------------------------------- */

/** Tick / init
----------------------------------------------------------------------------- */
setInterval(updateClock, 1000)
populateThemeSelector()
updateClock()
setTheme('kately')
