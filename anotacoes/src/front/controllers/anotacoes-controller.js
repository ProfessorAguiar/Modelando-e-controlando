// const nota1=new Anotacoes('Aula08','Trabalhando com MVC')
// console.log(nota1)
class AnotacoesController {
    constructor(anotacao) {
        let anotacoes = []
        this.anotacoes = anotacao
    }
    addAnotacao() {

    }
}
$('form').submit((e) => {
    const p = document.createElement('p')
    const titulo = $('#titulo').val()
    const desc = $('#descricaoTarefa').val()
    $('body').append(p)
    p.innerText=`Titulo: ${titulo}
            Anotação: ${desc}`
    // const nota1 = new AnotacoesController()
    // AnotacoesController.addAnotacao()
    e.preventDefault()
})