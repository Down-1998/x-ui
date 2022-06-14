import xButton from "./button/index.js";
import xInput from './input/index.js';
import xTextarea from "./textarea/index.js";
import xSpace from "./space/index.js";

const components = [xButton,xInput,xTextarea,xSpace]
const install = app => {
    components.forEach((item) =>{
        app.use(item)
    })
}
const XUI = {
    install
}
export {
    xButton,
    xInput,
    xTextarea,
    xSpace 
}
export default XUI;