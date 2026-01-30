<template>
    <div class="column" :class="classes">
        <slot/>
    </div>
</template>

<script setup>
const props = defineProps({
    big: Boolean,
    small: Boolean,
})

const classes = computed(() => ({
    big: props.big,
    small: props.small,
}))
</script>

<style scoped>
.column {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 250px;
    &.small {
        flex: 1;
    }
    &.big {
        flex: 4;
    }
    & > * {
        width: 100%;
    }
}
</style>
