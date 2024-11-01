const userCtrl = require('../controllers/user')

module.exports = app => {
    app.post('/api/user/sign_in', userCtrl.signIn)
    app.post('/api/user/sign_up', userCtrl.signUp)
}