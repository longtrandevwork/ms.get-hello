import { getHelloController } from "./get-hello.js";

export const rootController = (app) => {
    getHelloController(app)
}