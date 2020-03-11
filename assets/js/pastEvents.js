document.addEventListener('DOMContentLoaded', function(event) {

  let dates = document.querySelectorAll('.date-event')

  function firstPast(dates) {
    let date = new Date()
    let currentDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()

    for (let i = 0; i < dates.length; i++) {
      if (isPast(currentDate, dates[i].innerHTML)) return dates[i-1]
    } 
  }

  function isPast(currentDate, eventDate) {
    let cd = currentDate.split('.')
    let ed = eventDate.split('.')
    for (let i = 2; i >= 0; i--) {
      if (cd[i] < ed[i]) return false
    }
    return true
  }

  let lastPast = firstPast(dates)

  let pastLine = document.createElement('li')
  let pastTextChild = document.createTextNode('menneet tapahtumat')

  pastLine.appendChild(pastTextChild)
  pastLine.classList.add('past-line')

  lastPast.parentElement.insertAdjacentElement('beforebegin', pastLine)

})
