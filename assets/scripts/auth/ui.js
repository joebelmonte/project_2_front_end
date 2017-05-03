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


const signInSuccess = (data) => {
  store.user = data.user
  console.log("on signInSuccess")
  // $('#signOut').show()
  // $('#startGame').show()
  // $('#stats').show()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
  // $('#LogInSuccess').modal('show')
}

const signInFailure = (error) => {
  console.error(error)
  console.log("in signInFailure")
  // $('#LogFailure').modal('show')
}

const autoSignInSuccess = (data) => {
  store.user = data.user
  console.log("auto sign in success")
  // $('#signOut').show()
  // $('#startGame').show()
  // $('#stats').show()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
}

const autoSignInFailure = (error) => {
  // console.error(error)
  console.log("auto sign in failure")
  $('#LogFailure').modal('show')
}


const changePasswordSuccess = (data) => {
  console.log('change password success')
  // $('#passWordChangeSuccess').modal('show')
}

const changePasswordFailure = (data) => {
  console.log('change password failure')
  // $('#passWordChangeFailure').modal('show')
}

// const signOutSuccess = (data) => {
//   store.user = null
//   $('#sign-up').show()
//   $('#sign-in').show()
//   $('#signOut').hide()
//   $('#startGame').hide()
//   $('#stats').hide()
//   $('.userStats').hide()
//   $('#board').hide()
//   $('.status').hide()
//   $('#signOutSuccess').modal('show')
// }
//
// const signOutFailure = (data) => {
//   $('#sign-up').show()
//   $('#sign-in').show()
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  // signOutSuccess,
  // signOutFailure,
  // postGameSuccess,
  // postGameFailure,
  // getUserGamesSuccess,
  // getUserGamesFailure,
  // userGamesPlayed,
  autoSignInSuccess,
  autoSignInFailure
}
