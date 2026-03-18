<template>
    <NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false">
        <slot />
    </NuxtLink>
    <button v-else :disabled="disabled" :class="classes" draggable="false">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    to: String,
    background: Boolean,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    selected: Boolean,
    disabled: Boolean,
    error: Boolean,
    round: Boolean,
    secondary: Boolean,
    chip: Boolean
})

const classes = computed(() => ({
    background: props.background,
    simple: props.simple,
    big: props.big,
    small: props.small,
    selected: props.selected,
    disabled: props.disabled,
    error: props.error,
    round: props.round,
    secondary: props.secondary,
    chip: props.chip
}))
</script>

<style scoped>
button, a {
    color: var(--white);
    background-color: var(--primary);
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
    box-shadow: var(--highlight-shadow);
    &:is(:hover, :focus, .selected):not(.disabled) {
        filter: brightness(1.2);
    }
    &.round {
        width: fit-content;
        padding: .5rem;
        border-radius: 50%;
    }
    &.secondary {
        color: var(--text-primary);
        background-color: var(--secondary);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: var(--hover-brightness);
        }
    }
    &.error {
        color: var(--white);
        background-color: var(--error);
    }
    &.disabled {
        opacity: .2;
        pointer-events: none;
    }
    &.big {
        gap: 1rem;
        padding: 1rem;
        font-size: 1.25rem;
    }
    &.small {
        font-size: .75rem;
    }
    &.simple {
        color: var(--text-secondary);
        font-weight: 500;
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: none;
            color: var(--text-primary);
        }
    }
    &.chip {
        padding: .25rem .5rem;
        border-radius: 1rem;
        border: none;
        text-wrap: nowrap;
        text-transform: none;
        font-weight: 400;
        letter-spacing: 0px;
        width: fit-content;
    }
}
</style>
