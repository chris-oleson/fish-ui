<template>
<div class="row"><slot/></div>
</template>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & > * {
        margin: 0;
    }
}
</style>
