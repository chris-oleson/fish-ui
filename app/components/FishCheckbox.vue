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
    height: 2rem;
    width: 2rem;
    appearance: none;
    position: relative;
    border-radius: var(--border-radius);
    border: var(--border);
    transition-duration: var(--fast);
    cursor: pointer;

    &:hover, &:focus-visible {
        border: 1px solid var(--border-hover);
    }

    &::after {
        content: '✓';
        position: absolute;
        inset: 0;
        font-size: 2rem;
        line-height: 1em;
        text-align: center;
        border-radius: calc(var(--border-radius) / 1.5);
        display: none;
        pointer-events: none;
    }

    &.small {
        height: 1.5rem;
        width: 1.5rem;

        &::after {
            font-size: 1.5rem;
        }
    }

    &:checked::after {
        display: block;
    }
}
</style>
