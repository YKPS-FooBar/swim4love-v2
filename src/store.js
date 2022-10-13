import { createStore } from 'vuex';

import { postCredentials } from '@/assets/scripts/api'; 

export default createStore({
    state() {
        return {
            auth_key: ''
        };
    },
    getters: {
        isAuthed() {
            return false;
            // return jwtValid(state.auth_key);
        }
    },
    mutations: {
        setAuthKey(state, key) {
            state.auth_key = key;
        }
    },
    actions: {
        async login(ctx, { id, password }) {
            const resp = await postCredentials('login', id, password);
            if (!('error' in resp.data)) {
                ctx.commit('setAuthKey', resp.data.auth_key);
            }
            return await Promise.resolve(resp.data);
        },
        signOut(ctx) {
            ctx.commit('setAuthKey', '');
        }
    }
});
