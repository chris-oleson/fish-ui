<template>
<label v-if="label">{{ label }}
    <input v-model="modelValue" type="checkbox" :class="{ small: small }">
</label>

<input v-else v-model="modelValue" type="checkbox" :class="{ small: small }">
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
</script>

<style scoped>
input {
    height: 2rem;
    width: 2rem;
    margin: 0;
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
        height: 1.5rem;
        width: 1.5rem;
        min-width: 1.5rem;

        &::after {
            inset: 4px;
        }
    }

    &:checked::after {
        transform: scale(1);
    }
}



label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
</style>
