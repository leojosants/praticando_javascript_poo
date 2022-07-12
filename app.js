
import modificador from "./modificador.js";
import ingredientes from "./ingredientes.js";

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredienteCapitalizados = modificador.capitalizar(ingredientes, "nome");
let containerIngredientes = document.getElementById('container-ingredientes');

for (let ingrediente of ingredienteCapitalizados) {
    
    let textoHTML = 
    `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}" />
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>    
    `;

    containerIngredientes.innerHTML += textoHTML;

}

/**
 *  <div class="ingredientes">
        <img src="img/agriao.png" />
        <p class="nome-ingrediente">Agrião</p>
    </div>
 */