import { ALL_ELEMENTS } from './constants'

function clearClock () {
  ALL_ELEMENTS.forEach(element => {
    element.classList.remove('on')
  })
}

export { clearClock }
