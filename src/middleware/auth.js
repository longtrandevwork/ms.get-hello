import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    const bearerToken = req.headers.authorization || req.headers.Authorization

    if (!bearerToken) {
        return res.status(401).send('Unauthorized')
    }

    const token = bearerToken.split(' ')[1]

    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized')
        }

        req.user = { id: decoded._id }

        next()
    })
}