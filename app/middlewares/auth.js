const jwt = require('jsonwebtoken')

const authUser = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        try {
            const tokenData = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
            req.tokenData = tokenData
            next()
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({
            notice : 'token must be provided'
        })
    }
}

module.exports = authUser