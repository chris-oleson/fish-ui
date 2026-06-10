<template>
    <div class="textarea-container">
        <label v-if="label" :for="id">{{ label }}</label>
        <textarea :id="id" v-model="modelValue" :placeholder="placeholder"/>
    </div>
</template>

<script setup>
const modelValue = defineModel({ type: String, default: '' })
defineProps({
    placeholder: { type: String, default: '' },
    label: { type: String, default: '' },
})
const id = useId()
</script>

<style scoped>
.textarea-container {
    flex: 1;
}

textarea {
    resize: none;
    min-height: var(--size6);
    height: var(--size12);
    padding: 0 var(--size2);
    color: var(--text-primary);
    width: 100%;
    background: transparent;
    border: var(--border);
    border-radius: var(--border-radius);
    padding: var(--size2);
    transition-duration: var(--fast);
    &:hover, &:focus-visible {
        border-color: var(--text-secondary);
    }
    &::placeholder {
        color: var(--text-secondary);
    }
}
</style>
