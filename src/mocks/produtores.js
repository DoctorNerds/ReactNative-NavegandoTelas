import matrizKIDS from '../assets/produtores/matrizKIDS.png';
import matrizCast from '../assets/produtores/matrizCast.png';
import matriz4YOU from '../assets/produtores/matriz4YOU.png';

import futuro from '../assets/verduras/linguagemFUTURO.png';
import arduino from '../assets/verduras/Arduino.png';
import matrizCaster from '../assets/verduras/matrizCaster.png';
import matrizClub from '../assets/verduras/matrizClub.png';
import apps from '../assets/verduras/Apps.png';
import lowcode from '../assets/verduras/LowCode.png';


const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  lista: [
    {
      nome: "MatrizKIDS",
      imagem: matrizKIDS,
      alunos: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      produtos: [
        {
          detalhes: {
            nome: "A Linguagem do Futuro",
            descricao: "Crianças a partir de 6 anos de idade vão aprender a criar jogo e programar com o Scratch.",
            preco: "R$ 349,90/ano",
            imagem: futuro
          },
        },
        {
          detalhes: {
            nome: "Scratch com Arduíno",
            descricao: "Crianças a partir de 6 anos de idade vão aprender a implementar seus algoritmos do Scratch na vida real com Arduíno.",
            preco: "R$ 299,90/ano",

            imagem: arduino
          },
        }
      ]
    },
    {
      nome: "MatrizCast",
      imagem: matrizCast,
      alunos: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      produtos: [
        {
          detalhes: {
            nome: "MatrizCaster",
            descricao: "Acesso a epsódios exclusivos com especialistas e profissionais toda semana, além de participar poder enviar perguntas que serão respondidas pelos convidados.",
            preco: "R$ 10,00/mês",

            imagem: matrizCaster
          },
        },
        {
          detalhes: {
            nome: "MatrizCast Club",
            descricao: "Uma mentoria de 3 meses para jovens que desejam se preparar para o mercado de trabalho com encontros digitais semanais.",
            preco: "R$ 600,00",

            imagem: matrizClub
          },
        }
      ]
    },
    {
      nome: "Matriz4YOU",
      imagem: matriz4YOU,
      alunos: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      produtos: [
        {
          detalhes: {
            nome: "Alfabetização Digital I",
            descricao: "Vamos te ensinar a utilizar os principais serviços na web e mobile, além dos principais aplicativos para facilitar a sua vida",
            preco: "R$ 99,00/ano",

            imagem: apps
          },
        },
        {
          detalhes: {
            nome: "Alfabetização Digital II",
            descricao: "Vamos te ensinar as ferramentas low code que estão transformando o mercado de trabalho e automatizando muitas tarefas.",
            preco: "R$ 99,00/ano",

            imagem: lowcode
          },
        }
      ]
    }      
  ]
};

export default produtores;
