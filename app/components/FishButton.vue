<template>
    <NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false" :title="title">
        <slot/>
    </NuxtLink>

    <button v-else :disabled="disabled" :class="classes" draggable="false" :title="title">
        <slot/>
    </button>
</template>

<script setup>
const props = defineProps({
    to: String,
    title: String,

    variant: {
        type: String,
        default: 'primary'
    },

    size: {
        type: String,
        default: 'medium'
    },

    role: {
        type: String,
        default: ''
    },

    selected: Boolean,
    disabled: Boolean,
    round: Boolean,
})

const classes = computed(() => ({
    primary: props.variant === 'primary',
    secondary: props.variant === 'secondary',
    simple: props.variant === 'simple',

    large: props.size === 'large',
    medium: props.size === 'medium',
    small: props.size === 'small',

    danger: props.role === 'danger',
    success: props.role === 'success',

    round: props.round,
    selected: props.selected,
    disabled: props.disabled,
}))
</script>

<style scoped>
button, a {
    padding: 0 var(--size-4);
    letter-spacing: .05em;
    display: flex;
    gap: var(--size-2);
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: inherit;
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: var(--border-radius);
    transition-duration: var(--duration-fast);
    user-select: none;
    cursor: pointer;
    text-wrap: nowrap;
    line-height: var(--line-height-input);
}

.primary {
    color: var(--on-primary);
    background: var(--primary);
    &:is(:hover, :focus, .selected):not(.disabled, :active) {
        color: var(--on-primary);
        filter: brightness(1.2);
    }
    &.success {
        background: var(--success);
    }
    &.danger {
        background: var(--danger);
    }
}

.secondary {
    color: var(--text);
    padding: var(--size-2);
    border: 1px solid var(--border);
    background: transparent;
    &:is(:hover, :focus, .selected):not(.disabled, :active) {
        border-color: var(--border-hover);
    }
}

.simple {
    color: var(--text-muted);
    background: transparent;
    position: relative;
    &:is(:hover, :focus, .selected):not(.disabled, :active) {
        color: var(--text);
    }
}

.large {
    padding: var(--size-4) var(--size-5);
}

.medium {
    padding: var(--size-2) var(--size-4);
}

.small {
    padding: var(--size-1) var(--size-2);
    font-size: var(--font-size-small);
}

.round {
    padding: var(--size-2);
    border-radius: 50%;
}

.disabled {
    opacity: .3;
    pointer-events: none;
}
</style>
