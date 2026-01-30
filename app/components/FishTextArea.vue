<template>
    <label v-if="label">{{ label }}
        <textarea v-model="modelValue" :placeholder="placeholder"/>
    </label>

    <textarea v-else v-model="modelValue" :placeholder="placeholder"/>
</template>

<script setup>
const modelValue = defineModel({ type: String, default: '' })
defineProps({
    placeholder: { type: String, default: '' },
    label: { type: String, default: '' },
})
</script>

<style scoped>
textarea {
    resize: none;
    min-height: 2rem;
    height: 10rem;
    padding: 0 .5rem;
    color: var(--text);
    background-color: var(--background);
    outline: none;
    border: none;
    font-size: 1rem;
    line-height: 1rem;
    outline: none;
    border-radius: var(--border-radius);
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);    padding: .5rem;
    transition-duration: .2s;
    &:hover, &:focus {
        border: 1px solid var(--text);
    }
    &::placeholder {
        color: var(--text-secondary);
    }
}

label {
    width: 100%;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
