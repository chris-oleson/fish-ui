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
    color: var(--white);
    background-color: var(--primary);
    box-shadow: var(--highlight-shadow);
    font-weight: var(--bold-weight);
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
        color: var(--text-primary);
        background-color: var(--secondary);
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
        color: var(--text-secondary);
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        position: relative;
        box-shadow: none;
        filter: none;
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text-primary);
        }
        &:active:not(.disabled) {
            color: var(--text-secondary);
        }
    }
    &.chip {
        padding: .25rem .5rem;
        border-radius: 999px;
        border: none;
        text-wrap: nowrap;
        text-transform: none;
        letter-spacing: 0px;
        gap: .25rem;
    }
}
</style>
