const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onSignUp = function (event) {
  console.log("In onSignUp")
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then(() => {
    //   api.signInAuto(data)
    //     .then(ui.autoSignInSuccess)
    //     .catch(ui.autoSignInFailure)
    // })
    .catch(ui.signUpFailure)
}


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
