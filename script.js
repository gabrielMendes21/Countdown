setInterval(() => {
  const now = new Date()
  const year = now.getMonth() == 11 && now.getDate() > 25 ? now.getFullYear() + 1 : now.getFullYear()
  const goal = new Date(year, 11, 25)
  const totalSeconds = goal - now
  
  days.children[0].textContent = String(Math.floor((totalSeconds / 1000 / 60 / 60 / 24))).padStart(2, '0')
  hours.children[0].textContent = String(Math.floor(((totalSeconds / 1000 / 60 / 60) % 24))).padStart(2, '0')
  minutes.children[0].textContent = String(Math.floor(((totalSeconds / 1000 / 60) % 60))).padStart(2, '0')
  seconds.children[0].textContent = String(Math.floor(((totalSeconds / 1000) % 60))).padStart(2, '0')

}, 1000)