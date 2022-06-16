import xButton from "./button/index.js";
import xInput from './input/index.js';
import xTextarea from "./textarea/index.js";
import xSpace from "./space/index.js";
import xSelect from "./select/index.js";
import xRadio from './radio/index.js';

const components = [xButton,xInput,xTextarea,xSpace,xSelect,xRadio]
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
    xSpace,
    xSelect,
    xRadio 
}
export default XUI;