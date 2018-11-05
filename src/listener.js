const EVENT_METHOD_NAME = window && window.addEventListener ? 'addEventListener' : 'attachEvent'
const LISTENER_EVENT = window && window[EVENT_METHOD_NAME]
const EVENT_NAME = EVENT_METHOD_NAME === 'attachEvent' ? 'onmessage' : 'message'

const events = {
  'open-ticket'(event) {
    dispatchCustomEvent('octadesk_onOpenTicket', event.data.ticket)
  },
  'after-save-ticket'(event) {
    dispatchCustomEvent('octadesk_onAfterSaveTicket', event.data.ticket)
  },
  'open-person'(event) {
    dispatchCustomEvent('octadesk_onOpenPerson', event.data.person)
  },
  'after-save-person'(event) {
    dispatchCustomEvent('octadesk_onAfterSavePerson', event.data.person)
  }
}

LISTENER_EVENT(EVENT_NAME, function (event) {
  if (event.data.userLogged) {
    dispatchCustomEvent('octadesk_onSendUserLogged', event.data.userLogged)
  }

  if (event.data.userToken) {
    dispatchCustomEvent('octadesk_onSendUserToken', event.data.userToken)
  }

  if (events[event.data.name]) {
    events[event.data.name](event)
  }
}, false)

const dispatchCustomEvent = (eventName, data) => {
  const CustomEvent = window.CustomEvent
  const event = new CustomEvent(eventName, { detail: data })
  window.dispatchEvent(event)
}
