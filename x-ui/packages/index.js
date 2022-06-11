import xButton from "./button/index.js";
import xInput from './input/index.js'

const install = app => {
    app.use(xButton)
    app.use(xInput)
}
const XUI = {
    install
}
export {
    xButton,
    xInput 
}
export default XUI;