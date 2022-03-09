const cliente = {
    nome: 'Eliezer Miguel',
    idade: 21,
    dataDeNascimento: "01/11/2000",
    cidadeNatal: 'Bezerros',
    cidadeResidencia: 'Garanhuns',
    cfp: '795.379.126.04',
    fone: ['87 99736-4476', '87 99645-7903', '87 9995-1322'],
    dependentes:[
        {
            nome: 'Sophia',
            idade: '12', 
            dataDeNascimento:'28/01/2010'},
        {
            nome: 'Jose',
            idade: 8,
            dataDeNascimento: '03/03/2012'
        }
    ],
    saldo: 100, 
    depositar:function(valor){
        this.saldo += valor
    }
}

function ofertaSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log (`Oferta de seguro total de vida para ${obj.nome}`)
    }
}

ofertaSeguro(cliente)
