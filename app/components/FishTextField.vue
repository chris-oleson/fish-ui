<template>
    <label v-if="label">{{ label }}
        <div class="text-field" :class="{'big': big, 'error': error}">
            <input ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder">
            <div v-if="password">
                <FishButton v-show="showPassword" simple title="Hide password" icon="mdi:eye-off" @click="showPassword = false"/>
                <FishButton v-show="!showPassword" simple title="Hide password" icon="mdi:eye" @click="showPassword = true"/>
            </div>
        </div>
    </label>

    <div v-else class="text-field" :class="{'big': big, 'error': error}">
        <input ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder">
        <div v-if="password">
            <FishButton v-show="showPassword" simple title="Hide password" icon="mdi:eye-off" @click="showPassword = false"/>
            <FishButton v-show="!showPassword" simple title="Hide password" icon="mdi:eye" @click="showPassword = true"/>
        </div>
    </div>
</template>

<script setup>
const showPassword = ref(false)
const textField = ref(null)
const modelValue = defineModel({ type: String, default: '' })
const props = defineProps({
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    label: { type: String, default: '' },
    password: Boolean,
    focus: Boolean,
    big: Boolean,
    email: Boolean
})

onMounted(() => {
    if (props.focus) {
        textField.value.focus()
    }
})

function getType() {
    if (props.password && !showPassword.value) {
        return 'password'
    }
    else if (props.email) {
        return 'email'
    }
    return 'text'
}
</script>

<style scoped>
.text-field {
    outline: none;
    border: 1px solid var(--accent);
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition-duration: .2s;
    height: fit-content;
    width: 100%;
    overflow: hidden;
    &:hover, &:has(input:focus) {
        border-color: var(--text);
    }

    & div {
        margin-right: .5rem;
    }
    & input {
        width: 100%;
        height: 2rem;
        padding: 0 .5rem;
        color: var(--text);
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 1rem;
        line-height: 1rem;
        &::placeholder {
            color: var(--text-disabled);
        }
    }
    &.error {
        border-color: var(--error);
        & input::placeholder, & button {
            color: var(--error);
        }
    }
    &.big {
        & input {
            height: 3rem;
            padding: 0 1rem;
        }
        & div {
            margin-right: 1rem;
        }
    }
}

label {
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-wrap: nowrap;
    width: 100%;
}
</style>
