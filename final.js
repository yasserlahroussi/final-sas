const candidat = [{
        Cin: "AB154",
        name: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Widad",
        age: 40,
        electeurs: [],
    },
    {
        Cin: "FT624",
        name: "Taoussi",
        prenom: "Hanan",
        partiPolitique: "Widad",
        age: 32,
        electeurs: [],
    },
    {
        Cin: "WZ695",
        name: "Rachid",
        prenom: "tolla",
        partiPolitique: "Raja",
        age: 27,
        electeurs: [],
    },
    {
        Cin: "AZ584",
        name: "Nbark",
        prenom: "oulaarbi",
        partiPolitique: "Raja",
        age: 61,
        electeurs: [],
    },
    {
        Cin: "MA201",
        name: "Salhi",
        prenom: "Anas",
        partiPolitique: "PPS",
        age: 26,
        electeurs: ["AB154"],
    },
    {
        Cin: "PB645",
        name: "Et-taya",
        prenom: "Younes",
        partiPolitique: "YCD",
        age: 35,
        electeurs: ["PB645"],
    },
    {
        Cin: "UC125",
        name: "Ben lhaj",
        prenom: "Mohamed",
        partiPolitique: "PAM",
        age: 25,
        electeurs: ["UC125", "FT624", "AZ584"],
    }
]
p = require('prompt-sync')();
let chois = 0

function ajoute_candidate(candidat) {
    let objet = {}
    console.log("pour ajouter un candidat entrer les info :")
    let cin = p("Cin : ")
    let age = Number(p("Age : "))
    if (age < 18) {
        console.log("impossible")
        return
    }
    let existe = false
    for (let i = 0; i < candidat.length; i++) {
        if (cin == candidat[i].Cin) {
            existe = true
            break
        }
    }
    if (existe) {
        console.log("impossible ajouter un candidat (cin repeter)")
    } else {
        let name = p("Nom : ")
        let prenom = p("Prenom : ")
        let partiPolitique = p("La partie politique : ")

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

function voter(table) {
    afficherlalistedescandidatures(table)
    let cincard;
    let perso;
    perso = p("entrer votre cin :")
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].electeurs.length; j++) {
            if (perso.toLowerCase() == table[i].electeurs[j].toLowerCase()) {
                console.log("vous ne pouvez pas voter")
                return
            }
        }
    }
    let bool = true
    cincard = p("entrer la cin de candidat  :")
    for (let i = 0; i < table.length; i++) {
        if (cincard.toLowerCase() == table[i].Cin.toLowerCase()) {
            table[i].electeurs.push(perso)
            console.log("votre vote enregistree")
            return
        }
        bool = false
    }
    if (bool == false) {
        console.log("chois incorrect")
    }

}

function maxtomin(table) {
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
}

function flitredepartiepolitique(table) {
    let partiPolitique3
    partiPolitique3 = p("entrer la partie politique pour voir les candidats : ")
    for (let i = 0; i < table.length; i++) {
        if (partiPolitique3.toLowerCase() === table[i].partiPolitique.toLowerCase()) {
            console.log(`#  CANDIDAT : `)
            console.log("CIN : " + table[i].Cin)
            console.log("Name : " + table[i].name)
            console.log("Prenom : " + table[i].prenom)
            console.log("Age: " + table[i].age)
            console.log("Partie politique : " + table[i].partiPolitique)
            console.log("Nombre de vote : " + table[i].electeurs.length)
            console.log("_____________________________________________")
        } else {
            console.log("pas trouves pour changer ")
            return
        }
    }
}


function modificationdeparti(table) {
    let cin_can
    let modification_de_partie
    cin_can = p("entrer votre cin :")
    modification_de_partie = p("modification de partie politique : ")
    let trust = false
    for (let i = 0; i < table.length; i++) {
        if (table[i].Cin.toLowerCase() == cin_can.toLowerCase()) {
            table[i].partiPolitique = modification_de_partie
            table[i].electeurs = []
            trust = true
            break;
        }
    }
    if (trust == false) {
        console.log("imposible")
        return
    }
    console.log("modification enregistrer .")
}

function modificationage(table) {
    let cin_can1
    let modification_de_age
    cin_can1 = p("entrer votre cin :")
    modification_de_age = Number(p("modification de age : "))
    let trust = false
    for (let i = 0; i < table.length; i++) {
        if (table[i].Cin.toLowerCase() == cin_can1.toLowerCase()) {
            table[i].age = modification_de_age
            trust = true
            break
        }
        if (trust == false) {
            console.log("impossible")
            return
        }
    }
    console.log("modification enregistrer .")
}

