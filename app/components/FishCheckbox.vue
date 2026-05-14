<template>
<div class="checkbox-container">
    <label v-if="label" :for="formId">{{ label }}</label>
    <input :id="formId" v-model="modelValue" type="checkbox" :class="{ small: small }">
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

const formId = useId()
</script>

<style scoped>
.checkbox-container {
    display: flex;
    gap: .5rem;
}

label {
    line-height: 2rem;
    width: 100%;
}

input {
    display: block;
    min-height: 2rem;
    min-width: 2rem;
    outline: none;
    appearance: none;
    position: relative;
    background-color: var(--slightly-dark);
    border-radius: var(--border-radius);
    transition-duration: .2s;
    box-shadow: var(--recessed-shadow);

    &::after {
        content: '';
        position: absolute;
        inset: 5px;
        border-radius: calc(var(--border-radius) / 1.5);
        background-color: var(--primary);
        box-shadow: var(--highlight-shadow);
        transform: scale(0);
        transition-duration: .2s;
        pointer-events: none;
    }

    &.small {
        min-height: 1.5rem;
        min-width: 1.5rem;

        &::after {
            inset: 4px;
        }
    }

    &:checked::after {
        transform: scale(1);
    }
}
</style>
