export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}

function geradorDeTagsDeIdentificacao(nomeAnimal){
    return nomeAnimal.toUpperCase()
}

function verificarSePodeSerAdotado(idadeAnimal, porteAnimal){
    return idadeAnimal === 1 && porteAnimal === 'M';
}

function calcularConsumoDeRacao(nomeAnimal, idadeAnimal, pesoAnimal){
    return pesoAnimal * 300;
}

function decidirTipoDeAtividadePorPorte(porteAnimal){
    switch(porteAnimal){
        case 'pequeno':
        case 'PEQUENO':
        case 'Pequeno':
            return 'brincar dentro de casa';
        default:
            return 'Atividade não definida';    
    }     
}

async function buscarDadoAsync(){
    return 'Pipoca'
}