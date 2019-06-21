# @octadesk/iframe

Iframe service to communicate with Octadesk

## How to use

```javascript
  const OctadeskIframe = require('@octadesk/iframe')

  // create a instance of service with your app id
  const octadeskIframe = new OctadeskIframe('appid')

  // listen the octadesk events
  window.addEventListener('octadesk_onSendUserLogged', function(e){
    const user = e.detail
  })

  window.addEventListener('octadesk_onSendUserToken', function(e){
    const userToken = e.detail
  })

  window.addEventListener('octadesk_onOpenTicket', function(e){
    const ticket = e.detail
  })

  window.addEventListener('octadesk_onAfterSaveTicket', function(e){
    const ticket = e.detail
  })

  window.addEventListener('octadesk_onSendAppData', function(e){
    const appData = e.detail
  })

  // tell octadesk to connect
  octadeskIframe.connect()
```

## Events

- octadesk_onSendUserLogged - Receive the current user logged in Octadesk

- octadesk_onSendUserToken - Receive the token of the current user logged in Octadesk

- octadesk_onOpenTicket - Receive the ticket that was opened

- octadesk_onAfterSaveTicket - Receive the saved ticket

- octadesk_onSendAppData - Receive data of the app

## Methods

- openTicket(ticketNumber) - Open a new tab in octadesk with the ticket passed

- openPerson(personId) - Open a new tab in octadesk with the person passed

- goTo(url) - Open a new tab in octadesk with the location
