const menuJson = require('../../dataBase/menu.json')

module.exports = (req, res) => {
    id = req.params.id,
    menuEnc = menu.find((id) => menuJson.id === +(id))
    res.render('detalle', {menuEnc})
}