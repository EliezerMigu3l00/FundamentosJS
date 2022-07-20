const clientes = [{
    nome: 'Eliezer Miguel',
    idade: 21,
    dataDeNascimento: "01/11/2000",
    cidadeNatal: 'Bezerros',
    cidadeResidencia: 'Garanhuns',
    cfp: '795.379.126-04',
    fone: ['87 99736-4476', '87 99645-7903', '87 9995-1322'],
    dependentes:[
        {
            nome: 'Sophia',
            idade: 12, 
            dataDeNascimento:'28/01/2010'},
        {
            nome: 'Jose',
            idade: 8,
            dataDeNascimento: '03/03/2012',
        }
    ]},
        {
        nome: 'Maria Joana',
        idade: 34, 
        dataDeNascimento: "28/01/1994",
        cidadeNatal: "Bonito",
        cidadeResidencia: 'Garanhuns',
        cpf: '187.345.836-23',
        fone: ['87 99845-3486', '87 9973-4272', '87 99632-2445'],
        dependentes: [
            {
                nome: 'Marcos jose',
                idade: 15,
                dataDeNascimento: '17/06/2008',},
            {
                nome: 'Joaquina Maria',
                idade: 8,
                dataDeNascimento: '01/11/2015',
            }
        ]
        }
    ] 
    

    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
    
    console.table(listaDependentes)
    