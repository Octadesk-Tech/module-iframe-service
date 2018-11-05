require('./listener')

class IframeService {
  constructor(appId) {
    this.appId = appId
  }

  /**
   * @private
   */
  _postEvent(event, payload) {
    if (window && window.parent) {
      window.parent.postMessage(Object.assign({ name: event, octaapp: true, id: this.appId }, payload || {}), '*')
    }
  }

  /**
   * Tell the Octadesk that the app is ready to receive logged user and token
   */
  connect() {
    this._postEvent('appConnected')
  }

  /**
   * Open a current company ticket
   * @param {long} ticketNumber - Number of the ticket
   */
  openTicket(ticketNumber) {
    this._postEvent('showTicket', { ticketNumber })
  }

  /**
   * Open a new tab with the person
   * @param {GUID} personId - Person Id
   */
  openPerson(personId) {
    this._postEvent('openPerson', { personId })
  }

  /**
   * Change the current page of Octadesk
   * @param {string} url - A Octadesk internal path
   */
  goTo(url) {
    this._postEvent('changeUrl', { url })
  }
}

if (window) {
  window.OctadeskIframeService = IframeService
}

module.exports = IframeService
