<template>
<div>
    <FishHeader/>
    <FishSidebar/>
    <main>
        <slot/>
        <FishFooter/>
    </main>
</div>
</template>

<style scoped>
div {
    position: relative;
}

main {
    min-height: 100vh;
    position: absolute;
    top: var(--header-height);
    left: var(--sidebar-width);
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
}
</style>
