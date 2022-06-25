import xButton from "./button/index.js";
import xInput from './input/index.js';
import xTextarea from "./textarea/index.js";
import xSpace from "./space/index.js";
import xSelect from "./select/index.js";
import xRadio from './radio/index.js';
import xTree from './tree/index.js';
import xIcon from './icon/index.js';
import xMessage from "./message/index.js";
import xTabs from "./tabs/index.js";

const components = [xButton,xInput,xTextarea,xSpace,xSelect,xRadio,xTree,xIcon,xTabs]
const install = app => {
    components.forEach((item) =>{
        app.use(item)
    })
    app.config.globalProperties.$message = xMessage
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
    xIcon,
    xMessage,
    xTabs 
}
export default XUI;