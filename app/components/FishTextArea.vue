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
    resize: vertical;
    min-height: 2rem;
    height: 10rem;
    padding: 0 .5rem;
    color: var(--text);
    background-color: var(--background);
    outline: none;
    border: none;
    font-size: 1rem;
    line-height: 1rem;
    border: 1px solid var(--accent);
    outline: none;
    border-radius: var(--border-radius);
    padding: .5rem;
    transition-duration: .2s;
    &:hover, &:focus {
        border: 1px solid var(--text);
    }
    &::placeholder {
        color: var(--text-disabled);
    }
}

label {
    width: 100%;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
</style>
