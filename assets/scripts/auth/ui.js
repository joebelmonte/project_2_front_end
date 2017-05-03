const store = require('../store.js')

const signUpSuccess = (data) => {
    console.log("In signUpSuccess")
  // $('#AccountCreationSuccess').modal('show')
}

const signUpFailure = (error) => {
  // console.error(error)
    console.log("In onSignFailure")
  // $('#AccountCreationFailure').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpFailure
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure,
  // postGameSuccess,
  // postGameFailure,
  // getUserGamesSuccess,
  // getUserGamesFailure,
  // userGamesPlayed,
  // autoSignInSuccess,
  // autoSignInFailure
}
