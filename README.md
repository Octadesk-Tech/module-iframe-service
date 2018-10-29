# @octadesk/iframe

Iframe service to communicate with Octadesk

## How to use

```javascript
  const OctadeskIframe = require('@octadesk/iframe')

  // create a instance of service with your app id
  const octadeskIframe = new OctadeskIframe('appid')

  // listen the octadesk events
  window.addEventListener('onOctadeskSendUserLogged', function(e){
    const user = e.detail
  })

  window.addEventListener('onOctadeskSendUserToken', function(e){
    const userToken = e.detail
  })

  // tell octadesk to connect
  octadeskIframe.connect()
```

## Events

- onOctadeskSendUserLogged - Receive the current user logged in Octadesk

- onOctadeskSendUserToken - Receive the token of the current user logged in Octadesk

## Methods

- openTicket(ticketNumber) - Open a new tab in octadesk with the company ticket passed

- goTo(url) - Open a new tab in octadesk with the location
