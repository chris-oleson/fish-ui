<template>
    <label v-if="label">{{ label }}
        <div class="text-field" :class="{'big': big, 'error': error}">
            <input ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder">
            <div v-if="password">
                <FishButton v-show="showPassword" simple title="Hide password" icon="mdi:eye-off" @click="showPassword = false"/>
                <FishButton v-show="!showPassword" simple title="Show password" icon="mdi:eye" @click="showPassword = true"/>
            </div>
            <p v-if="error" class="error">{{ error }}</p>
        </div>
    </label>

    <div v-else class="text-field" :class="{'big': big, 'error': error}">
        <input ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder">
        <div v-if="password">
            <FishButton v-show="showPassword" simple title="Hide password" icon="mdi:eye-off" @click="showPassword = false"/>
            <FishButton v-show="!showPassword" simple title="Show password" icon="mdi:eye" @click="showPassword = true"/>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
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
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    height: fit-content;
    & div {
        margin-right: .5rem;
    }
    & input {
        width: 100%;
        height: 2rem;
        padding: 0 .5rem;
        border-radius: var(--border-radius);
        background-color: var(--slightly-dark);
        box-shadow: var(--recessed-shadow);
        outline: none;
        border: none;
        font-size: 1rem;
        line-height: 1rem;

        &::placeholder {
            color: var(--text-secondary);
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-wrap: nowrap;
    width: 100%;
}

p {
    position: absolute;
    font-size: .75rem;
    bottom: -2.5rem;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
