var path = require('path');
var json = require('../../package.json');
var QRCode = require('qrcode');
var otplib = require('otplib');
var speakeasy = require('speakeasy');

var electron = require('electron');
var ipc = electron.ipcMain;

var minLength = 16; //128bits at least
var secret32 = speakeasy.generateSecret({length: minLength});

electron.app.on('ready', function() {

  var window = new electron.BrowserWindow({
    title: json.name,
    width: json.settings.width,
    height: json.settings.height
  });

  window.loadURL('file://' + path.join(__dirname, '..', '..') + '/index.html');

  window.webContents.on('did-finish-load', function(){

    QRCode.toDataURL("otpauth://totp/M8T2:ciberUser?secret=" + secret32.base32 + "&issuer=M8T2", { errorCorrectionLevel: 'M' })
      .then(codeQRasBase64 => {
        window.webContents.send('loaded', {
          qrcode: codeQRasBase64,
          appName: json.name,
          key: secret32.base32
        });
      })
      .catch(err => {
        console.error(err)
      })
  });

  window.on('closed', function() {
    window = null;
  });

  ipc.on('validateCode', function (event, arg) {
    const isValid = otplib.authenticator.check(arg, secret32.base32);
    window.webContents.send('validation', {isValid: isValid});
  })

});


