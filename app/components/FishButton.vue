<template>
    <component :is="component" :to="to" :disabled="disabled" :class="classes">
        <slot />
    </component>
</template>

<script setup>
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
    round: Boolean,
})

const component = computed(() => (props.to ? 'NuxtLink' : 'button'))

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
    round: props.round,
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
    &.round {
        width: fit-content;
        padding: .5rem;
        border-radius: 50%;
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
        .round {
            padding: 0;
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
        color: white;
        background-color: var(--error);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: brightness(1.3);
        }
        &:active:not(.disabled) {
            filter: brightness(1);
        }
    }
}
</style>
