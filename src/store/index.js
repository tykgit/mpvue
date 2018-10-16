// import Vue from 'vue'
// import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import * as getters from './getters'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state,
//     mutations,
//     getters
// })

import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        login
    }
})
// mpvue中这种写法报错
// export default () => {
//     return new Vuex.Store({
//         modules: {
//             login,
//         }
//     })
// }
