document.querySelector('h1').innerHTML = 'Quiz História';
const quiz = document.querySelector('#quiz');
const end = document.querySelector('#end');
const acertos = document.querySelector('#acertos');
const result = document.querySelector('#result');
const op = document.querySelectorAll('.op');
const button = document.querySelector('#next');
const h2 = document.querySelector('h2');
const voltaInicio = document.querySelector('#volta');
let nquestao = 1;
let acerto = 0;

const arr = [
    {
        pergunta: 'Qual doença acabou com o feudalismo?',
        respostas: ["Cólera", "Peste Negra", "Febre Amarela", "Covid-19"],
        correta: 1,
    },
    
    
    {
        pergunta: 'Em que país nasceu Adolf Hitler?',
        respostas: ["França", "Alemanha", "Suíça", "Áustria"],
        correta: 3,
    },
    
    {
        pergunta: 'Qual foi a cidade romana soterrada após a erupção do Monte Vesúvio?',
        respostas: ["Pompéia", "Bastília", "Constantinopla", "Krakatoa"],
        correta: 0,
    },
    
    {
        pergunta: 'Em que ano o Brasil foi descoberto?',
        respostas: [1520, 1500, 1800, 2002],
        correta: 1,
    },
];

arr.forEach((e, i) => {
  const pg = arr[0];
  const quest = pg.pergunta;
  h2.innerHTML = quest;
  const resp = pg.respostas[i];
  op[i].innerHTML = `<div id="resp"> ${resp} </div>`;

  op.forEach((op, i) => op.addEventListener('click', () => {
     if(i==pg.correta) {
        op.classList.add('clickedgreen');
            acerto = 1;
            acertos.innerHTML = `${acerto} acertos.`;
     }else{
        op.classList.add('clickedred');
        acerto = 0;
     }
  }));
});

button.addEventListener('click', () => {
nquestao++;
result.innerHTML = `Questão ${nquestao} de 4`;
if(nquestao==2) {
    arr.forEach((e, i) => {
        const pg = arr[1];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;

        op.forEach((op, i) => {
        op.classList.remove('clickedgreen');
        op.classList.remove('clickedred');
        
        op.addEventListener('click', () => {
            if(i===pg.correta) {
                op.classList.remove('clickedred');
                op.classList.add("clickedgreen");
                if(acerto===0) {
                    acerto = 1;
                    acertos.innerHTML = `${acerto} acertos.`;
                 }else if(acerto===1) {
                    acerto = 2;
                    acertos.innerHTML = `${acerto} acertos.`;
                 }
            }else{
            op.classList.add('clickedred');
            }
        });
        
        });
      });
}else if(nquestao==3) {
    arr.forEach((e, i) => {
        const pg = arr[2];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
      
        op.forEach((op, i) => {
            op.classList.remove('clickedgreen');
            op.classList.remove('clickedred');
            
            op.addEventListener('click', () => {
                if(i==pg.correta) {
                    op.classList.remove('clickedred');
                    op.classList.add('clickedgreen');
                    if(acerto===0) {
                        acerto = 1;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===1) {
                        acerto = 2;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===2) {
                        acerto = 3;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }
                }else{
                op.classList.add('clickedred');
                }
            });
            });
      });
}else if(nquestao==4) {
    arr.forEach((e, i) => {
        button.innerHTML = 'Terminar';
        const pg = arr[3];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
      
        op.forEach((op, i) => {
            op.classList.remove('clickedgreen');
            op.classList.remove('clickedred');
    
            op.addEventListener('click', () => {
                if(i==pg.correta) {
                    op.classList.remove('clickedred');
                    op.classList.add('clickedgreen');
                    if(acerto===0) {
                        acerto = 1;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===1) {
                        acerto = 2;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===2) {
                        acerto = 3;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===3) {
                        acerto = 4;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }
                }else{
                op.classList.add('clickedred');
                }
            });
            });
      });
}
if(nquestao==5) {
    quiz.classList.add('hidden');
    end.style = `display: flex;`
    document.querySelector('h3').innerHTML = `VOCÊ ACERTOU ${acerto}/4 PERGUNTAS.`;
    document.querySelector('h4').innerHTML = 'Obrigado pela participação :)';
}
});


acertos.innerHTML = `${acerto} acertos.`
result.innerHTML = `Questão ${nquestao} de 4`;

voltaInicio.addEventListener('click', () => {
    window.location.href = "file:///C:/Users/User/Documents/aqui/site-pw/inicial.html";
});