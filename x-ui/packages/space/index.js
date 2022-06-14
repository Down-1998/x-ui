import xSpace from './index.vue';
xSpace.install = app => {
    app.component(xSpace.name,xSpace)
}
export default xSpace;