<template>
    <div class="backdrop">
        <div class="card">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    inset: 0;
    padding: 1rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(.5rem);
}
</style>
