import { ALL_ELEMENTS } from './constants'

/**
 * @description Turns all clock elements off
 * @function clearClock
 * @public
 *
 */
function clearClock () {
  ALL_ELEMENTS.forEach(element => {
    element.classList.remove('on')
  })
}

export { clearClock }
