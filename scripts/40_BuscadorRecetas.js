/* Crear un buscador de recetas basado en ingredientes */

function buscadorRecetas() {
    // Base de datos simulada
    const recetas = [
        {
            nombre: "Ensalada César",
            ingredientes: ["lechuga", "pollo", "crutones", "queso parmesano", "salsa césar"],
            tipo: "comida"
        },
        {
            nombre: "Pasta Alfredo",
            ingredientes: ["pasta", "crema", "mantequilla", "ajo", "queso parmesano"],
            tipo: "comida"
        },
        {
            nombre: "Tacos de carne",
            ingredientes: ["tortillas", "carne molida", "cebolla", "cilantro", "limón"],
            tipo: "comida"
        },
        {
            nombre: "Brownie de chocolate",
            ingredientes: ["chocolate", "huevos", "mantequilla", "azúcar", "harina"],
            tipo: "postre"
        },
        {
            nombre: "Cheesecake de fresa",
            ingredientes: ["galletas", "queso crema", "fresas", "azúcar", "gelatina"],
            tipo: "postre"
        },
        {
            nombre: "Helado de vainilla",
            ingredientes: ["leche", "crema", "azúcar", "vainilla", "huevos"],
            tipo: "postre"
        },
        {
            nombre: "Smoothie de frutos rojos",
            ingredientes: ["fresas", "arándanos", "yogur", "miel", "hielo"],
            tipo: "bebida"
        },
        {
            nombre: "Limonada fresca",
            ingredientes: ["limones", "agua", "azúcar", "hielo", "menta"],
            tipo: "bebida"
        },
        {
            nombre: "Curry de garbanzos",
            ingredientes: ["garbanzos", "leche de coco", "curry", "tomate", "cebolla"],
            tipo: "comida"
        },
        {
            nombre: "Panqueques de plátano",
            ingredientes: ["plátano", "huevos", "avena", "canela", "miel"],
            tipo: "postre"
        },
        {
            nombre: "Papas a la francesa",
            ingredientes: ["papa", "aceite", "sal", "pimienta"],
            tipo: "comida"
        }
    ];

    const input = prompt("Ingresa tus ingredientes (separados por comas):").toLowerCase();
    if (!input) {
        console.log("No ingresaste ingredientes. ¡Intenta de nuevo!");
        return;
    }
    const ingredientesUsuario = input.split(',').map(item => item.trim());

    // Buscar recetas que coincidan
    const recetasCoincidentes = recetas.filter(receta => {
        return ingredientesUsuario.every(ingrediente => 
            receta.ingredientes.some(ing => ing.includes(ingrediente))
        );
    });

    // Mostrar resultados
    console.clear();
    if (recetasCoincidentes.length > 0) {
        console.log("Recetas encontradas:");
        recetasCoincidentes.forEach(receta => {
            console.log(`\n**${receta.nombre.toUpperCase()}** (${receta.tipo})`);
            console.log("Ingredientes: " + receta.ingredientes.join(", "));
        });
    } else {
        console.log("No encontré recetas con esos ingredientes\nPrueba con: huevos, pollo, chocolate, fresas, etc.");
    }
}

buscadorRecetas();