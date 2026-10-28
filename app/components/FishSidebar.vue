<template>
<nav>
    <b>Variables</b>
    <FishButton class="nav-button" variant="simple" to="/colors">Colors</FishButton>
    <b>Components</b>
    <FishButton class="nav-button" variant="simple" to="/buttons">Buttons</FishButton>
    <FishButton class="nav-button" variant="simple" to="/checkboxes">Checkboxes</FishButton>
    <FishButton class="nav-button" variant="simple" to="/dropdowns">Dropdowns</FishButton>
    <FishButton class="nav-button" variant="simple" to="/text-fields">Text Fields</FishButton>
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
    background-color: var(--surface);
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
    margin-top: 1rem;
    padding-top: var(--header-height);
}

.nav-button {
    justify-content: start;
    text-transform: none;
    height: 1.5rem;
}
</style>
