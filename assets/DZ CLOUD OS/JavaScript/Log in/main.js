function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Devin Zygann' && password == 'StrengGeheim!') {
        window.location.href = './lockscreen.html';
    } else {
        alert('Passwort falsch!');
    }

}