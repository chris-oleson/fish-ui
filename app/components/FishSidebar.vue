<template>
<nav>
    <FishColumn style="padding: 1rem; gap: .5rem;">
        <b>Variables</b>
        <FishButton class="nav-button" simple to="/colors">Colors</FishButton>
        <b>Components</b>
        <FishButton class="nav-button" simple to="/buttons">Buttons</FishButton>
        <FishButton class="nav-button" simple to="/checkboxes">Checkboxes</FishButton>
        <FishButton class="nav-button" simple to="/dropdowns">Dropdowns</FishButton>
        <FishButton class="nav-button" simple to="/text-fields">Text Fields</FishButton>
    </FishColumn>
</nav>
</template>

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

.nav-button {
    justify-content: start;
    text-transform: none;
    height: 1.5rem;
}
</style>
