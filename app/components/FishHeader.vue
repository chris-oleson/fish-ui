<template>
<header>
    <NuxtLink to="/">
        <NuxtImg width="40px" height="40px" src="/images/favicon.svg"/>
        <h3 style="margin: 0;">Fish UI</h3>
    </NuxtLink>
</header>
</template>

<style scoped>
header {
    background-color: var(--secondary);
    box-shadow: var(--drop-shadow);
    z-index: 100;
    position: fixed;
    width: 100%;
    height: var(--header-height);
    margin: auto;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: 0 1rem;
}

a {
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
}
</style>
