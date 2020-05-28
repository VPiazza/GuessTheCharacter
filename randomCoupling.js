// HTML Elements
const categoria = document.getElementById("categoria");
const coupling = document.getElementById("coupling");
const button = document.getElementById("button");
const restartButton = document.getElementById("restartButton");
// const topicTextbox = document.getElementById("topicTextbox");    I want to add a topic textbox
// const topicButton = document.getElementById("topicButton");
// const topicList = document.getElementById("topicList");


// User Interface: Messages
const msgCatInit = "In questo turno la categoria è...";
const msgCouplInit = "... sceglie il personaggio per  ...";
const msgCatPlay = "In questo turno la categoria è ";
const msgCouplPlay = "\t\t sceglie il personaggio per \t\t";
const msgCatEnd = "Hai finito le categorie.";
const msgCouplEnd = "Premi il pulsante e ricomincia a giocare!";

// Data Collection
function addTopic() {
    const paragraph = document.createElement("p");
    paragraph.innerText = topicTextbox.value;
    topicList.appendChild(paragraph);
}

// Initialization functions
function initTopic() {
    // const topics = document.getElementsByClassName("topicList");     Need to initialize the list
    // let topic = [];
    // for (e in topics.item) {
    //     topic.push(e);
    // };
    const topic = ["Storia", "Mestieri", "Cartoni", "Disney"]
    categoria.innerText = msgCatInit;
    coupling.innerText = msgCouplInit;
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
        msg = msgCatPlay + topic[cat];
        topic.splice(cat,1);
    } else {
        msg = msgCatEnd;
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
    if (categoria.innerText != msgCatEnd) {
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
            const msg = P1[i] + msgCouplPlay + P2[i];
            couples.push(msg);
        }
    } else {
        couples.push(msgCatEnd);
        couples.push(msgCouplEnd);
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
    const topic = document.getElementsByClassName("topicList");
    addCategory();
    displayCouplings(partecipants);
}

function restartGame() {
    const restartTopic = initTopic();
    topic.splice(0, topic.length);
    restartTopic.forEach(e => {
        topic.push(e);
    });
    return topic
}


// Initialization
const partecipants = initPartecipants();
const topic = initTopic();

// Listeners
button.addEventListener("click", defineTurn);
restartButton.addEventListener("click", restartGame)
// topicButton.addEventListener("click", addTopic);