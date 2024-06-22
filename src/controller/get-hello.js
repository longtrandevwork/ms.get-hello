import { HELLO_LANGUAGE_MAPPING, HELLO_LANGUAGE } from '../constants/get-hello.js'
import axios from 'axios'


const getHello = async (req, res) => {
    const userId = req.user.id

    const response = await axios.get(`${process.env.AUTH_DOMAIN}/auth/user/${userId}`)
    const userLanguage = response.data.language

    res.status(200).send(HELLO_LANGUAGE[userLanguage])
}

const getLanguageList = (req, res) => {
    res.status(200).send(HELLO_LANGUAGE_MAPPING)
}

export const getHelloController = (app) => {
    app.get('/get-hello', getHello)
    app.get('/get-hello/get-list', getLanguageList)
}