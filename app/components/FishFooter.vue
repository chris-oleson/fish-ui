<template>
    <footer>
        <ClientOnly>
            <FishButton simple @click="colorMode.preference = getOppositeTheme()">{{ getOppositeTheme() }} mode</FishButton>
        </ClientOnly>
    </footer>
</template>

<script setup>
const colorMode = useColorMode()

function getOppositeTheme() {
    if (colorMode.value === 'light') return 'dark'
    return 'light'
}
</script>

<style scoped>
footer {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    margin: 0;
    text-align: center;
    color: var(--text-accent);
}
</style>
