# Trabajo Integrador Final - Notas Fotográficas

Este proyecto es una aplicación móvil desarrollada en React Native con Expo y Expo Router. Permite crear, editar, visualizar y eliminar notas basadas en fotografías, pensada para estudiantes y uso académico.

## Características principales

- Captura de imágenes usando la cámara del dispositivo o selección desde la galería.
- Cada nota incluye una foto, título, descripción y fecha de última modificación.
- Listado de notas con miniatura y navegación a detalle.
- Edición y eliminación de notas existentes.
- Persistencia local de datos usando AsyncStorage (sin backend).
- Navegación moderna basada en archivos con Expo Router.

## Requisitos

- Node.js LTS (18 o superior)
- npm
- Expo Go instalado en el dispositivo móvil
- Dispositivo físico con cámara (recomendado)

## Instalación

1. Clona el repositorio:
	```bash
	git clone https://github.com/acostaRodrigo/tif_reactNative_Acosta.git
	cd estugrow
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Si hay conflictos de dependencias:
	```bash
	npm install --legacy-peer-deps
	```

## Ejecución

Para iniciar la app en modo desarrollo:
```bash
npx expo start
```
Luego escanea el código QR con Expo Go en tu dispositivo.

Para limpiar caché si hay problemas:
```bash
npx expo start --clear
```

## Estructura del proyecto

```
estugrow/
├── app/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── create.jsx
│   ├── edit/[id].jsx
│   └── note/[id].jsx
├── src/
│   ├── components/
│   └── context/
├── assets/
└── package.json
```

## Tecnologías utilizadas

- React Native
- Expo SDK
- Expo Router
- Expo Camera
- AsyncStorage
- React Navigation

## Autor

Rodrigo Acosta

---

## Licencia

Proyecto académico para la materia de desarrollo de aplicaciones móviles.


