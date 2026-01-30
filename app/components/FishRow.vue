<template>
    <div class="row">
        <slot/>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
</style>
