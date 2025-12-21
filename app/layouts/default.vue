<template>
    <div>
        <FishHeader/>
        <main>
            <slot/>
        </main>
        <FishFooter/>
    </div>
</template>

<style scoped>
div {
    position: relative;
}

main {
    min-height: 100vh;
    padding-top: var(--header-height);
}
</style>
