<template>
<label v-if="label">{{ label }}
    <input v-model="modelValue" type="checkbox">
</label>

<input v-else v-model="modelValue" type="checkbox">
</template>

<script setup>
defineProps({
    label: { type: String, default: '' },
})
const modelValue = defineModel({
    type: Boolean,
    default: false
})
</script>

<style scoped>
input {
    height: 2rem;
    width: 2rem;
    margin: 0;
    outline: none;
    color: var(--text);
    appearance: none;
    position: relative;
    background-color: transparent;
    border-radius: var(--border-radius);
}

input:before {
    font-size: 2rem;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: var(--border);
    border-radius: var(--border-radius);
    transition-duration: .2s;
    cursor: pointer;
    line-height: 95%;
    text-align: center;
}

input:hover:before,
input:focus:before {
    border-color: var(--text);
}

input:checked:before {
    content: '\2713';
}

label {
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
}
</style>
