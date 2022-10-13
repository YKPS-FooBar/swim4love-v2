<template>
    <div class="form-floating">
        <input
            :type="type"
            class="form-control"
            :class="{ 'is-invalid': invalid }"
            :id="name"
            :placeholder="placeholder"
        >
        <label :for="name">{{ placeholder }}</label>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'OneLineInput',
    props: {
        name: String,
        placeholder: String,
        type: String,
        invalid: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
input {
    font-weight: 300;
    height: 45px;
}
</style>
