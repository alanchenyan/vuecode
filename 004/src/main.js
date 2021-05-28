import App from "./App.js";

new Vue({

    components:{
        App,
    },

    // template: `<App />`

    // render(h){
    //     return h(App);
    // }

    render:(h)=>h(App),

}).$mount("#app");