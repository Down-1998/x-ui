import xTree from './index.vue';
xTree.install = app => {
    app.component(xTree.name,xTree)
}
export default xTree;