import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate, {createPersistedState} from 'pinia-plugin-persistedstate'
import {encryptStorage} from "./store/encryptStorage.ts";

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
    .mount('#app')
