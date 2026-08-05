<template>
    <div class="text-field-container">
        <label v-if="label" :for="id">{{ label }}</label>
        <div class="error-container">
            <div class="text-field" :class="{ big }">
                <input :id="id" ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder" class="text-field" :class="{ error, search, password }">
                <Icon v-if="search" class="search-icon" name="material-symbols-light:search"/>
                <FishButton v-if="password" class="toggle-password" simple title="Hide password" @click="showPassword = !showPassword">
                    <Icon :name="showPassword ? 'material-symbols-light:eye-off' : 'material-symbols-light:eye'"/>
                </FishButton>
            </div>
            <span v-if="error" class="small error">{{ error }}</span>
        </div>
    </div>
</template>

<script setup>
const showPassword = ref(false)
const textField = useTemplateRef('textField')
const modelValue = defineModel({ type: String, default: '' })
const props = defineProps({
    placeholder: String,
    error: String,
    label: String,
    password: Boolean,
    focus: Boolean,
    big: Boolean,
    email: Boolean,
    search: Boolean
})

const id = useId();

onMounted(() => {
    if (props.focus) {
        textField.value.focus()
    }
})

function getType() {
    if (props.password && !showPassword.value) {
        return 'password'
    }
    if (props.email) {
        return 'email'
    }
    return 'text'
}
</script>

<style scoped>
.text-field-container {
    flex: 1;
}

.text-field {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition-duration: var(--fast);

    & input {
        border: var(--border);
        border-radius: var(--border-radius);
        background: transparent;
        width: 100%;
        height: 2rem;
        padding: 0 .5rem;

        &::placeholder {
            color: var(--text-secondary);
        }
        &:hover, &:focus-visible {
            border-color: var(--border-hover);
        }
        &.error {
            border-color: var(--error);
        }
    }
}

.search, .password {
    padding-right: 2rem !important;
}

.search-icon {
    color: var(--text-secondary);
    position: absolute;
    right: .25rem;
    pointer-events: none;
}

.toggle-password {
    position: absolute !important;
    right: .25rem;
}

.error-container {
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

.big {
    & input {
        height: 3rem;
        padding: 0 1rem;
    }
    & .search, .toggle-password {
        right: .5rem;
    }
}

</style>
