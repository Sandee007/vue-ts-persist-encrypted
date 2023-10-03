import {defineStore} from "pinia";
import {computed, Ref, ref, toValue} from "vue";
import {useRouter} from "vue-router";

export const useRootStore = defineStore('rootStore', () => {
    const router = useRouter()

    const count: Ref<number> = ref(7)
    const token: Ref<string | null | object> = ref(null)

    const doubleCount = computed(() => toValue(count) * 2)
    const getText = computed(() => {
        return 'aaaaa'
    })
    const getIsLoggedIn = computed(() => !!toValue(token))


    function setToken() {
        token.value = {
            a: '123',
            b: 456
        }
        router.push('/')
    }


    return {
        count,
        token,
        doubleCount,
        getText,
        setToken,
        getIsLoggedIn,
    }
}, {
    persist: {
        // storage: sessionStorage
        // beforeRestore: (ctx) => {
        //     console.log(`about to restore '${ctx.store.$id}'`)
        // }
        afterRestore: (ctx) => {
            console.log('afterRestore', ctx.store.$state.token)
        }
    }
    // persist: true
})