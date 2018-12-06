const electron = require('electron');
const ipc = electron.ipcRenderer

electron.ipcRenderer.on('loaded' , function(event, data) {
  for (let element of document.getElementsByClassName('title')) {
    element.innerHTML = data.appName + ' APP';
  }
  document.getElementById('instructions').innerHTML = 'Read this QR code with your TOTP application';
  document.getElementById('key').innerHTML = 'Or enter this key: ' + data.key;
  document.getElementById('qrcode').setAttribute('src', data.qrcode);

  electron.ipcRenderer.on('validation' , function(event, data) {
    document.getElementById('code').style.display = 'none';
    document.getElementById('validateBtn').style.display = 'none';
    if (data.isValid) {
      document.getElementById('okImg').style.display = '';
    } else {
      document.getElementById('nokImg').style.display = '';
      document.getElementById('retryBtn').style.display = '';
      document.getElementById('code').value = '';
    }
  });

  const gotoView2 = document.getElementById('gotoView2');
  gotoView2.addEventListener('click', function () {
    document.getElementById('view1').style.display = 'none';
    document.getElementById('view2').style.display = '';
  });

  const validateBtn = document.getElementById('validateBtn');
  validateBtn.addEventListener('click', function () {
    if(document.getElementById('code').value.length == 6 ){
      document.getElementById('message').style.display = 'none';
      ipc.send('validateCode', document.getElementById('code').value);
    } else{
      document.getElementById('message').style.display = '';
    }
  });

  const goHomeBtn = document.getElementById('goHomeBtn');
  goHomeBtn.addEventListener('click', function () {
    document.getElementById('view1').style.display = '';
    document.getElementById('view2').style.display = 'none';

    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('goHomeBtn').style.display = '';
    document.getElementById('validateBtn').style.display = '';
    document.getElementById('code').style.display = '';

    document.getElementById('okImg').style.display = 'none';
    document.getElementById('nokImg').style.display = 'none';
  });

  const retryBtn = document.getElementById('retryBtn');
  retryBtn.addEventListener('click', function () {
    document.getElementById('code').style.display = '';

    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('goHomeBtn').style.display = '';
    document.getElementById('validateBtn').style.display = '';

    document.getElementById('okImg').style.display = 'none';
    document.getElementById('nokImg').style.display = 'none';

    document.getElementById('code').value = '';
  });

});