function Supprimer(table) {
    let cin_supp
    console.log("pour supprimer votre dossier ")
    cin_supp = p("entrer votre Cin : ")
    let arrays = []
    let trust = false
    for (let i = 0; i < table.length; i++) {
        if (cin_supp !== table[i].Cin) {
            arrays.push(table[i])
        } else {
            trust = true
        }
    }
    if (trust == false) {
        console.log("impossible")
        return
    }

    table.length = 0
    for (let i = 0; i < arrays.length; i++) {
        table.push(arrays[i])
    }
    console.log("suppresion succes")
}

function Rechercher(table) {
    let name_can
    console.log("pour rechercher un candidat ")
    name_can = p("entrer le nom de candidat : ")
    for (let i = 0; i < table.length; i++) {
        if (name_can.toLowerCase() == table[i].name.toLowerCase()) {
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

        }
    }
    console.log("Candidat not trouvée")
}

function Statistique(table) {
    console.log("1 .Afficher le nombre total de candidats : ")
    console.log("2 .Afficher le nombre total de votes exprimés dans toute l'élection : ")
    console.log("3 .Afficher le Top 3 des candidats ayant le plus de votes : ")

    let chois6 = Number(p("entrer votre chois : "))
    switch (chois6) {
        case 1:
            console.log("le nombre total de candidate : " + table.length)
            break;
        case 2:
            let somme = 0
            for (let i = 0; i < table.length; i++) {
                somme = somme + table[i].electeurs.length
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
            for (let i = 0; i < table.length && i < 3; i++) {
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
        default:
            console.log("chois impossible")
            break;
    }
}

function ajouter(table) {
    console.log("choisi 1 pour ajouter un candidature : ")
    console.log("choisi 2 pour ajouter 2 a la fois : ")
    let chois66 = Number(p("entrer votre chois : "))
    switch (chois66) {
        case 1:
            console.clear
            ajoute_candidate(table)
            break;
        case 2:
            console.clear
            let chois1
            chois1 = Number(p("Nombre de candida que vous voulez ajouter : "))
            if (chois1 > 1) {
                for (let i = chois1; i > 0; i--) {
                    ajoute_candidate(table)
                }
            } else {
                console.log("impossible")
            }
        default:

            break;
    }
}

function afficherlalistedescandidatures(table) {
    console.log("_____________LISTE DES CANDIDATURES___________________")
    for (let i = 0; i < table.length; i++) {
        console.log(`# ${i+1}`)
        console.log("CIN : " + table[i].Cin)
        console.log("Nom complet  : " + table[i].name + " " + table[i].prenom)
        console.log("La Partie Politique : " + table[i].partiPolitique)
        console.log("age : " + table[i].age)
        console.log("nombre de vote : " + table[i].electeurs.length)
        console.log("______________________________________________________")
    }
}

do {
    console.log("=================================")
    console.log("__________liste principal________")
    console.log("=================================")
    console.log("")
    console.log("1. Ajouter un nouveau candidat :")
    console.log("2. afficher la lsite des candidat :")
    console.log("3. tri et filtre la liste des candidats : ")
    console.log("4. Voter pour un candidat :")
    console.log("5. Modifier les informations d'un candidat :")
    console.log("6. Supprimer un candidat :")
    console.log("7. Rechercher des candidats :")
    console.log("8. Statistiques de l'élection :")
    console.log("0.quitter :")
    chois = Number(p("choisi un numero pour continue : "))
    switch (chois) {
        case 1:
            console.clear()
            ajouter(candidat)
            console.clear()
            break;
        case 2:
            console.clear()
            afficherlalistedescandidatures(candidat)

            break;
        case 3:
            console.clear()
            console.log("pour tri la liste de candidat (de plus voter au moins) veuillez choisir 1 : ")
            console.log("pour flitrer la liste des candidates selon la partie poltique entrer 2 : ")
            let chois3 = Number(p("votre chois : "))
            switch (chois3) {
                case 1:
                    console.clear
                    maxtomin(candidat)
                    break;
                case 2:
                    console.clear
                    flitredepartiepolitique(candidat)
                    break;
                default:
                    console.log("chois incorrect")
                    break;
            }

            break;
        case 4:
            console.clear()
            voter(candidat)

            break;
        case 5:
            console.clear()
            let corriger;
            console.log("Modifier le parti politique d'un candidat (choisi 1) : ")
            console.log("Modifier l'âge d'un candidat (choisi 2) :")
            corriger = Number(p("choisi : "))
            switch (corriger) {
                case 1:
                    modificationdeparti(candidat)
                    break;
                case 2:
                    modificationage(candidat)
                    break;
                default:
                    console.log("chois incorrect")
            }

            break;
        case 6:
            console.clear()
            Supprimer(candidat)

            break;
        case 7:
            console.clear()
            Rechercher(candidat)

            break;
        case 8:
            console.clear()
            Statistique(candidat)

            break;
        case 0:
            console.clear()
            console.log("sortie")

            break;
        default:
            console.clear()
            console.log("chois incorrect")
            break;
    }

} while (chois != 0);