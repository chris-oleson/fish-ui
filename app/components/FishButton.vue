<template>
    <NuxtLink v-if="to" :to="to" :class="classes" :disabled="disabled">
        <Icon v-if="icon" :name="icon" />
        <slot />
        <Icon v-if="appendIcon" :name="appendIcon" />
    </NuxtLink>

    <button v-else :class="classes" :disabled="disabled">
        <Icon v-if="icon" :name="icon" />
        <slot />
        <Icon v-if="appendIcon" :name="appendIcon" />
    </button>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
    to: { type: String, default: '' },
    primary: Boolean,
    border: Boolean,
    background: Boolean,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    selected: Boolean,
    disabled: Boolean,
    error: Boolean,
    icon: { type: String, default: '' },
    appendIcon: { type: String, default: '' }
})

const hasText = computed(() => {
    const slot = slots.default?.()
    return !!slot && slot.some(vnode => vnode.children?.toString().trim())
})

const classes = computed(() => ({
    primary: props.primary,
    border: props.border,
    background: props.background,
    simple: props.simple,
    big: props.big,
    small: props.small,
    selected: props.selected,
    disabled: props.disabled,
    error: props.error,
    icon: props.icon,
    text: hasText.value,
}))
</script>

<style scoped>
button, a {
    padding: .5rem .75rem;
    letter-spacing: 1.25px;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: inherit;
    min-width: fit-content;
    width: 100%;
    border: none;
    border-radius: var(--border-radius);
    transition-duration: .2s;
    line-height: 1rem;
    user-select: none;
    outline: none;
    cursor: pointer;
    height: fit-content;
    & .iconify {
        font-size: 1.5rem;
    }
    &:not(.text) {
        padding: .5rem;
        border-radius: 50%;
        font-size: 1.5rem;
    }
    &.primary {
        color: white;
        background-color: var(--primary);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: brightness(1.3);
        }
        &:active:not(.disabled) {
            filter: brightness(1);
        }
    }
    &.border {
        color: var(--text);
        border: 1px solid var(--accent);
        background-color: transparent;
        &.selected {
            background-color: var(--accent);
            border-color: transparent;
        }
        &:is(:hover, :focus):not(.disabled, .selected) {
            border: 1px solid var(--text);
        }
    }
    &.selected {
        pointer-events: none;
    }
    &.disabled {
        opacity: .2;
        pointer-events: none;
    }
    &.big {
        gap: 1rem;
        padding: 1rem;
        font-size: 1.25rem;
        &:not(.text) {
            padding: 0;
            & .iconify {
                font-size: 2rem;
            }
        }
    }
    &.small {
        font-size: .75rem;
    }
    &.simple {
        color: var(--text-accent);
        font-weight: 500;
        padding: 0;
        background-color: transparent;
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text);
        }
    }
    &.error {
        border: 1px solid var(--error);
        color: var(--error);
        background-color: transparent;
        &:is(:hover, :focus, .selected):not(.disabled) {
            background-color: var(--error);
            border-color: var(--error);
            color: white;
        }
    }
}
</style>
