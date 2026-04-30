<template>
<div class="container">
    <label v-if="label" class="label">{{ label }}</label>

    <div ref="wrapper" class="input" @click="open = !open">
        <div class="options">
            <span v-if="!modelValue.length" class="placeholder">{{ placeholder }}</span>
            <FishButton v-for="tag in modelValue" :key="tag" chip @click.stop="remove(tag)">{{ tag }}<Icon name="mdi:close"/></FishButton>
        </div>
        <Icon name="mdi:menu-down"/>

        <div v-if="open" class="dropdown">
            <FishButton v-for="option in availableOptions" :key="option" chip @click.stop="add(option)">{{ option }}</FishButton>
            <div v-if="!availableOptions.length" class="empty">All options selected</div>
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    label: String,
    placeholder: String,
    options: Array,
})

const modelValue = defineModel({
    type: Array,
    default: () => [],
})

const open = ref(false)
const wrapper = ref(null)

const availableOptions = computed(() =>
    props.options.filter(option => !modelValue.value.includes(option))
)

function add(option) {
    modelValue.value = [...modelValue.value, option]
}

function remove(option) {
    modelValue.value = modelValue.value.filter(o => o !== option)
}

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
}

label {
    text-wrap: nowrap;
}

.input {
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);
    cursor: pointer;
    display: flex;
    align-items: center;
}

.options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.25rem;
    padding-right: 0;
    min-height: 2rem;
    flex: 1;
    align-items: center;
    & .iconify {
        min-height: 1rem;
        min-width: 1rem;
        height: 1rem;
        width: 1rem;
    }
}

.placeholder {
    color: var(--muted);
    padding-left: 0.25rem;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    background-color: var(--secondary);
    border-radius: var(--border-radius);
    box-shadow: var(--highlight-shadow);
    z-index: 10;
    max-height: 45vh;
    overflow-y: auto;
}

.empty {
    color: var(--muted);
    padding: 0.25rem;
}
</style>
