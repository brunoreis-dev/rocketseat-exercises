// print address atributes exercise

var endereco = {
  rua: "Rua dos pinheiros", 
  numero: 1293,
  bairro: "Centro", 
  cidade: "São Paulo",
  uf: "SP"
};

function showInfo() {
  const {rua, numero, bairro, cidade, uf} = endereco
  console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com no ${numero}.`);
}

showInfo();


// print only pair numbers exercise

function pares(x, y) {
  for(var i = x; i <= y; i++) {
    if(i%2 === 0) {
      console.log(i);
    }
  }
}

pares(32, 321);



// Have Habilites exercise

function temHabilidade(skills) {
  console.log(skills)
  const skill = skills.indexOf("Javascript")
  const result = skill !== -1 ? true : false
  console.log(result)
};

var skills = ["Javascript", "ReactJS", "React Native"]; 

temHabilidade(skills);



// exp time exercise

function experiencia(anos) {
  if(anos >= 0 && anos <= 1) {
    console.log('Iniciante');
  } else if(anos > 1 && anos <= 3) {
    console.log('Intermediário');
  } else if(anos > 3 && anos < 7) {
    console.log('Avançado');
  } else if(anos >= 7) {
    console.log('Jedi Master');
  }
};

var anosEstudo = 7; 

experiencia(anosEstudo);


// print users atributes exercise

var usuarios = [ 
  {
    nome: "Bruno",
    habilidades: ["Javascript", "ReactJS", "Css"],
    sex: "O"
  },
  {
  nome: "Camila",
  habilidades: ["Investimentos", "Administração", "Confeitaria"],
  sex: "A"
}];

for (let user of usuarios) {
  console.log(`${user.sex} ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`);
};



// Add new Square exercise

var contentSquares = document.querySelector('.box-square');
var button = document.querySelector('.new-square');
var boxSquares = document.createElement('div');
boxSquares.style.display = 'flex';
boxSquares.style.flexWrap = 'wrap';
contentSquares.appendChild(boxSquares);

function getRandomColor() {
  var letters = "0123456789ABCDEF"; 
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; 
  };

  return color;
};

var newColor = getRandomColor();

button.addEventListener('click', function() {
  var squareEl = document.createElement('div');
  squareEl.style.background = 'red';
  squareEl.style.width = '100px';
  squareEl.style.height = '100px';
  squareEl.style.margin = '5px 10px';
  boxSquares.appendChild(squareEl);

  squareEl.addEventListener('mouseenter', function() {
    squareEl.style.background = newColor;

    getRandomColor();
  });

  squareEl.addEventListener('mouseover', function() {
    newColor = getRandomColor();
  });
});



// Add name in list exercise

var nomes = ["Bruno", "Camila", "Steve"];
var boxNames = document.querySelector('.box-names');
var inputName = document.querySelector('input[name="nome"]');
var containerListEl = document.createElement('ul');
boxNames.appendChild(containerListEl);

function renderNames() {
  containerListEl.innerHTML = '';

  for (let names of nomes) {
    var listEl = document.createElement('li')
    containerListEl.appendChild(listEl)
    const textNames = document.createTextNode(names)
    listEl.appendChild(textNames)
  };
};

renderNames();

function Adicionar() {
  const newName = inputName.value;

  if(newName !== '') {
    nomes.push(newName)
  }

  inputName.value = '';

  renderNames();
};



// promise age return exercise

function checaIdade(idade) {
  return new Promise(function(resolve, reject) {

    setTimeout(function() {
      if(idade >= 18) {
        resolve();
      } else if (idade < 18) {
        reject();
      } else {
        console.log('idade inválida');
      }
    }, 2000) 
  })
};

checaIdade(18) 
  .then(function() {
    console.log("Maior que 18"); 
  })
  .catch(function() { 
    console.log("Menor que 18");
  });



// Api github add new user exercise

var userInput = document.querySelector('input[name="user"]');
var usersBox = document.querySelector('.users');

function AddUser() {
  if(userInput.value != '') {
    var listEl = document.createElement('ul');
    var itemEl = document.createElement('li');
    usersBox.appendChild(listEl);
    listEl.appendChild(itemEl);

    function setLoading(loading = true) {
      if(loading === true) {
        let loadingEl = document.createElement('span');
        loadingEl.appendChild(document.createTextNode('Carregando...'));
        loadingEl.setAttribute('id', 'lodaing');
        itemEl.appendChild(loadingEl);
      } else {
        document.querySelector('#lodaing').remove();
      }
    };

    setLoading();

    axios.get(`https://api.github.com/users/${userInput.value}`)
      .then(function(response) {
        if(!response.data.name) {
          itemEl.appendChild(document.createTextNode('Sem nome'));
        } else {
          itemEl.appendChild(document.createTextNode(response.data.name));
        }

        setLoading(false);
      })
      .catch(function(error) {
        console.warn(error);
        itemEl.appendChild(document.createTextNode('Usúario não encontrado'));

        setLoading(false);
      }); 
  };

  userInput.value = '';
};


