// 1 - Mail
// Chiedi all'utente la sua email,

var user_email = prompt("Inserisci la tua email")
console.log(user_email);

// controlla che sia nella lista di chi può accedere,
var allowed_email = ["d.paul@outlook.it", "paw_lion@live.it", "classe_34@gmail.com", "evangelista.vince@gmail.it", "mimi@gmail.com"];

var allow = false;

for (var i = 0; i < allowed_email.length; i++) {
    if (allowed_email[i] === user_email) {
        allow = true;
    }
    console.log(i);
}

// stampa un messaggio appropriato sull'esito del controllo.

if (allow) {
    document.getElementById("valid").innerHTML = "La tua mail è in lista. Procediamo al gioco dei dadi!"
} else {
    document.getElementById("valid").innerHTML = "La tua mail non è in lista. Per consolazione ti faremo giocare al gioco dei dadi."

}
console.log(allow);

// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var player_number = Math.floor(Math.random() * 7);
console.log(player_number);

document.getElementById("your_number").innerHTML = "Il tuo numero &egrave; " + player_number;

var ai_number = Math.floor(Math.random() * 7);
console.log(player_number);

document.getElementById("ai_number").innerHTML = "Il numero del computer &egrave; " + ai_number;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (player_number > ai_number) {
    document.getElementById("winner").innerHTML = "Complimenti! hai vinto!";
} else if (player_number == ai_number) {
    document.getElementById("winner").innerHTML = "Un pareggio! incredbilie!";
} else {
    document.getElementById("winner").innerHTML = "Ci dispiace, hai perso!";

}