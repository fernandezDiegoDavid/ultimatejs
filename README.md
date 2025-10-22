# Ultimate JS 🚀

Proyecto de aprendizaje completo de JavaScript desde fundamentos hasta conceptos avanzados.

---

## 📂 Estructura del Proyecto

```
ultimatejs/
├── 📄 .gitignore
├── 📄 app.js
├── 📄 index.html
├── 📄 README.md
└── 📁 01-tipos/
    ├── 01-variables.js
    ├── 02-primitivos.js
    ├── 03-constantes.js
    ├── 04-tipado-dinamico.js
    ├── 05-comentarios.js
    ├── 06-objetos.js
    ├── 07-arrays.js
    ├── 08-funciones.js
    └── 09-argumentos.js
```

---

## 📖 Contenido por Sección

### 01-tipos - Fundamentos de JavaScript

#### Variables y Tipos de Datos
- ✅ [01-variables.js](01-tipos/01-variables.js): Declaración de variables, convenciones de nombres (camelCase, snake_case), template literals y concatenación.
- ✅ [02-primitivos.js](01-tipos/02-primitivos.js): Tipos primitivos (Number, String, Boolean, Null, Undefined).
- ✅ [03-constantes.js](01-tipos/03-constantes.js): Declaración con `const` y diferencias con `let`.
- ✅ [04-tipado-dinamico.js](01-tipos/04-tipado-dinamico.js): Tipado dinámico, reasignación de tipos y uso de `typeof`.
- ✅ [05-comentarios.js](01-tipos/05-comentarios.js): Comentarios de una línea, multilínea y documentación JSDoc.

#### Estructuras de Datos
- ✅ [06-objetos.js](01-tipos/06-objetos.js): Objetos literales, propiedades, acceso con notación de punto y corchetes, modificación y eliminación de propiedades.
- ✅ [07-arrays.js](01-tipos/07-arrays.js): Arrays, índices, tipos mixtos y propiedades.

#### Funciones
- ✅ [08-funciones.js](01-tipos/08-funciones.js): Declaración de funciones, retorno de valores y ejecución.
- ✅ [09-argumentos.js](01-tipos/09-argumentos.js): Parámetros, objeto `arguments` y paso de valores.

---

## 📚 Tipos de Datos en JavaScript

### Tipos Primitivos
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `Number` | Números enteros y decimales | `42`, `3.14` |
| `String` | Cadenas de texto | `"Hola Mundo"` |
| `Boolean` | Verdadero/Falso | `true`, `false` |
| `Undefined` | Variable declarada sin valor | `let x;` |
| `Null` | Ausencia intencional de valor | `null` |

### Tipos de Referencia
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `Object` | Estructuras clave-valor | `{ nombre: "Tanjiro" }` |
| `Array` | Colecciones ordenadas | `["Perro", "Gato"]` |
| `Function` | Bloques de código reutilizables | `function suma() {}` |

---

## 🧩 Conceptos Fundamentales

### 📝 Expressions (Expresiones)
Una **expresión** es cualquier código que produce un valor. Pueden ser evaluadas y devuelven un resultado.

**Ejemplos:**
```javascript
5 + 3              // Expresión aritmética → 8
"Hola" + " Mundo"  // Expresión de cadena → "Hola Mundo"
nombre === "Tanjiro"  // Expresión booleana → true/false
personaje.edad     // Expresión de acceso a propiedad → 16
```

### 📋 Statements (Declaraciones/Sentencias)
Un **statement** es una instrucción que realiza una acción. No necesariamente produce un valor directamente.

**Ejemplos:**
```javascript
let nombre = "Tanjiro";     // Statement de declaración
if (edad > 18) { }          // Statement condicional
for (let i = 0; i < 5; i++) { }  // Statement de bucle
console.log("Hola");        // Statement de expresión
```

### 🔧 Declarations (Declaraciones)
Una **declaración** es un tipo específico de statement que introduce un nuevo identificador (variable, función, clase, etc.).

**Ejemplos:**
```javascript
let nombre = "Tanjiro";     // Declaración de variable
const PI = 3.14;            // Declaración de constante
function saludar() { }      // Declaración de función
class Personaje { }         // Declaración de clase
```

### 📊 Diferencia clave:
- **Expression**: Produce un valor → `2 + 2` devuelve `4`
- **Statement**: Ejecuta una acción → `let x = 5;` crea una variable
- **Declaration**: Tipo de statement que define algo nuevo → `function suma() {}`

---

## 🔗 Navegación Rápida

### Por Concepto
- **Variables**: [01-variables.js](01-tipos/01-variables.js) | [02-primitivos.js](01-tipos/02-primitivos.js) | [03-constantes.js](01-tipos/03-constantes.js)
- **Tipos de datos**: [04-tipado-dinamico.js](01-tipos/04-tipado-dinamico.js)
- **Objetos y Arrays**: [06-objetos.js](01-tipos/06-objetos.js) | [07-arrays.js](01-tipos/07-arrays.js)
- **Funciones**: [08-funciones.js](01-tipos/08-funciones.js) | [09-argumentos.js](01-tipos/09-argumentos.js)

---

## 🎓 Conceptos Clave Aprendidos

- ✨ Declaración de variables con `let` y `const`
- 🔄 Tipado dinámico en JavaScript
- 📦 Estructuras de datos: objetos y arrays
- 🔧 Creación y uso de funciones
- 📝 Buenas prácticas de nomenclatura y comentarios
- 🎯 Uso del objeto `arguments` en funciones
- 🔍 Operador `typeof` para verificar tipos
- 🏗️ Objetos: creación, acceso, modificación y eliminación de propiedades
- 📐 Diferencia entre expresiones, statements y declaraciones

---

## 📝 Notas

> **Proyecto en desarrollo activo.** Se añadirán nuevos conceptos y ejercicios progresivamente.

---

## 🎯 Objetivo

Dominar JavaScript desde los fundamentos hasta conceptos avanzados mediante práctica y ejemplos reales.

---

## 🚀 Cómo Usar Este Proyecto

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Revisa la consola del navegador (F12) para ver los resultados
4. Modifica el archivo fuente en `index.html` (línea 11) para probar diferentes ejemplos

---

## 📄 Licencia

Este es un proyecto educativo de código abierto.