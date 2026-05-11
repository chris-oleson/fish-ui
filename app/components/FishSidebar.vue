<template>
<nav>
    <FishColumn style="padding: 1rem; gap: .5rem;">
        <b>Components</b>
        <FishButton background to="/buttons">Buttons</FishButton>
        <FishButton background to="/dropdowns">Dropdowns</FishButton>
        <FishButton background to="/checkboxes">Checkboxes</FishButton>
    </FishColumn>
</nav>
</template>

<script setup>

</script>

<style scoped>
nav {
    position: fixed;
    z-index: 50;
    padding-top: var(--header-height);
    height: 100vh;
    width: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    box-shadow: var(--drop-shadow);
}
</style>
