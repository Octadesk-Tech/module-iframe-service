import IframeService from '../../index.js'

window.addEventListener('load', function () {
  var octadeskIframe = new IframeService('appid')

  // listen the octadesk events
  window.addEventListener('onOctadeskSendUserLogged', function (e) {
    var user = e.detail
    document.getElementById('usuario').innerText = JSON.stringify(user)
  })

  window.addEventListener('onOctadeskSendUserToken', function (e) {
    var userToken = e.detail
    document.getElementById('token').innerText = userToken
  })

  // tell octadesk to connect
  octadeskIframe.connect()
})
