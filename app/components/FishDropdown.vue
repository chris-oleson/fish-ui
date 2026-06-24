<template>
    <div class="dropdown-container">
        <label v-if="label" :for="inputId" style="text-wrap: nowrap;">{{ label }}</label>
        <div :id="inputId" ref="wrapper" class="input" tabindex="0" role="combobox" :aria-expanded="open" :aria-haspopup="'listbox'" :aria-label="label || placeholder" @click="toggleOpen" @keydown="handleTriggerKeydown" >
            <div class="content" :class="{ placeholder: !modelValue.length }">{{ modelValue || placeholder }}</div>
            <Icon name="material-symbols-light:keyboard-arrow-down"/>
            <Transition name="opacity">
                <div v-if="open" ref="dropdown" class="dropdown" role="listbox">
                    <button v-for="(option, index) in options" :key="option" :ref="el => { optionRefs[index] = el }" role="option" :aria-selected="modelValue === option" @click="selectOption(option)" @keydown="handleOptionKeydown($event, index)" >{{ option }}</button>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    placeholder: String,
    options: Array,
})

const inputId = useId()
const modelValue = defineModel({
    type: [String, Number],
    default: '',
})

const open = ref(false)
const wrapper = ref(null)
const optionRefs = ref([])

function toggleOpen() {
    open.value = !open.value
}

function selectOption(option) {
    modelValue.value = option
    open.value = false
    wrapper.value?.focus()
}

function handleTriggerKeydown(event) {
    switch (event.key) {
        case 'Enter':
        case ' ':
        event.preventDefault()
        open.value = !open.value
        break
        case 'Escape':
        open.value = false
        break
    }
}

function handleOptionKeydown(event, index) {
    switch (event.key) {
        case 'Enter':
        event.stopPropagation()
        selectOption(options[index])
        break
        case 'Escape':
        open.value = false
        wrapper.value?.focus()
        break
    }
}

watch(open, async (isOpen) => {
    if (isOpen) {
        document.addEventListener('click', handleClickOutside)
        await nextTick()
        const selectedIndex = options.indexOf(modelValue.value)
        const focusIndex = selectedIndex >= 0 ? selectedIndex : 0
        optionRefs.value[focusIndex]?.focus()
    } else {
        document.removeEventListener('click', handleClickOutside)
    }
})

function handleClickOutside(event) {
    if (wrapper.value && !wrapper.value.contains(event.target)) {
        open.value = false
    }
}
</script>

<style scoped>
.input {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: var(--size6);
    flex: 1;
    border-radius: var(--border-radius);
    transition-duration: var(--fast);
    border: var(--border);
    min-width: 150px;

    & .content {
        position: absolute;
        left: var(--size2);
        right: var(--size6);
        text-align: start;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        user-select: none;
    }

    & .placeholder {
        color: var(--text-secondary);
    }

    &:hover, &:focus-visible {
        border-color: var(--text-primary);
    }
}

.dropdown {
    position: absolute;
    top: 120%;
    left: -1px;
    right: -1px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: var(--border-radius);
    background: var(--background);
    z-index: 10;
    max-height: 45vh;
    padding: 0;
    border: var(--border);
    overflow: hidden;
    transition-duration: var(--fast);

    & button {
        cursor: pointer;
        background: transparent;
        border: none;
        padding: var(--size2);
        width: 100%;
        text-align: start;
        transition-duration: var(--fast);
        background: var(--background);
        color: var(--text-primary);
        white-space: nowrap;
        text-overflow: ellipsis;

        &:hover, &:focus-visible {
            background: var(--secondary);
        }
    }
}

.iconify {
    color: var(--text-secondary);
    margin-right: var(--size1);
    margin-left: auto;
}
</style>
