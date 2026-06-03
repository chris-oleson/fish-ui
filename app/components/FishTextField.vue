<template>
    <div class="text-field-container">
        <label v-if="label" :for="id">{{ label }}</label>
        <div class="error-container">
            <div class="text-field" :class="{ big }">
                <input :id="id" ref="textField" v-model="modelValue" :type="getType()" :placeholder="placeholder" class="text-field" :class="{ error, search, password }">
                <Icon v-if="search" class="search-icon" name="mdi:magnify"/>
                <FishButton v-if="password" class="toggle-password" simple title="Hide password" @click="showPassword = !showPassword">
                    <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'"/>
                </FishButton>
            </div>
            <span v-if="error" class="error-message">{{ error }}</span>
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
    display: flex;
    gap: 1rem;
    flex: 1;
}

.text-field {
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    & input {
        border-radius: var(--border-radius);
        background-color: var(--slightly-dark);
        box-shadow: var(--recessed-shadow);
        width: 100%;
        padding: 0 .5rem;
        outline: none;
        border: none;
        line-height: 2rem;

        &::placeholder {
            color: var(--text-secondary);
        }
    }
    &:has(input:focus-visible) {
        outline: 1px solid var(--text-secondary);
    }
    &.error {
        outline: 1px solid var(--error);
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

label {
    text-wrap: nowrap;
    line-height: 2rem;
}

.error-message {
    color: var(--error);
    font-size: var(--tiny);
}

.error-container {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    flex: 1;
}

.big {
    & input {
        height: var(--huge);
        padding: 0 1rem;
    }
    & .search, .toggle-password {
        right: .5rem;
    }
    & label {
        line-height: 3rem;
    }
}

</style>
