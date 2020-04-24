var partecipants =["Valerio", "Giuliana", "Bernardo", "Gloria"];
var topic = ["Disney","Oggetti di Casa", "Mestieri"];

function randomCoupl(partecipants) {
    var chooser = [];
    var chosen = [];
    for (i = 0; i < partecipants.length; i+=1) {
        chooser.push(partecipants[i]);
        chosen.push(partecipants[i]);
    } 
    person1 = [];
    person2 = [];
    while (chooser.length > 0) {
        var a = Math.floor(Math.random()*chooser.length);
        var b = Math.floor(Math.random()*chosen.length);
        if (chooser[a] != chosen[b]) {
            person1.push(chooser[a]);
            person2.push(chosen[b]);
            chooser.splice (a,1);
            chosen.splice(b,1);
        } else {
            person1 = [];
            person2 = [];
            var chooser = [];
            var chosen = [];
            for (i = 0; i < partecipants.length; i+=1) {
                chooser.push(partecipants[i]);
                chosen.push(partecipants[i]);
            }
        }
    }
    for (i=0; i < person1.length; i+=1) { 
        console.log(person1[i] + " sceglie il personaggio per " + person2[i]);
    }
}


while (topic.length > 0) {
    var cat = Math.floor(Math.random()*(topic.length));
    console.log ("In questo turno l'argomento è " + topic[cat]);
    randomCoupl(partecipants);
    window.prompt("Premi ok per iniziare il prossimo round!");
    topic.splice(cat,1);
    
}  

