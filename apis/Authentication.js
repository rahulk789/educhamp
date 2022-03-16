import auth from '@react-native-firebase/auth';

export function createuserwithemail(){
    auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if(errorCode == 'auth/email-already-in-use'){
      alert('Email already in use');
  }
  else if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}

export function sendEmaillink(useremail){
    var actionCodeSettings = {
        // The URL to redirect to for sign-in completion.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        iOS: {
          bundleId: 'com.student_guide_app'
        },
        android: {
          packageName: "com.student_guide_app",
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true
      };
      auth().sendSignInLinkToEmail(useremail, actionCodeSettings)
          .then(function() {
            alert('Email send succesfully!')
          })
          .catch(function(error) {
            console.log(error)
          });
}

export function signinwithemail(){
    auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}

export function signinwithphone(){
    var applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container');
    auth().signInWithPhoneNumber(phoneNumber, applicationVerifier)
        .then(function(confirmationResult) {
          var verificationCode = window.prompt('Please enter the verification ' +
              'code that was sent to your mobile device.');
          return confirmationResult.confirm(verificationCode);
        })
        .catch(function(error) {
          // Handle Errors here.
          alert(error);
        });
}