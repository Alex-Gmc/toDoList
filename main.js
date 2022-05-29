var card = document.querySelector('.card');
var apagar;

card.innerHTML = localStorage.getItem('dados');

adicionarEventos();


var info = document.querySelector('.info');

function adicionarTarefa(){
    
    card.innerHTML += '<div class="tarefa"><div class="dv"><button class="btnCheck"></button><span>'+info.value+'</span></div><button class="btnRed"></button></div>';
    
    apagar = document.querySelectorAll('button');
    
    info.value = null;
    
    adicionarEventos();
    
    salvarDados();

}


function excluirTarefa(e){
    e.target.parentNode.remove();
    salvarDados();
}

function digitar(e){
    if(e.keyCode==13){
        adicionarTarefa();
    }
};

function riscar(e){
    e.target.classList.toggle("btnGreen");
    e.target.parentNode.children[1].classList.toggle("riscado");
    moverParaFinal(e);
    adicionarEventos();
    salvarDados();
}

function escolherFuncao(e){
    e.target.className === 'btnRed' ? excluirTarefa(e) : riscar(e);
}

info.addEventListener('keydown', digitar);


const salvarDados = () => localStorage.setItem('dados', card.innerHTML);

function adicionarEventos(){
    apagar = document.querySelectorAll('button');
    

    for(var i=0;i<apagar.length;i++){
        apagar[i].addEventListener('click',escolherFuncao)
    };
}


function moverParaFinal(e) {
    let tarefaChecada = e.target.parentNode.parentNode;
    if(e.target.classList.length==2){
     e.target.parentNode.parentNode.remove();
     card.innerHTML +='<div class="tarefa">'+tarefaChecada.innerHTML+'</div>';
    }else{
        e.target.parentNode.parentNode.remove();
        card.innerHTML ='<div class="tarefa">'+tarefaChecada.innerHTML+'</div>'+card.innerHTML;

    }
}