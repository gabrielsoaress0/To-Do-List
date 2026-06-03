let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
     let valorInput = input.value;

     if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem =`<div id="${contador}" class="item">
            <div onclick="marcar(${contador})" class="item-icone">
                <span id="icone_${contador}" class="material-symbols-outlined">circle</span>
            </div>
            <div onclick="marcar(${contador})"  class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">Excluir</button>
            </div>
        </div>`;

        // Adiciona a nova tarefa no main
        main.innerHTML += novoItem;

        // Limpa o campo de input
        input.value = "";
        input.focus();
     }
}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");

    if(classe === "item"){
        item.classList.add("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.innerHTML = "check_circle";

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.innerHTML = "circle";

    }
}

// Teclar o Enter para adicionar a tarefa
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
    }
})