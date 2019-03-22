import themes from './themes'
import { ROOT } from './constants'

const setTheme = themeName => {
  const {
    clockBgColor,
    clockInactiveColor,
    clockActiveColor,
    clockFont
  } = themes[themeName]

  ROOT.style.setProperty('--clock-active-color', clockActiveColor)
  ROOT.style.setProperty('--clock-bg-color', clockBgColor)
  ROOT.style.setProperty('--clock-inactive-color', clockInactiveColor)
  ROOT.style.setProperty('--clock-font', clockFont)
}

export { setTheme }
