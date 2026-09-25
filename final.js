let candidat = []
p = require('prompt-sync')();
let chois = 0

function ajoute_candidate(candidat) {
    let objet = {}
    console.log("pour ajouter un candidat entrer les info :")
    let cin = p("Cin : ")
    let name = p("Nom : ")
    let prenom = p("Prenom : ")
    let partiPolitique = p("La partie politique : ")
    let age = Number(p("Age : "))
    let electeurs = []
    objet.Cin = cin
    objet.name = name
    objet.prenom = prenom
    objet.partiPolitique = partiPolitique
    objet.age = age
    objet.electeurs = electeurs
    candidat.push(objet)
}

function voter(candidat) {
    console.table(candidat)
    let cincard;
    let perso;
    perso = p("entrer votre cin :")
    for (let i = 0; i < candidat.length; i++) {
        for (let j = 0; j < candidat[i].electeurs.length; j++) {
            if (perso == candidat[i].electeurs[j]) {
                console.log("vous ne pouvez pas voter")
                return
            }
        }
    }
    let bool = true
    cincard = p("entrer la cin de cardinal :")
    for (let i = 0; i < candidat.length; i++) {
        if (cincard == candidat[i].Cin) {
            candidat[i].electeurs.push(perso)
            console.log("votre vote enregistree")
            return
        }
        bool = false
    }
    if (bool == false) {
        console.log("chois incorrect")
    }

}

function trier(table) {
    console.log("pour afficher liste de candidat (de plus voter au moins) veuillez choisir 1 : ")
    console.log("pour afficher uniquement les candidats d'un parti politique spécifique veuillez choisir 2 : ")
    let chois3 = Number(p("votre chois : "))
    switch (chois3) {
        case 1:
            for (let i = 0; i < table.length - 1; i++) {
                for (let j = i + 1; j < table.length; j++) {
                    let max
                    if (table[i].electeurs.length < table[j].electeurs.length) {
                        max = table[i]
                        table[i] = table[j]
                        table[j] = max
                    }
                }
            }
            for (let i = 0; i < table.length; i++) {
                console.log(`#  CANDIDAT ${i+1}: `)
                console.log("CIN : " + table[i].Cin)
                console.log("Name : " + table[i].name)
                console.log("Prenom : " + table[i].prenom)
                console.log("Age: " + table[i].age)
                console.log("Partie politique : " + table[i].partiPolitique)
                console.log("Nombre de vote : " + table[i].electeurs.length)
                console.log("")
                console.log("-------------")

            }
            break;
        case 2:
            let partiPolitique3
            partiPolitique3 = p("entrer la partie politique pour voir les candidats : ")
            for (let i = 0; i < table.length; i++) {
                if (partiPolitique3 === table[i].partiPolitique) {
                    console.log(`#  CANDIDAT ${i+1}: `)
                    console.log("CIN : " + table[i].Cin)
                    console.log("Name : " + table[i].name)
                    console.log("Prenom : " + table[i].prenom)
                    console.log("Age: " + table[i].age)
                    console.log("Partie politique : " + table[i].partiPolitique)
                    console.log("Nombre de vote : " + table[i].electeurs.length)
                    console.log("")
                    console.log("-------------")
                }
            }
            break;
        default:
            console.log("chois incorrect")
            break;
    }
}


do {
    console.log("=================================")
    console.log("*******liste principal***********")
    console.log("=================================")
    console.log("")
    console.log("1. Ajouter un nouveau candidat :")
    console.log("2. Ajouter plusieurs candidats à la fois.")
    console.log("3. Afficher la liste des candidats :")
    console.log("4. Voter pour un candidat :")
    console.log("5. Modifier les informations d'un candidat :")
    console.log("6. Supprimer un candidat :")
    console.log("7. Rechercher des candidats :")
    console.log("8. Statistiques de l'élection :")
    console.log("0.quitter :")
    chois = Number(p("choisi un numero pour continue : "))
    switch (chois) {
        case 1:
            console.clear
            ajoute_candidate(candidat)
            break;
        case 2:
            console.clear
            let chois1
            chois1 = Number(p("Nombre de candida que vous voulez ajouter : "))
            for (let i = chois1; i > 0; i--) {
                ajoute_candidate(candidat)
            }

            break;
        case 3:
            console.clear
            trier(candidat)
            break;
        case 4:
            voter(candidat)
            console.table(candidat)


        default:
            break;
    }

} while (chois != 0);