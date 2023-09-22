document.addEventListener("DOMContentLoaded", function(){

    var dadosSuperHeroi = {
        "nomeEsquadrao": "Esquadrao patrulha delta",
        "cidade": "Brasilia city",
        "formado": 2019,
        "baseSecreta": "Esgotão do Sig",
        "ativa": true,
        "membros":[
            {
                "nome": "Valhir",
                "idade": 1000,
                "identidadeSecreta":"A tempestade implacável",
                "poderes":["Raios, trovões, dilúvios, mordida"]
            },
            {
                "nome": "Roberto Cruz",
                "idade": 40,
                "identidadeSecreta":"Leão do deserto",
                "poderes":["Super força", "Agilidade", "Velocidade"]
            },

            {
                "nome": "Ruth Ortiz",
                "idade": 25,
                "identidadeSecreta": "Guerreira de Prata",
                "poderes":["Mestra de Espada", "Agilidade", "Magia"]
            }
        ]
            
    };
    //selecionar a lista de super-herois onde a gente deseja inserir os membros
    var listaSuperHerois = document.getElementById("superheroes-list")
    
    //iteração sobre os membros da equipe criando os elementos de lista para cada um.
    dadosSuperHeroi.membros.forEach(function(membro){
        var li = document.createElement("li")
        li.className = "list-group-item"
        li.innerHTML = `<strong>${membro.nome}</strong> (idade: ${membro.idade}), Identidade Secreta: ${membro.identidadeSecreta}<br>
        Poderes: ${membro.poderes.join(", ")}`
        listaSuperHerois.appendChild(li)
    })
})