import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate, {createPersistedState} from 'pinia-plugin-persistedstate'
import {encryptStorage} from "./store/encryptStorage.ts";
import router from "./router.ts";
import {useRootStore} from "./store/rootStore.ts";

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPersistedState({
    // storage: sessionStorage, // * localStorage is default
    storage: encryptStorage,
    beforeRestore: () => {
        console.log('before restore - global')
    }
}))

app
    .use(pinia)
    .use(router)

// * auth check each route
router.beforeEach((route) => {
    // ! https://pinia.vuejs.org/ssr/#Using-the-store-outside-of-setup-
    const rootStore = useRootStore(pinia) // ! mind pinia here
    console.log({rootStore})

    console.log({route})
    if (route.meta.authRequired && !rootStore.getIsLoggedIn) return '/login'
})

app
    .mount('#app')
