<template>
<NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false"><slot/></NuxtLink>
<button v-else :disabled="disabled" :class="classes" draggable="false"><slot/></button>
</template>

<script setup>
const props = defineProps({
    to: String,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    secondary: Boolean,
    background: Boolean,
    selected: Boolean,
    disabled: Boolean,
    success: Boolean,
    error: Boolean,
    round: Boolean,
    chip: Boolean,
})

const classes = computed(() => ({
    simple: props.simple,
    big: props.big,
    small: props.small,
    secondary: props.secondary,
    background: props.background,
    selected: props.selected,
    disabled: props.disabled,
    success: props.success,
    error: props.error,
    round: props.round,
    chip: props.chip
}))
</script>

<style scoped>
button, a {
    padding: .5rem 1rem;
    letter-spacing: 1.25px;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: inherit;
    width: fit-content;
    line-height: var(--small);
    height: fit-content;
    border: none;
    border-radius: var(--border-radius);
    transition-duration: var(--fast);
    user-select: none;
    outline: none;
    cursor: pointer;
    color: var(--ultra-light);
    background-color: var(--primary);
    box-shadow: var(--highlight-shadow);
    text-wrap: nowrap;
    &:is(:hover, :focus, .selected):not(.disabled) {
        filter: brightness(1.2);
    }
    &:active:not(.disabled) {
        filter: none;
    }
    &.round {
        width: fit-content;
        padding: .5rem;
        border-radius: 50%;
    }
    &.error {
        background-color: var(--error);
    }
    &.success {
        background-color: var(--success);
    }
    &.secondary {
        color: var(--text);
        background-color: var(--secondary);
        &:hover {
            filter: brightness(var(--hover-brightness));
        }
    }
    &.disabled {
        opacity: .3;
        pointer-events: none;
    }
    &.big {
        gap: 1rem;
        padding: 1rem 1.5rem;
    }
    &.small {
        font-size: var(--tiny);
    }
    &.simple {
        color: var(--muted);
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        position: relative;
        box-shadow: none;
        filter: none;
        font-weight: var(--bold-weight);
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text);
        }
        &:active:not(.disabled) {
            color: var(--muted);
        }
    }
    &.chip {
        padding: .25rem .5rem;
        border-radius: 999px;
        border: none;
        text-wrap: nowrap;
        text-transform: none;
        letter-spacing: 0px;
    }
    &.background {
        justify-content: start;
        text-transform: none;
        color: var(--muted);
        box-shadow: none;
        background-color: transparent;
        padding: .5rem;
        &:hover {
            filter: none;
            color: var(--text);
            background-color: var(--muted);
        }
    }
}
</style>
