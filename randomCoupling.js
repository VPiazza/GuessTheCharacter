// HTML Elements
const categoria = document.getElementById("categoria");
const coupling = document.getElementById("coupling");
const button = document.getElementById("button");
const restartButton = document.getElementById("restartButton");

// Initialization functions
function initTopic() {
    const topic = ["Storia", "Film", "Cartoni", "Serie TV", "Disney","Animali del Cinema", "Mestieri", "Cibi"];
    return topic
}

function initPartecipants() {
    const partecipants = ["Valerio", "Giuliana", "Bernardo", "Gloria"];
    return partecipants

}

// Random Topic Generator
function topicChoice(topic) {
    let msg = "";
    if (topic.length > 0) {
        var cat = Math.floor(Math.random()*(topic.length));
        msg = "In questo turno l'argomento è " + topic[cat];
        topic.splice(cat,1);
    } else {
        msg = "Hai finito le categorie. Ricomincia dall'inizio!"
    }
    return msg;
}

// Random Couple Generator
function startPartSet(partcipants) {
    let chooser = [];
    let chosen = [];
    let P1 = [];
    let P2 = [];
    for (i = 0; i < partecipants.length; i+=1) {
        chooser.push(partecipants[i]);
        chosen.push(partecipants[i]);
    }
    return [chooser, chosen, P1, P2]
}

function randomCoupl(partecipants) {
    var couples = [];
    if (categoria.innerText != "Hai finito le categorie. Ricomincia dall'inizio!") {
        var chooser = [];
        var chosen = [];
        var P1 = [];
        var P2 = [];
        [chooser, chosen, P1, P2] = startPartSet(partecipants);
        while (chooser.length > 0) {
            var a = Math.floor(Math.random()*chooser.length);
            var b = Math.floor(Math.random()*chosen.length);
            if (chooser[a] != chosen[b]) {
                P1.push(chooser[a]);
                P2.push(chosen[b]);
                chooser.splice(a,1);
                chosen.splice(b,1);
            } else {
                for (i=0; i < P1.length; i +=1) {
                    chooser.push(P1[i]);
                    chosen.push(P2[i]);
                    P1.splice(i,1);
                    P2.splice(i,1);
                }
            }
        }
        for (i=0; i < P1.length; i+=1) { 
            const msg = P1[i] + " sceglie il personaggio per " + P2[i];
            couples.push(msg);
        }
    } else {
        const final_line = "Hai finito le categorie." 
        const final_line2 = "Ricomincia dall'inizio!"
        couples.push(final_line);
        couples.push(final_line2);
    }
    return couples
}

// Sub-events
function addCategory() {
    var category = topicChoice(topic);
    categoria.innerText = category
}

function displayCouplings() {
    var list = randomCoupl(partecipants);
    var msg = "\n";
    list.forEach(element => {
        msg += (element + "<br>");
    });
    coupling.innerHTML = msg
}

// Events
function defineTurn() {
    addCategory();
    displayCouplings(partecipants);
}

function restartGame() {
    [chooser, chosen, P1, P2] = startingSets(partecipants);
    topic = startingTopic();
}

// Initialization
const partecipants = initPartecipants();
const topic = initTopic();

// Listeners
button.addEventListener("click", defineTurn);
restartButton.addEventListener("click", restartGame)