<template>
<div class="container">
    <label v-if="label" style="text-wrap: nowrap;">{{ label }}</label>

    <div ref="wrapper" class="input" @click="open = !open">
        <div v-if="!modelValue.length" class="content" style="color: var(--muted);">{{ placeholder }}</div>
        <div v-else class="content">{{ modelValue }}</div>
        <Icon name="mdi:menu-down" style="margin-right: .25rem; margin-left: auto;"/>

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
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.container {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    min-width: 0;
}

.input {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 2rem;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);

    & .content {
        text-align: start;
        position: absolute;
        left: .5rem;
        top: 0;
        bottom: 0;
        right: 1.5rem;
        line-height: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
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
