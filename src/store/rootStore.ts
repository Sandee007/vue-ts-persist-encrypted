import {defineStore} from "pinia";
import {computed, Ref, ref, toValue} from "vue";

export const useRootStore = defineStore('rootStore', () => {
    const count: Ref<number> = ref(7)
    const token: Ref<string|null|object> = ref(null)

    const doubleCount = computed(() => toValue(count) * 2)
    const getText = computed(() => {
        return 'aaaaa'
    })

    function setToken(){
        token.value = {
            a: '123',
            b: 456
        }
    }


    return {
        count,
        token,
        doubleCount,
        getText,
        setToken
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