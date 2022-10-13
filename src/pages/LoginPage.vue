<template>
    <div class="blue-backdrop position-absolute h-100">
        <div class="container h-100 d-flex flex-column">
            <div class="row justify-content-center my-auto">
                <div class="col-md-7 col-lg-6">
                    <div class="py-5 px-5 shadow card align-items-center">
                        <img src="@/assets/images/event-logo.jpg" alt="Event Logo">
                        <div class="my-3 title">Volunteer Login</div>
                        <form action="#" class="px-2" @submit.prevent="submit" novalidate>
                            <div class="my-2 py-2">
                                <OneLineInput
                                    type="username"
                                    name="username"
                                    placeholder="Student ID"
                                    :invalid="formError !== ''"
                                    required
                                ></OneLineInput>
                            </div>
                            <div class="my-2 py-2">
                                <OneLineInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    :invalid="formError !== ''"
                                    required
                                >
                                    <div class="invalid-feedback">
                                        {{ formError }}
                                    </div>
                                </OneLineInput>
                            </div>
                            <button type="submit" class="mt-2 mb-3 btn btn-primary">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';

import OneLineInput from '@/components/ui/OneLineInput.vue';

export default {
    name: 'LoginPage',
    components: {
        OneLineInput
    },
    data() {
        return {
            formError: ''
        };
    },
    methods: {
        submit(event) {
            this.formError = '';

            const id = event.target.elements.username.value;
            const password = event.target.elements.password.value;

            this.$store.dispatch('login', { id, password }).then(data => {
                if ('error' in data) {
                    if (data.error === 0) {
                        this.formError = data.msg;
                    }

                    return;
                }

                this.$router.push({ name: 'dashboard' });
            }).catch(e => {
                const msg = e.toString();
                swal("Error", msg, "error");
                this.formError = msg;
            });
        }
    }
};
</script>

<style scoped>
@import '@/assets/styles/blue-backdrop.css';

img {
    width: 5rem;
}

form {
    width: 100%;
}

button {
    height: 45px;
    width: 100%;
}

.title {
    font-size: 2rem;
    font-weight: 200;
}

.card {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
</style>
