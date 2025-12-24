<template>
    <NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes">
        <slot />
    </NuxtLink>
    <button v-else :disabled="disabled" :class="classes">
        <slot />
    </button>
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
        border: var(--border);
        background-color: transparent;
        &:is(:hover, :focus, .selected):not(.disabled) {
            border: 1px solid var(--text);
        }
        &:active:not(.disabled) {
            border: var(--border);
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
        line-height: 2rem;
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
        &:active:not(.disabled) {
            color: var(--text-accent);
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
