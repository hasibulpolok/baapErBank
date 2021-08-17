document.getElementById('login-submit').addEventListener('click', function () {
    // user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userEmail);
    console.log(userPassword);
    if (userEmail == 'imthechild@gmail.com' && userPassword == 'tklagbe123') {

        window.location.href = 'bankaccount.html';
    }
    else {
        console.log('tk deyni')
    }
})
