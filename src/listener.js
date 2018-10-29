const EVENT_METHOD_NAME = window && window.addEventListener ? 'addEventListener' : 'attachEvent'
const LISTENER_EVENT = window && window[EVENT_METHOD_NAME]
const EVENT_NAME = EVENT_METHOD_NAME === 'attachEvent' ? 'onmessage' : 'message'

LISTENER_EVENT(EVENT_NAME, function (event) {
  if (event.data.userLogged) {
    dispatchCustomEvent('onOctadeskSendUserLogged', event.data.userLogged)
  }

  if (event.data.setUserToken) {
    dispatchCustomEvent('onOctadeskSendUserToken', event.data.userLogged)
  }
}, false)

const dispatchCustomEvent = (eventName, data) => {
  const CustomEvent = window.CustomEvent
  const event = new CustomEvent(eventName, { detail: data })
  window.dispatchEvent(event)
}
