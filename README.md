# 📱 EstuGrow - Notas de fotográficas

**Trabajo Integrador Final** – App de notas fotográficas con React Native (Expo + Expo Router).

Una aplicación móvil intuitiva para tomar y organizar notas de estudio con fotografías, perfecta para estudiantes que necesitan capturar información visual de libros, pizarrones, diapositivas y más.

## ✨ Características

- 📸 **Captura fotográfica integrada**: Toma fotos directamente desde la app usando la cámara del dispositivo
- 📝 **Notas enriquecidas**: Añade texto descriptivo a cada fotografía
- 🗂️ **Organización inteligente**: Gestiona y organiza todas tus notas de estudio en un solo lugar  
- 🔍 **Visualización optimizada**: Navega fácilmente entre tus notas con una interfaz limpia
- ✏️ **Edición flexible**: Modifica el contenido de tus notas cuando lo necesites
- 💾 **Almacenamiento local**: Tus datos se guardan de forma segura en el dispositivo
- 🌙 **Interfaz moderna**: Diseño dark con una experiencia de usuario fluida

## 🛠️ Requisitos del sistema

- **Node.js** LTS (versión 18 o superior)
- **npm** o **yarn**
- **Expo Go** instalado en tu dispositivo móvil
- Dispositivo físico con cámara (recomendado) o emulador

## 📦 Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/amarillaRodrigo/tif_reactNative_Amarilla.git
cd estugrow
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Verificar compatibilidad de dependencias
```bash
npx expo install --fix
```

Si encuentras conflictos de dependencias, usa:
```bash
npm install --legacy-peer-deps
```

## 🚀 Ejecutar la aplicación

### Modo desarrollo estándar
```bash
npm start
# o
npx expo start
```

### Para dispositivos iOS (modo túnel - recomendado)
```bash
npx expo start --tunnel
```

### Para dispositivos Android (modo LAN)
```bash
npx expo start --lan
```

### Limpiar caché (si hay problemas)
```bash
npx expo start --clear
```

## 📱 Cómo usar en tu dispositivo

### iOS
1. Descarga **Expo Go** desde el App Store
2. Ejecuta `npx expo start --tunnel` en tu terminal
3. Escanea el código QR que aparece con la cámara de tu iPhone
4. ¡La app se abrirá automáticamente!

### Android
1. Descarga **Expo Go** desde Google Play Store
2. Ejecuta `npx expo start` en tu terminal
3. Escanea el código QR desde la app Expo Go
4. ¡Disfruta de EstuGrow!

## 🧪 Compatibilidad probada

- ✅ **iOS** (iPhone con Expo Go - SDK 54)
- ✅ **Android** (dispositivos con Expo Go - SDK 54)
- ✅ **Web** (navegadores modernos con soporte para cámara)

## 🏗️ Tecnologías utilizadas

- **React Native** 0.81.5
- **Expo SDK** 54.0.0
- **Expo Router** 6.0.15 (navegación basada en archivos)
- **Expo Camera** 17.0.9 (captura de imágenes)
- **AsyncStorage** 2.2.0 (persistencia de datos)
- **React Navigation** 7.1.21

## 📁 Estructura del proyecto

```
estugrow/
├── app/                    # Páginas de la aplicación (Expo Router)
│   ├── _layout.jsx        # Layout principal
│   ├── index.jsx          # Pantalla principal (lista de notas)
│   ├── create.jsx         # Crear nueva nota
│   ├── about.jsx          # Información de la app
│   ├── edit/[id].jsx      # Editar nota específica
│   └── note/[id].jsx      # Ver nota específica
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── BottomTabs.jsx # Navegación inferior
│   │   └── NoteItem.jsx   # Componente de nota individual
│   └── context/
│       └── NotesContext.jsx # Gestión de estado global
├── assets/                # Recursos gráficos
└── package.json          # Dependencias y configuración
```

## 🔧 Solución de problemas comunes

### Error de dependencias incompatibles
```bash
npm install --legacy-peer-deps
```

### Error "Could not connect to server" en iOS
```bash
npx expo start --tunnel
```

### La cámara no funciona
- Verifica los permisos de cámara en tu dispositivo
- Asegúrate de usar un dispositivo físico (no emulador)

## 👨‍💻 Autor

**Rodrigo Amarilla**  


---

## 📄 Licencia

Este proyecto es un Trabajo Integrador Final académico desarrollado como parte de los estudios en desarrollo de aplicaciones móviles.

---


