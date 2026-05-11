<template>
<label v-if="label">{{ label }}
    <div class="container">
        <div class="text-field" :class="{ big, error }">
            <input ref="textField" v-model="modelValue" :type="fieldType" :placeholder="placeholder">
            <div v-if="password">
                <FishButton v-show="showPassword" simple title="Hide password" @click="showPassword = false"><Icon name="mdi:eye-off"/></FishButton>
                <FishButton v-show="!showPassword" simple title="Show password" @click="showPassword = true"><Icon name="mdi:eye"/></FishButton>
            </div>
        </div>
        <span v-if="error" class="error">{{ error }}</span>
    </div>
</label>

<div v-else class="container">
    <div class="text-field" :class="{ big, error }">
        <input ref="textField" v-model="modelValue" :type="fieldType" :placeholder="placeholder">
        <div v-if="password">
            <FishButton v-show="showPassword" simple title="Hide password" @click="showPassword = false"><Icon name="mdi:eye-off"/></FishButton>
            <FishButton v-show="!showPassword" simple title="Show password" @click="showPassword = true"><Icon name="mdi:eye"/></FishButton>
        </div>
    </div>
    <span v-if="error" class="error">{{ error }}</span>
</div>
</template>

<script setup>
const showPassword = ref(false)
const textField = useTemplateRef(null)
const modelValue = defineModel({ type: String, default: '' })
const props = defineProps({
    placeholder: String,
    error: String,
    label: String,
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

const fieldType = computed(() => {
    if (props.password && !showPassword.value) {
        return 'password'
    }
    if (props.email) {
        return 'email'
    }
    return 'text'
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

.text-field {
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    height: fit-content;
    width: 100%;
    min-width: 100px;
    border-radius: var(--border-radius);
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);
    overflow: hidden;
    &.error {
        & input {
            color: var(--error);
        }
    }
    & div {
        margin-right: .25rem;
    }
    & input {
        width: 100%;
        height: 2rem;
        padding: 0 .5rem;
        outline: none;
        border: none;
        background-color: transparent;

        &::placeholder {
            color: var(--muted);
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

.error {
    text-align: center;
    font-size: var(--tiny);
}
</style>
