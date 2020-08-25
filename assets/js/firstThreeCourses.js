
/* This solution makes use of "simple access" to google, providing only an API Key.
 * This way we can only get access to public calendars. To access a private calendar,
 * we would need to use OAuth 2.0 access.
 *
 * "Simple" vs. "Authorized" access: https://developers.google.com/api-client-library/javascript/features/authentication
 * Examples of "simple" vs OAuth 2.0 access: https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests
 *
 * We will make use of "Option 1: Load the API discovery document, then assemble the request."
 * as described in https://developers.google.com/api-client-library/javascript/start/start-js
 */

function printCalendar() {

  const apiKey = 'AIzaSyA7bYrJbP6lbAWmigxHkJiIqOasqQowGWg';
  const userTimeZone = "Europe/Helsinki";

  function getCalendarEvents(calendarId) {
    return gapi.client.calendar.events.list({
      'calendarId': calendarId,
      'timeZone': userTimeZone,
      'singleEvents': true,
      'timeMin': (new Date()).toISOString(), //gathers only events not happened yet
      'maxResults': 3,
      'orderBy': 'startTime'
    })
  }

  function writeToCalendar(course, result) {
    calendarRows.push(`<tr><th>${course}</th>`)
    result.forEach(function(entry) {
      let summary = entry.summary
      calendarRows.push(`<td>${summary}</td>`)
    })
    calendarRows.push('</tr>')
  }

  const calendarRows = ['<table class="course-table"><tbody>'];

  gapi.client.init({
    'apiKey': apiKey,
    // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  }).then(function () {
    // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
    // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list

    return getCalendarEvents('0avi8qhl115k4npig948uqjnp8@group.calendar.google.com')


  }).then(function(response) {

    if (response.result.items) {

      const result = response.result.items

      calendarRows.push('<tr> <th></th>')

      result.forEach(function(entry) {
        let day = moment(entry.start.dateTime).format("D.M")
        calendarRows.push(`<th class="date-courses">${day}</th>`)
      })

      calendarRows.push("</tr>")

      writeToCalendar('Alkeet', result)

    }
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  }).then(function() {
    return getCalendarEvents('pgmr87m067201u7s5ki96rhads@group.calendar.google.com')
  }).then(function(response) {
    writeToCalendar('Alkeisjatko', response.result.items)
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  }).then(function() {
    return getCalendarEvents('f9h6u9mn3ttok40negh0senlf4@group.calendar.google.com')
  }).then(function(response) {
    writeToCalendar('Alkeisjatko', response.result.items)

    calendarRows.push('</tbody></table>');

    const nextThreeCourses = document.getElementById("nextThreeCourses")
    const newH2Element = document.createElement("h2")

    nextThreeCourses.innerHTML = calendarRows.join("")

    newH2Element.innerHTML = '<h2>Seuraavat kurssit</h2>'
    nextThreeCourses.prepend(newH2Element)
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  })

};

// Loads the JavaScript client library and invokes `start` afterwards.
gapi.load('client', printCalendar);
