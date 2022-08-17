function calcularMedia(notas) {
  let soma = 0
  for (c = 0; c < notas.length; c++) {
    soma += notas[c]
  }

  media = soma / notas.length

  return media
}

let media // escopo global

function aprovacao(notas) {
  let media = calcularMedia(notas) // escopo da função

  let condicao = media >= 8 ? 'aprovado' : 'reprovado'

  return 'Média: ' + media + ' - Resultado: ' + condicao
}

// Função Recursivas

function contagemRegressiva(numero) {
  console.log(numero)

  let proximoNumero = numero - 1

  if (proximoNumero > 0) contagemRegressiva(proximoNumero)
}

// contagemRegressiva(50);

/*
 * Formulário envio de dados para cálculo da média
 */
const formulario1 = document.getElementById('formulario-01')

if (formulario1)
  formulario1.addEventListener('submit', function (evento) {
    evento.preventDefault()
    evento.stopPropagation()

    if (this.getAttribute('class').match(/erro/)) {
      return false
    }

    let dados = new FormData(this)

    let notas = []

    for (let key of dados.keys()) {
      let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0 // é um número

      if (!isNaN(numero)) {
        notas.push(numero)
      }
    }

    console.log(notas)

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto
  })

function validaCampo(elemento) {
  if (elemento.value.length < 2) {
    document.querySelector('.mensagem').innerHTML =
      'Verifique tamanho do nome ou cidade '
    this.classList.add('erro')
    this.parentNode.classList.add('erro')
    return false
  } else {
    document.querySelector('.mensagem').innerHTML = ''
    elemento.classList.remove('erro')
    elemento.parentNode.classList.remove('erro')
    return true
  }
}

function validaCampoNumerico(elemento) {
  let numero = elemento.value

  console.log(numero)
  if (
    numero != '' &&
    numero.match(/[0-9]*/) &&
    numero.length >= 0 &&
    numero.length <= 10
  ) {
    document.querySelector('.mensagem').innerHTML = ''
    elemento.classList.remove('erro')
    elemento.parentNode.classList.remove('erro')
    return true
  } else {
    document.querySelector('.mensagem').innerHTML =
      'verifique se o numero esta no formato ex: 991534632'
    elemento.classList.add('erro')
    elemento.parentNode.classList.add('erro')
    return false
  }
}

function validaEmail(elemento) {
  const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i
  if (elemento.value.match(emailValido)) {
    document.querySelector('.mensagem').innerHTML = ''
    elemento.classList.remove('erro')
    elemento.parentNode.classList.remove('erro')
    return true
  } else {
    document.querySelector('.mensagem').innerHTML =
      'Formato do email deve ser email@example.com; '
    elemento.classList.add('erro')
    elemento.parentNode.classList.add('erro')
    return false
  }
}

function validaUF(elemento) {
  const UFvalido = /^[a-zA-Z]/i
  if (elemento.value.match(UFvalido) && elemento.value.length == 2) {
    document.querySelector('.mensagem').innerHTML = ''
    elemento.classList.remove('erro')
    elemento.parentNode.classList.remove('erro')
    return true
  } else {
    document.querySelector('.mensagem').innerHTML = 'Exemplo do campo UF: AM'
    elemento.classList.add('erro')
    elemento.parentNode.classList.add('erro')
    return false
  }
}

const formulario = document.getElementById('formulario-02')

let nome = document.querySelector('.nome')
let cidade = document.querySelector('.cidade')
let telefone = document.querySelector('.telefone')
let cep = document.querySelector('.numerico')
let email = document.querySelector('.email')
let uf = document.querySelector('.uf')

if (formulario)
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    evento.stopPropagation()

    if (
      nome.value.length == 0 ||
      cidade.value.length == 0 ||
      telefone.value.length == 0 ||
      cep.value.length == 0 ||
      email.value.length == 0
    )
      alert('Preencha todos os campos')
    else if (
      validaCampo(nome) &&
      validaCampo(cidade) &&
      validaCampoNumerico(telefone) &&
      validaUF(uf) &&
      validaCampoNumerico(cep) &&
      validaEmail(email)
    ) {
      formulario.reset()
      alert('Dados enviados com sucesso')
    }
  })

/*
let camposObrigatorios = document.querySelectorAll('input.obrigatorio')
let camposNumericos = document.querySelectorAll('input.numero')
let camposEmail = document.querySelectorAll('input.email')

let campoUF = document.querySelectorAll('input.uf')
console.log(camposEmail)
for (let emFoco of camposObrigatorios) {
  validaCampo(emFoco)
}

for (let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco)
}

for (let emFoco of camposEmail) {
  validaEmail(emFoco)
}

for (let emFoco of campoUF) {
  validaUF(emFoco)
}*/
