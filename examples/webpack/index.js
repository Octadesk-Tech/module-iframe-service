import IframeService from '../../index.js'

window.addEventListener('load', function () {
  var octadeskIframe = new IframeService('appid')

  // listen the octadesk events
  window.addEventListener('octadesk_onSendUserLogged', function (e) {
    var user = e.detail
    document.getElementById('usuario').innerText = JSON.stringify(user)
  })

  window.addEventListener('octadesk_onSendUserToken', function (e) {
    var userToken = e.detail
    document.getElementById('token').innerText = userToken
  })

  // tell octadesk to connect
  octadeskIframe.connect()
})
