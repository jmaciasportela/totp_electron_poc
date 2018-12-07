# Módulo 8. Desarrollo seguro y gestión de identidad M8. Tarea 2

Programar un componente software que permita:

* Generar un código QR para añadir un servicio en las aplicaciones mencionadas anteriormente
* Validar un código TOTP introducido por el usuario para verificar si es correcto o no para el servicio anterior

> M8T2 app is been built with Electron

## Prerequisites

```
$ npm install -g bozon
```

## Dev

```
$ npm install
```

### Run

```
$ bozon start
```

### Package

```
$ bozon package (windows|mac|linux)
```

Builds the app for OS X, Linux, and Windows, using [electron-builder](https://github.com/electron-userland/electron-builder).

## Usage

> Important: Every time you open the APP, shared key is recreated, so you need to scan again qr code

Open the app and scan QR code with your favourite OTP App:

![M8T2](https://user-images.githubusercontent.com/1454351/49610168-04792f80-f99e-11e8-9744-ad8d4b09304d.png "M8T2")

- https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=es
- https://play.google.com/store/apps/details?id=com.elevenpaths.android.latch&hl=es

![M8T2](https://user-images.githubusercontent.com/1454351/49633727-be05ee00-f9fa-11e8-9336-95f85ddb262a.jpg "M8T2")

Click on "Validate TOPT Code" and enter code displayed on your App

![M8T2](https://user-images.githubusercontent.com/1454351/49610165-03e09900-f99e-11e8-9dde-e86b3f5104ba.png "M8T2")

If is correct you will see Green Check

![M8T2](https://user-images.githubusercontent.com/1454351/49610166-03e09900-f99e-11e8-8a23-118935b28178.png "M8T2")

If is not correct you will see Red Check and retry button

![M8T2](https://user-images.githubusercontent.com/1454351/49610164-03e09900-f99e-11e8-993a-1c08c4dbad5b.png "M8T2")

## License

The MIT License (MIT) © Jesus Macias Portela 2018
