import { useState, useEffect, useRef } from 'react'

export const useCountdown = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  // const [timerSeconds, setTimerSeconds] = useState(0)

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('May 31,2022, 08:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      )
      // const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval)
      } else {
        // Update Timer
        setTimerDays(
          days < 10 ? `0${days}` : days.toString()
        )
        setTimerHours(
          hours < 10 ? `0${hours}` : hours.toString()
        )
        setTimerMinutes(
          minutes < 10 ? `0${minutes}` : minutes.toString()
        )
        // setTimerSeconds(seconds)
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer()
  }, [])
  return (
    [
      { name: 'Days', value: timerDays },
      { name: 'Hours', value: timerHours },
      { name: 'Minutes', value: timerMinutes }
      // { name: 'Seconds', value: timerSeconds }
    ]
  )
}
