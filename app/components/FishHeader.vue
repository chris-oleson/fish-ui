<template>
    <header>
        <FishButton simple>Simple</FishButton>
        <FishButton simple>Simple</FishButton>
        <FishButton simple>Simple</FishButton>
    </header>
</template>

<style scoped>
header {
    backdrop-filter: blur(4px);
    z-index: 100;
    position: fixed;
    width: 100%;
    height: var(--header-height);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 0 2rem;
}
</style>
