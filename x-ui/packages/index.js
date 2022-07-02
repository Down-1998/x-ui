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
import xConfirm from "./confirm/index";
import xLoading from "./loading/index";

const components = [xButton,xInput,xTextarea,xSpace,xSelect,xRadio,xTree,xIcon,xTabs]
const install = app => {
    components.forEach((item) =>{
        app.use(item)
    })
    app.config.globalProperties.$message = xMessage
    app.config.globalProperties.$Confirm = xConfirm
    app.config.globalProperties.$Loading = xLoading
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
    xTabs,
    xConfirm,
    xLoading 
}
export default XUI;