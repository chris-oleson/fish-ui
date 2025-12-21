<template>
    <label v-if="label">{{ label }}
        <div>
            <select v-model="modelValue" required :class="{'big': big}">
                <option v-if="placeholder" disabled hidden value="">{{ placeholder }}</option>
                <option v-if="!options.includes(modelValue) && modelValue !== ''" hidden :value="modelValue">{{ modelValue }}</option>
                <option v-for="(option, i) in options" :key="i">{{ option }}</option>
            </select>
        </div>
    </label>

    <div v-else>
        <select v-model="modelValue" required :class="{'big': big}">
            <option v-if="placeholder" disabled hidden value="">{{ placeholder }}</option>
            <option v-if="!options.includes(modelValue) && modelValue !== ''" hidden :value="modelValue">{{ modelValue }}</option>
            <option v-for="(option, i) in options" :key="i">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    big: { type: Boolean }
})
const modelValue = defineModel({
    type: [String, Number],
    default: ''
})
</script>

<style scoped>
div {
    border: 1px solid var(--accent);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition-duration: .2s;
    height: fit-content;
    width: 100%;

    &:hover, &:has(select:focus) {
        border-color: var(--text);
    }
}

select {
    height: 2rem;
    margin: 0;
    outline: none;
    color: var(--text);
    background-color: var(--background);
    border: none;
    padding: 0 .5rem;
    font-size: 1rem;
    line-height: 1rem;
    cursor: pointer;
    width: 100%;

    &:invalid {
        color: var(--text-disabled);
    }
    &.big {
        height: 3rem;
        padding: 0 1rem;
    }
    &.error {
        border-color: var(--error);
        &::placeholder {
            color: var(--error);
        }
    }
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
