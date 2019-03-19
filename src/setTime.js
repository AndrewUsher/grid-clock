import { $ } from './utils'
import { PREFIX_ELEMENTS, SUFFIX_ELEMENTS } from './constants'

function setClockElOn (selector) {
  $(selector).classList.add('on')
}

function setPrefixElOn (number) {
  PREFIX_ELEMENTS[number - 1].classList.add('on')
}

function setSuffixElOn (number) {
  if (parseInt(number, 10) === 13) {
    number = 1
  }
  SUFFIX_ELEMENTS[number - 1].classList.add('on')
}

function setMinutes (minutes) {
  minutes = minutes.toString().split('')
  const minutesFirstDigit = parseInt(minutes[0], 10)
  const minutesSecondDigit = parseInt(minutes[1], 10)

  switch (minutesFirstDigit) {
    case 2:
      setClockElOn('.twenty-minutes')
      break
    case 3:
      setClockElOn('.thirty-minutes')
      break
    case 4:
      setClockElOn('.forty-minutes')
      break
    case 5:
      setClockElOn('.fifty-minutes')
      break
  }

  if (minutes % 10 !== 0) {
    setSuffixElOn(minutesSecondDigit)
  }
}

export { setClockElOn, setPrefixElOn, setSuffixElOn, setMinutes }
