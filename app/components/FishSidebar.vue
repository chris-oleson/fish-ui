<template>
<nav>
    <b>Variables</b>
    <FishButton class="nav-button" simple to="/colors">Colors</FishButton>
    <b>Components</b>
    <FishButton class="nav-button" simple to="/buttons">Buttons</FishButton>
    <FishButton class="nav-button" simple to="/checkboxes">Checkboxes</FishButton>
    <FishButton class="nav-button" simple to="/dropdowns">Dropdowns</FishButton>
    <FishButton class="nav-button" simple to="/text-fields">Text Fields</FishButton>
</nav>
</template>

<style scoped>
nav {
    position: fixed;
    z-index: 50;
    height: 100vh;
    width: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    background-color: var(--secondary);
    box-shadow: var(--drop-shadow);
    margin-top: 1rem;
    padding-top: var(--header-height);
}

.nav-button {
    justify-content: start;
    text-transform: none;
    height: 1.5rem;
}
</style>
