import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            email: '',
            sex: '',
            birth: ''
        }
    },
    mutations: {
        login(state, { email, sex, birth }) {
            state.email = email
            state.sex = sex
            state.birth = birth
        },
        logout(state) {
            state.email = ''
            state.sex = ''
            state.birth = ''
            sessionStorage.clear()
        }
    },
    getters: {
        email: state => state.email,
        sex: state => state.sex,
        birth: state => state.birth
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
})

export default store