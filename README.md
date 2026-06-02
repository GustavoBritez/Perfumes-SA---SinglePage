# 🌸 Ivo 'Essence - Catálogo de Perfumes

Una aplicación web moderna de **Single Page Application (SPA)** para catálogo y venta de perfumes con carrito integrado y envío directo a WhatsApp.

## 📋 Características

✨ **Navegación fluida** - Transiciones suaves entre secciones  
🎠 **Carrusel interactivo** - Desliza perfumes con botones o teclas de flecha  
🛒 **Carrito persistente** - Los items se guardan en localStorage  
📱 **Integración WhatsApp** - Envía órdenes directamente a WhatsApp  
📱 **Responsive** - Funciona en desktop, tablet y móvil  
🎨 **Diseño moderno** - Estilos elegantes con gradientes y animaciones  

## 🏗️ Estructura del Proyecto

```
PG/
├── main.html           # Único archivo HTML (estructura base SPA)
├── README.md           # Este archivo
│
├── css/
│   └── style.css       # Estilos completos (responsive)
│
└── js/
    ├── app.js          # Lógica de la app, carrusel y navegación
    └── cart.js         # Gestión del carrito y WhatsApp
```

## 🚀 Cómo Usar

### 1. **Descargar o clonar el proyecto**
```bash
git clone <tu-repositorio>
cd PG
```

### 2. **Abrir en navegador**
- Simplemente abre `main.html` en tu navegador
- O usa un servidor local (recomendado):
  ```bash
  # Con Python 3
  python -m http.server 8000
  
  # Con Node.js (http-server)
  npx http-server
  ```

### 3. **Configurar número de WhatsApp**
Edita el archivo [js/cart.js](js/cart.js) línea 9:

```javascript
whatsappNumber: '+541234567890', // CAMBIAR POR EL NÚMERO REAL
```

Reemplaza `541234567890` con tu número de WhatsApp (incluir código de país sin +).

## 📸 Añadir Fotos a los Perfumes

El sistema usa **emojis** por defecto (🌊 🔥 💕 etc), pero puedes reemplazarlos con imágenes reales:

### Opción 1: Reemplazar emojis con imágenes (Recomendado)
Edita [js/app.js](js/app.js) y reemplaza el campo `emoji` con una URL:

```javascript
{ 
    name: 'XS PURE', 
    brand: 'PACO RABANNE', 
    price: 25000, 
    emoji: 'https://tupagina.com/imagenes/xs-pure.jpg' // URL de imagen
}
```

Luego en [css/style.css](css/style.css), modifica `.carousel-image`:

```css
.carousel-image {
    width: 250px;
    height: 350px;
    background-size: cover;
    background-position: center;
    /* ... resto del CSS */
}
```

Y en [js/app.js](js/app.js) cambia la línea del elemento:
```javascript
item.innerHTML = `
    <div class="carousel-image" style="background-image: url('${perfume.emoji}')"></div>
    <h4>${perfume.name}</h4>
    <p>${perfume.brand}</p>
`;
```

### Opción 2: Usar carpeta local de imágenes
1. Crea una carpeta `img/` en la raíz del proyecto
2. Sube tus imágenes con nombres como `xs-pure.jpg`
3. Modifica el path en `app.js`:
```javascript
emoji: './img/xs-pure.jpg'
```

## 🛠️ Personalización

### Cambiar colores
Edita las variables CSS en [css/style.css](css/style.css) (líneas 1-12):

```css
:root {
    --primary-color: #8B4789;      /* Color principal */
    --secondary-color: #D4A5D4;    /* Color secundario */
    --accent-color: #FFB6D9;       /* Color de acentos */
    --dark-text: #2C3E50;          /* Color de texto */
    /* ... */
}
```

### Cambiar precio
Edita el precio en cada perfume en [js/app.js](js/app.js):
```javascript
{ name: 'PRODUCTO', brand: 'MARCA', price: 30000, emoji: '🌸' } // Cambiar 30000
```

### Agregar/Eliminar perfumes
Simplemente añade o elimina objetos del array `perfumeDatabase` en [js/app.js](js/app.js).

## 🎮 Funcionalidades del Carrito

| Acción | Cómo hacerlo |
|--------|-------------|
| Agregar al carrito | Selecciona un perfume en el catálogo y haz click en "Agregar al Carrito" |
| Ver carrito | Haz click en "🛒 Carrito" en la navegación |
| Quitar item | Haz click en "🗑️ Quitar" en el carrito |
| Limpiar todo | Haz click en "Limpiar Carrito" |
| Enviar por WhatsApp | Haz click en "📱 Enviar por WhatsApp" (abre automáticamente la app o web.whatsapp.com) |

## 💾 Almacenamiento de Datos

El carrito se guarda automáticamente en el navegador usando **localStorage**, por lo que:
- ✅ Los items persisten si refrescas la página
- ✅ Los datos se guardan localmente (privado)
- ❌ Se pierden al limpiar caché del navegador

## 📱 Navegación por Teclado

En el catálogo puedes navegar el carrusel con:
- ⬅️ Flecha izquierda - Anterior
- ➡️ Flecha derecha - Siguiente

## 🔒 Seguridad

- Todas las transacciones se hacen por WhatsApp
- No hay procesamiento de pagos en la web
- Los precios se envían al cliente vía WhatsApp

## 🐛 Solución de Problemas

**P: El carrusel no funciona**  
R: Asegúrate de que `app.js` esté cargado correctamente. Revisa la consola del navegador (F12).

**P: WhatsApp no se abre**  
R: Verifica que:
- El número en `cart.js` esté correcto (con código de país)
- Tengas WhatsApp instalado o acceso a web.whatsapp.com

**P: Los estilos se ven mal**  
R: Limpia caché (Ctrl+Shift+Supr) y recarga la página.

## 📄 Licencia

Proyecto para Ivo 'Essence © 2026

## 👨‍💻 Desarrollo

Archivo principal de estilos: [style.css](css/style.css)  
Lógica de app: [app.js](js/app.js)  
Gestión carrito: [cart.js](js/cart.js)  
Estructura: [main.html](main.html)

