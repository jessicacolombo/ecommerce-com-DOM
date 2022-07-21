const body = document.querySelector('body');
const nav = document.createElement('nav');
nav.classList.add('menu');
body.appendChild(nav);

const div_menu = document.createElement('div');
div_menu.classList.add('container');
nav.appendChild(div_menu);

const logo = document.createElement('img');
logo.src = './logo.svg';
logo.alt = 'logo Loja Geek';
const botoes = document.createElement('ul');
div_menu.appendChild(logo);
div_menu.appendChild(botoes);

const botaoProdutos = document.createElement('li');
botaoProdutos.id = 'botao-produtos';
const botaoContato = document.createElement('li');
botaoContato.id = 'botao-contato';
botoes.appendChild(botaoProdutos);
botoes.appendChild(botaoContato);

const linkProd = document.createElement('a');
linkProd.innerHTML = 'Produtos';
const linkCtt = document.createElement('a');
linkCtt.innerHTML = 'Contato';
botaoProdutos.appendChild(linkProd);
botaoContato.appendChild(linkCtt);

const main = document.createElement('main');
main.classList.add('container')
body.appendChild(main);

const sectionPaintings = document.createElement('section');
sectionPaintings.classList.add('secao-paintings');
main.appendChild(sectionPaintings);

const sectionActionFigures = document.createElement('section');
sectionActionFigures.classList.add('secao-action-figures')
main.appendChild(sectionActionFigures);

const tituloPaintings = document.createElement('h1');
tituloPaintings.innerHTML = 'Paintings';
sectionPaintings.appendChild(tituloPaintings);

const tituloActionFigures = document.createElement('h1');
tituloActionFigures.innerHTML= 'Action Figures';
sectionActionFigures.appendChild(tituloActionFigures);

const vitrinePaintings = document.createElement('ul');
sectionPaintings.appendChild(vitrinePaintings);

const vitrineActionFigures = document.createElement('ul');
sectionActionFigures.appendChild(vitrineActionFigures)

let actionFigures = [
    {
        nome: 'Figura de ação Walter White',
        img: './assets/img/actions/white.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Itachi',
        img: './assets/img/actions/itachi.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Hellboy',
        img: './assets/img/actions/hellboy.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Kakashi',
        img: './assets/img/actions/kakashi.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Tanjiro',
        img: './assets/img/actions/tanjiro.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Naruto',
        img: './assets/img/actions/naruto.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Madara',
        img: './assets/img/actions/madara.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Hu Tao',
        img: './assets/img/actions/animewoman.jpg',
        preco: 'R$99,99',
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Dragon Ball',
        img: './assets/img/actions/dragonballpersonagem.jpg',
        preco: 'R$99,99', 
        departamento: 'action-figures'
    },

    {
        nome: 'Figura de ação Star Wars',
        img: './assets/img/actions/starwarspersonagem.jpg',
        preco: 'R$99,99', 
        departamento: 'action-figures'
    }

];

let decorativePaintings = [
    {
        nome: 'Quadro decorativo Ellie',
        img: './assets/img/painting/ellie.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo The Last of Us',
        img: './assets/img/painting/the-last-of-us.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Peaky Blinders',
        img: './assets/img/painting/peaky-blinders.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Joel e Ellie',
        img: './assets/img/painting/joel-ellie.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Bubassauro',
        img: './assets/img/painting/bubassauro.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Naruto',
        img: './assets/img/painting/quadro-naruto.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Pikachu',
        img: './assets/img/painting/pikachu.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Clock',
        img: './assets/img/painting/clock.jpg',
        preco: 'R$99,99',
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Video-Game',
        img: './assets/img/painting/gamepad.jpg',
        preco: 'R$99,99', 
        departamento: 'decorative-paintings'
    },

    {
        nome: 'Quadro decorativo Star Wars', 
        img: './assets/img/painting/personagem.jpg',
        preco: 'R$99,99', 
        departamento: 'decorative-paintings'
    }

];

function createCards(elemento) {
    let tagLi = document.createElement('li');

    let name = elemento.nome;
    let tagName = document.createElement('p');
    tagName.innerHTML = name;
    
    let imagem = elemento.img;
    let tagImg = document.createElement('img');
    tagImg.classList.add('imagem-elementos');
    tagImg.src = imagem;
    tagImg.alt = name;

    let price = elemento.preco;
    let tagPrice = document.createElement('span');
    tagPrice.innerHTML = price;

    tagLi.append(tagImg, tagName, tagPrice);

    return tagLi;

}

function insertCardActionFigure(array) {
    for (let i = 0; i < array.length; i++) {
        let cardProduto = createCards(array[i]);

        vitrineActionFigures.appendChild(cardProduto);
    }
}

insertCardActionFigure(actionFigures);

function insertCardPaintings(array) {
    for (let i = 0; i < array.length; i++) {
        let cardProduto = createCards(array[i]);

        vitrinePaintings.appendChild(cardProduto);
    }
}

insertCardPaintings(decorativePaintings);


