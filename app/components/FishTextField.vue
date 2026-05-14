<template>
<div class="text-field-container" :class="{ big, error }">
    <label v-if="label" :for="formId">{{ label }}</label>
    <div style="display: flex; flex-direction: column; gap: .5rem; width: 100%;">
        <div class="text-field">
            <input :id="formId" ref="textField" v-model="modelValue" :type="fieldType" :placeholder="placeholder">
            <FishButton v-if="password" class="toggle-password" simple title="Hide password" @click="showPassword = !showPassword">
                <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'"/>
            </FishButton>
        </div>
        <span v-if="error">{{ error }}</span>
    </div>
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

const formId = useId();

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
.text-field-container {
    display: flex;
    gap: .5rem;
}

label {
    line-height: 2rem;
}

.text-field {
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    height: fit-content;
    min-width: 100px;
    background-color: var(--slightly-dark);
    box-shadow: var(--recessed-shadow);
    overflow: hidden;
    &.error {
        & input {
            color: var(--error);
        }
    }
    & .toggle-password {
        margin-right: .5rem;
    }
    & input {
        width: 100%;
        height: 2rem;
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0 .5rem;
        &::placeholder {
            color: var(--muted);
        }
    }
}

.big {
    & input {
        padding: 0 1rem;
        height: 3rem;
    }
    & .toggle-password {
        margin-right: 1rem;
    }
    & label {
        line-height: 3rem;
    }
}

.error {
    & span {
        text-align: center;
        font-size: var(--tiny);
        color: var(--error);
    }
}
</style>
