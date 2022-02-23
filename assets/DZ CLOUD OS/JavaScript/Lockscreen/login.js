function loginpwd() {
    let password = document.getElementById('password').value;

    if (password == 'StrengGeheim!') {
        window.location.href = './welcome.html';
    } else {
        alert('Passwort falsch!');
    }

}