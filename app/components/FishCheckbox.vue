<template>
<div class="checkbox-container">
    <label v-if="label" :for="id">{{ label }}</label>
    <input :id="id" v-model="modelValue" type="checkbox" :class="{ small: small }">
</div>
</template>

<script setup>
defineProps({
    label: { type: String, default: '' },
    small: Boolean,
})
const modelValue = defineModel({
    type: Boolean,
    default: false
})

const id = useId()
</script>

<style scoped>
input {
    display: block;
    min-height: var(--size6);
    min-width: var(--size6);
    max-height: var(--size6);
    max-width: var(--size6);
    appearance: none;
    position: relative;
    border-radius: var(--border-radius);
    border: var(--border);
    transition-duration: var(--fast);
    cursor: pointer;

    &:hover, &:focus-visible {
        border: 1px solid var(--text-secondary);
    }

    &::after {
        content: '✓';
        position: absolute;
        inset: 0;
        font-size: var(--size6);
        line-height: var(--size6);
        text-align: center;
        border-radius: calc(var(--border-radius) / 1.5);
        display: none;
        pointer-events: none;
    }

    &.small {
        min-height: var(--size5);
        min-width: var(--size5);
        max-height: var(--size5);
        max-width: var(--size5);

        &::after {
            inset: 4px;
        }
    }

    &:checked::after {
        display: block;
    }
}
</style>
