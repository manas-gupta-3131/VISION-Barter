// Replace with your actual Google API Client ID
const CLIENT_ID = 'YOUR_CLIENT_ID';

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    // You can perform additional actions or redirect to another page here
}

function onFailure(error) {
    console.error('Error: ' + error);
}

function renderButton() {
    gapi.signin2.render('google-login-btn', {
        'scope': 'profile email',
        'width': 200,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}
