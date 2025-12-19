<template>
    <blockquote>
        <p>
            {{ displayQuote }}
            <FishButton v-if="isTruncated" style="display: inline; margin-left: .5rem;" small simple text @click="expanded = !expanded">{{ expanded ? "Read less" : "Read more" }}</FishButton>
        </p>
        <cite>- {{ source }}</cite>
    </blockquote>
</template>

<script setup>
import { computed, ref } from "vue"

const props = defineProps({
    quote: {
        type: String,
        default: "",
    },
    source: {
        type: String,
        default: "",
    },
})

const expanded = ref(false)
const wordLimit = 50

const words = computed(() =>
    props.quote.trim().split(/\s+/)
)

const isTruncated = computed(() =>
    words.value.length > wordLimit
)

const displayQuote = computed(() => {
    if (expanded.value || !isTruncated.value) {
        return props.quote
    }

    return words.value.slice(0, wordLimit).join(" ") + "…"
})
</script>

<style scoped>
blockquote {
    position: relative;
    margin: 2rem 0;

    &:before {
        content: '“';
        font-family: Playfair Display, serif;
        font-size: 4rem;
        line-height: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        color: var(--accent);
    }

    & p {
        margin: 0;
        text-indent: 2rem;
        font-style: italic;
        color: var(--text-accent);
        white-space: pre-line;
    }

    & cite {
        display: block;
        margin-top: .5rem;
        font-style: normal;
        font-size: 1rem;
        color: var(--text-accent);
    }
}
</style>
