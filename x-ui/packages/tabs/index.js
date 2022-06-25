import xTabs from './index.vue';
import xTabPane from './pane.vue';
xTabs.install = app => {
    app.component(xTabs.name,xTabs)
    app.component(xTabPane.name,xTabPane)
}
export default xTabs;