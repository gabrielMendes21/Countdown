setInterval(() => {
  const now = new Date()
  const goal = new Date(2022, 11, 25)
  const totalSeconds = goal - now

  function prettier(id) {
    if (id.textContent.length == 1) {
      const array = Array.from(id.textContent)
      array.unshift('0')
      id.textContent = array.join('')
    }
  }

  days.textContent = (totalSeconds / 1000 / 60 / 60 / 24).toFixed(0)
  hours.textContent = ((totalSeconds / 1000 / 60 / 60) % 24).toFixed(0)
  minutes.textContent = ((totalSeconds / 1000 / 60) % 60).toFixed(0)
  seconds.textContent = ((totalSeconds / 1000) % 60).toFixed(0)

  prettier(days)
  prettier(hours)
  prettier(minutes)
  prettier(seconds)

  console.log((totalSeconds / 1000) % 60)
}, 1000)
