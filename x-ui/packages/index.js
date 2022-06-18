import xButton from "./button/index.js";
import xInput from './input/index.js';
import xTextarea from "./textarea/index.js";
import xSpace from "./space/index.js";
import xSelect from "./select/index.js";
import xRadio from './radio/index.js';
import xTree from './tree/index.js';
import xIcon from './icon/index.js';

const components = [xButton,xInput,xTextarea,xSpace,xSelect,xRadio,xTree,xIcon]
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
    xRadio,
    xTree,
    xIcon 
}
export default XUI;