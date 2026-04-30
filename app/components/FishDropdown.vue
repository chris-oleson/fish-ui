<template>
<div class="container">
    <label v-if="label" style="text-wrap: nowrap;">{{ label }}</label>

    <div ref="wrapper" class="input" @click="open = !open">
        <div class="content" :class="{ placeholder: !modelValue.length }">{{ modelValue || placeholder }}</div>
        <Icon name="mdi:menu-down" style="margin-left: auto;"/>

        <div v-if="open" class="dropdown">
            <button v-for="option in options" :key="option" @click="modelValue = option">{{ option }}</button>
        </div>
    </div>
</div>
</template>

<script setup>
defineProps({
    label: String,
    placeholder: String,
    options: Array
})

const modelValue = defineModel({
    type: [String, Number],
    default: ''
})

const open = ref(false)
const wrapper = ref(null)

function handleClickOutside(event) {
    if (wrapper.value && !wrapper.value.contains(event.target)) {
        open.value = false
    }
}

watch(open, (isOpen) => {
    if (isOpen) {
        document.addEventListener('click', handleClickOutside)
    }
    else {
        document.removeEventListener('click', handleClickOutside)
    }
})
</script>

<style scoped>
.container {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
}

.input {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 2rem;
    min-width: 100px;
    flex: 1;
    border-radius: var(--border-radius);
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);

    & .content {
        position: absolute;
        left: .5rem;
        right: var(--icon-size);
        line-height: 2rem;
        text-align: start;
        min-width: 0;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        user-select: none;
    }

    & .placeholder {
        color: var(--muted);
    }
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: var(--border-radius);
    box-shadow: var(--highlight-shadow);
    background-color: var(--secondary);
    z-index: 10;
    max-height: 45vh;
    overflow-y: auto;
    padding: 0;

    & button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: .5rem;
        width: 100%;
        text-align: start;
        transition-duration: var(--fast);
        color: var(--muted);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:hover, &:focus {
            color: var(--text);
        }
    }
}
</style>
