let candidat = []
p = require('prompt-sync')();
let chois = 0

function ajoute_candidate(candidat) {
    let objet = {}
    console.log("pour ajouter un candidat entrer les info :")
    let cin = p("Cin : ")
    let existe = false
    for (let i = 0; i < candidat.length; i++) {
        if (cin == candidat[i].Cin) {
            existe = true
            break
        }
    }
    if (existe) {
        console.log("impossible ajouter un candidat avec le meme Cin")
    } else {
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

function corriger(table) {
    let corriger;
    console.log("Modifier le parti politique d'un candidat (choisi 1) : ")
    console.log("Modifier l'âge d'un candidat (choisi 2) :")
    corriger = Number(p("choisi : "))
    switch (corriger) {
        case 1:
            let cin_can
            let modification_de_partie
            cin_can = p("entrer votre cin :")
            modification_de_partie = p("modification de partie politique : ")
            for (let i = 0; i < table.length; i++) {
                if (table[i].Cin == cin_can) {
                    table[i].partiPolitique = modification_de_partie
                }
            }
            console.log("modification enregistrer .")
            break;
        case 2:
            let cin_can1
            let modification_de_age
            cin_can1 = p("entrer votre cin :")
            modification_de_age = Number(p("modification de age : "))
            for (let i = 0; i < table.length; i++) {
                if (table[i].Cin == cin_can1) {
                    table[i].age = modification_de_age
                }
            }
            console.log("modification enregistrer .")
            break;
        default:
            console.log("chois incorrect")
            break;
    }
}

function Supprimer(table) {
    let cin_supp
    console.log("pour supprimer votre dossier ")
    cin_supp = p("entrer votre Cin : ")
    for (let i = 0; i < table.length; i++) {
        if (cin_supp == table[i].Cin) {
            table.splice(i, i)
        }
    }
    console.log("suppression complete")
}

function Rechercher(table) {
    let name_can
    console.log("pour rechercher un candidat ")
    name_can = p("entrer le nom de candidat : ")
    for (let i = 0; i < table.length; i++) {
        if (name_can == table[i].name) {
            console.log("-------------")
            console.log("CIN : " + table[i].Cin)
            console.log("Name : " + table[i].name)
            console.log("Prenom : " + table[i].prenom)
            console.log("Age: " + table[i].age)
            console.log("Partie politique : " + table[i].partiPolitique)
            console.log("Nombre de vote : " + table[i].electeurs.length)
            console.log("")
            console.log("-------------")
            return
        } else {
            console.log("Candidat not trouvée")

        }
    }
}

function Statistique(table) {
    console.log("1 .Afficher le nombre total de candidats : ")
    console.log("2 .Afficher le nombre total de votes exprimés dans toute l'élection : ")
    console.log("3 .Afficher le Top 3 des candidats ayant le plus de votes : ")
    console.log("4 .Afficher le nombre de candidats par parti politique : ")
    let chois6 = Number(p("entrer votre chois : "))
    switch (chois6) {
        case 1:
            console.log("le nombre total de candidate : " + table.length)
            break;
        case 2:
            let somme = 0
            for (let i = 0; i < table.length; i++) {
                somme = somme + table[i].vote.length
            }
            console.log("le nombre total de toutes les votes est : " + somme)
            break;
        case 3:
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
            for (let i = 0; i <= 2; i++) {
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
        case 4:
            let partiPolitique4
            partiPolitique4 = p("entrer la partie politique pour voir les candidats : ")
            let count = 0
            for (let i = 0; i < table.length; i++) {
                if (partiPolitique4 === table[i].partiPolitique) {
                    count++
                    break;
                } else {
                    console.log("pas de resultats")
                }
            }
            console.log("resultat de recherche : " + count + " candidat dans " + partiPolitique4)
            break;


        default:
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
            if (chois1 > 1) {
                for (let i = chois1; i > 0; i--) {
                    ajoute_candidate(candidat)
                }
            } else {
                console.log("impossible")
            }

            break;
        case 3:
            console.clear
            trier(candidat)
            break;
        case 4:
            voter(candidat)
            console.table(candidat)
            break;
        case 5:
            corriger(candidat)
            console.table(candidat)
            break;
        case 6:
            Supprimer(candidat)
            break;
        case 7:
            Rechercher(candidat)
            break;
        case 8:
            Statistique(candidat)
            break;

        default:
            console.log("chois incorrect")
            break;
    }

} while (chois != 0);