import xButton from './index.vue';
xButton.install = app => {
    app.component(xButton.name,xButton)
}
export default xButton;