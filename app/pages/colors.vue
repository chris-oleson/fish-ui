<template>
  <div class="theme-picker">
    <div class="token-list">
      <div v-for="token in tokens" :key="token.key" class="token-row">
        <div class="picker-wrap">
          <div class="swatch" :style="{ background: token.state.value }" />
          <input
            type="color"
            :value="token.state.value"
            class="color-input"
            @input="update(token, $event.target.value)"
          >
        </div>
        <div class="token-info">
          <span class="token-label">{{ token.label }}</span>
          <span class="token-var">--{{ token.key }}</span>
        </div>
        <span class="token-hex">{{ token.state.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const tokenKeys = ['primary', 'secondary', 'text-primary', 'background', 'text-secondary', 'error', 'success']

// Read the resolved value of a CSS variable from :root, converting to hex
// since <input type="color"> requires hex.
function readCSSVar(key) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${key}`)
    .trim()

  // Convert any valid color string to hex via a canvas
  const ctx = document.createElement('canvas').getContext('2d')
  ctx.fillStyle = raw
  return ctx.fillStyle // canvas normalizes to hex
}

const cssDefaults = ref({})

onMounted(() => {
  tokenKeys.forEach(key => {
    const token = tokens.find(t => t.key === key)
    if (token.state.value) {
      setCSSVar(key, token.state.value)
    } else {
      const defaultValue = readCSSVar(key)
      cssDefaults.value[key] = defaultValue
      token.state.value = defaultValue
      setCSSVar(key, defaultValue)
    }
  })
})

const tokens = tokenKeys.map(key => ({
  key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  state: useState(`theme-${key}`, () => null),
}))

function update(token, value) {
  token.state.value = value
  setCSSVar(token.key, value)
}

function setCSSVar(key, value) {
  document.documentElement.style.setProperty(`--${key}`, value)
}
</script>

<style scoped>
.theme-picker {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
}

.title {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin: 0 0 0.5rem;
}

.token-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.token-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  transition: background 0.15s;
}
.token-row:hover {
  background: color-mix(in srgb, var(--text-secondary) 10%, transparent);
}

.picker-wrap {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  border: 1.5px solid color-mix(in srgb, var(--text-secondary) 30%, transparent);
  flex-shrink: 0;
  cursor: pointer;
}

.swatch {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.color-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0;
  border: none;
}

.token-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
}

.token-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
}

.token-var {
  font-size: 0.65rem;
  font-family: monospace;
  color: var(--text-secondary);
}

.token-hex {
  font-size: 0.72rem;
  font-family: monospace;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}

</style>
