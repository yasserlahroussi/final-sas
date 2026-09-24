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
    let age = p("Age : ")
    let electeurs = []
    objet.Cin = cin
    objet.name = name
    objet.prenom = prenom
    objet.partiPolitique = partiPolitique
    objet.age = age
    objet.electeurs = electeurs
    candidat.push(objet)
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
            do {
                ajoute_candidate(candidat)
                console.log("ecrit 0 pour retour a la liste principal :")
                chois1 = p("ajouter un autre candida (ecrit 1) : ")
            } while (chois1 != 0);
            break;
        case 3:
            console.table(candidat);

        default:
            break;
    }

} while (chois != 0);