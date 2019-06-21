if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys chamado de non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


const EVENT_METHOD_NAME = window && window.addEventListener ? 'addEventListener' : 'attachEvent'
const LISTENER_EVENT = window && window[EVENT_METHOD_NAME]
const EVENT_NAME = EVENT_METHOD_NAME === 'attachEvent' ? 'onmessage' : 'message'

const events = {
  'open-ticket'(data) {
    dispatchCustomEvent('octadesk_onOpenTicket', data)
  },
  'after-save-ticket'(data) {
    dispatchCustomEvent('octadesk_onAfterSaveTicket', data)
  },
  'open-person'(data) {
    dispatchCustomEvent('octadesk_onOpenPerson', data)
  },
  'after-save-person'(data) {
    dispatchCustomEvent('octadesk_onAfterSavePerson', data)
  },
  'userLogged'(data) {
    dispatchCustomEvent('octadesk_onSendUserLogged', data)
  },
  'userToken'(data) {
    dispatchCustomEvent('octadesk_onSendUserToken', data)
  },
  'appData'(data) {
    dispatchCustomEvent('octadesk_onSendAppData', JSON.parse(data))
  }
}

LISTENER_EVENT(EVENT_NAME, function (event) {

  const currentEvents = Object.keys(event.data);
  currentEvents.forEach(function(eventName) {
    if (events[eventName]) {
      events[eventName](event.data[eventName])
    }
  })

}, false)

const dispatchCustomEvent = (eventName, data) => {
  const CustomEvent = window.CustomEvent
  const event = new CustomEvent(eventName, { detail: data })
  window.dispatchEvent(event)
}