// const categoria = document.getElementById("categoria");
// const coupling = document.getElementById("coupling");
// const button = document.getElementById("button");

function topicChoice(topic) {
    var cat = Math.floor(Math.random()*(topic.length));
    var msg = "In questo turno l'argomento è " + topic[cat];
    topic.splice(cat,1);
    return console.log(msg);
}

function startingSets(partecipants) {
    var chooser = [];
    var chosen = [];
    var P1 = [];
    var P2 = [];
    for (i = 0; i < partecipants.length; i+=1) {
        chooser.push(partecipants[i]);
        chosen.push(partecipants[i]);
    }
    return [chooser, chosen, P1, P2]
}

function randomCoupl(partecipants) {
    var chooser = [];
    var chosen = [];
    var P1 = [];
    var P2 = [];
    [chooser, chosen, P1, P2] = startingSets(partecipants);
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
        console.log(P1[i] + " sceglie il personaggio per " + P2[i]);
    }
}


function addCategory() {
    var category = topicChoice(topic);
    paragraph = document.createElement("p")
    paragraph.innerHTML = category
    categoria.appendChild(paragraph)
}

function displayCouplings() {
    var list = randomCoupl(partecipants);
    var msg = "\n";
    list.forEach(element => {
        msg += (element + "<br>");
    });
    coupling.innerHTML = msg
    console.log(msg)
}

function unpauseLoop() {

}

var partecipants = ["Valerio", "Giuliana", "Bernardo", "Gloria"];
var topic = ["Storia", "Film", "Cartoni", "Serie TV", "Disney","Animali del Cinema", "Mestieri", "Cibi"];
let turn = 1;

//  Running script //

while (topic.length > 0) {
    topicChoice(topic);
    randomCoupl(partecipants);
    console.log("           ");
    window.prompt("Premi ok per iniziare il prossimo round!");
}

