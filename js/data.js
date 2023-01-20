const diaAtual = document.querySelector('.dataAtual')
const diasAnteriores = document.querySelector('.dataAnterior')
let dataEntrada, dataSaida

diaAtual.addEventListener('change', () => {
    dataEntrada = new Date(diaAtual.value).getTime()
})

diasAnteriores.addEventListener('change', () => {
    dataSaida = new Date(diasAnteriores.value).getTime()
    valorData()
})

function valorData() {
    const somadias = (dataSaida - dataEntrada)
    const totalDias = Math.abs(Math.ceil(somadias / (1000 * 3600 * 24)))
    document.querySelector('.mostrarDias span').innerHTML = totalDias
}
