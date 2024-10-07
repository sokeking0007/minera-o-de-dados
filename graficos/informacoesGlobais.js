const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"


async function vizualizarInformacaoGlobais(){

const res = await fetch(url)
const dados = await res.json()
console.log(dados);

const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)

const horas = parseInt(dados.tempo_medio)
const minutos = Math.round ((dados.tempo_medio - horas)* 100).toFixed(2)

const paragrafo = document.createElement("p")
paragrafo.classList.add ("graficos-container__texto")

paragrafo.innerHTML = `vocẽ sabia que o mundo tem 
<span> ${pessoasNoMundo} </span> de pessoas e aproxima
<span> ${pessoasConectadas} </span> estão conectadas
e passam em media <span> ${horas} </span> : <span> ${minutos} </span> horas conectadas`

console.log(paragrafo)

const container = document.getElementById("graficos-container")

container.appendChild(paragrafo)

}

vizualizarInformacaoGlobais();