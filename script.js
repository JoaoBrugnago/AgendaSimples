// Seleções
const botaoSubmit = document.querySelector('#submit');
const botaoAlterar = document.querySelector('#change');
const botaoCancelar = document.querySelector('#cancel');
const agendaTarefas = document.querySelector('.agenda-tarefas');
const agendaBox = document.querySelectorAll('.agenda-box');

// Funções
function criarTarefa(texto) {
  const divPrincipal = document.createElement('div');
  divPrincipal.classList.add('agenda-lista');

  const h3 = document.createElement('h3');
  h3.innerText = texto;
  divPrincipal.appendChild(h3);

  const divSecundaria = document.createElement('div')
  divSecundaria.classList.add('agenda-opcoes')

  const btnFinalizar = document.createElement('button')
  btnFinalizar.id = 'finalizar'
  btnFinalizar.innerText = 'Finalizar'
  divSecundaria.appendChild(btnFinalizar)

  const btnAlterar = document.createElement('button')
  btnAlterar.id = 'alterar'
  btnAlterar.innerText = 'Alterar'
  divSecundaria.appendChild(btnAlterar)

  const btnExcluir = document.createElement('button')
  btnExcluir.id = 'excluir'
  btnExcluir.innerText = 'Excluir'
  divSecundaria.appendChild(btnExcluir)

  divPrincipal.appendChild(divSecundaria);
  agendaTarefas.appendChild(divPrincipal);
  const tarefaSubmit = document.querySelector('#tarefa-submit');
  tarefaSubmit.value = ''
  tarefaSubmit.focus()
}

function alterarTarefa() {
  agendaBox.forEach(item => {
    item.classList.toggle('esconder')
  })
}

function alterarAgenda(texto) {
  const tarefaChance = document.querySelector('#tarefa-change');
  tarefaChance.value = texto;
  botaoAlterar.addEventListener('click', (e) => {
    e.preventDefault();
    if(tarefaChance.value !== texto) {
      const tarefas = document.querySelectorAll('.agenda-lista')
      tarefas.forEach(item => {
        if (item.querySelector('h3').innerText === texto) {
          item.querySelector('h3').innerText = tarefaChance.value
        }
      })
    }
  })
}

// Eventos
botaoSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const tarefaSubmit = document.querySelector('#tarefa-submit');
  const texto = tarefaSubmit.value;
  if(texto) {
    criarTarefa(texto);
  }
})

document.addEventListener('click', (e) => {
  e.preventDefault();
  const elemento = e.target;
  const elementoVo = elemento.closest('div').parentNode;
  const titulo = elementoVo.querySelector('h3').innerText;

  if (elemento.id === 'finalizar') {
    elementoVo.classList.toggle('realizado');
  };
  if (elemento.id === 'alterar') {
    alterarTarefa();
    alterarAgenda(titulo);
  };
  if (elemento.id === 'excluir') {
    elementoVo.remove();
  };
});

botaoCancelar.addEventListener('click', alterarTarefa);