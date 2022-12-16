class Anotacoes{
    constructor(titulo,notas){
        try{
            if(typeof(titulo)==='string' && typeof(notas)==='string'){
            this.titulo=titulo
            this.notas=notas
            }else{
                throw 'Criação de notas - Dados inválidos'
            }
        }catch(erro){
            console.log(erro)    
        }
    }
}