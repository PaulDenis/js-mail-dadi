// 1 - Mail
// Chiedi all'utente la sua email,

var user_email = prompt("Inserisci la tua email")
console.log(user_email);

// controlla che sia nella lista di chi può accedere,
var allowed_email = ["d.paul@outlook.it", "paw_lion@live.it", "classe_34@gmail.com", "evangelista.vince@gmail.it", "mimi@gmail.com"];

var allow = false;

for (var i = 0; i <= allowed_email.length; i++) {
    if (allowed_email[i] === user_email) {
        allow = true;
    }
}

// stampa un messaggio appropriato sull'esito del controllo.

if (allow) {
    document.getElementById("valid").innerHTML = "La tua mail è valida"
} else {
    document.getElementById("valid").innerHTML = "La tua mail non è valida"

}
console.log(allow);