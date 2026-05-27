<template>
    <div>
        <section>
            <h1>FishButton</h1>
            <p>A versatile, polymorphic button that renders as a <code>&lt;button&gt;</code> or a <code>&lt;NuxtLink&gt;</code> depending on whether a <code>to</code> prop is provided. Supports a full suite of visual variants and states.</p>
        </section>

        <section>
            <h2>Variants</h2>
            <p>Use <code>secondary</code>, <code>simple</code>, <code>error</code>, or <code>success</code> to change the button's visual role.</p>
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FishButton>Primary</FishButton></td>
                        <td><code>&lt;FishButton&gt;Primary&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton secondary>Secondary</FishButton></td>
                        <td><code>&lt;FishButton secondary&gt;Secondary&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton simple>Simple</FishButton></td>
                        <td><code>&lt;FishButton simple&gt;Simple&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton error>Error</FishButton></td>
                        <td><code>&lt;FishButton error&gt;Error&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton success>Success</FishButton></td>
                        <td><code>&lt;FishButton success&gt;Success&lt;/FishButton&gt;</code></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Sizes</h2>
            <p>Control size with <code>big</code> or <code>small</code>. The default sits between the two.</p>
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FishButton small>Small</FishButton></td>
                        <td><code>&lt;FishButton small&gt;Small&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton>Default</FishButton></td>
                        <td><code>&lt;FishButton&gt;Default&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton big>Big</FishButton></td>
                        <td><code>&lt;FishButton big&gt;Big&lt;/FishButton&gt;</code></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Shape &amp; Style Variants</h2>
            <p>Use <code>round</code> for icon-only circular buttons, and <code>chip</code> for compact pill-shaped tags or filters.</p>
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FishButton round><Icon name="mdi:check"/></FishButton></td>
                        <td><code>{{ '<FishButton round><Icon name="mdi:check"/></FishButton>' }}</code></td>
                    </tr>
                    <tr>
                        <td><FishButton round secondary><Icon name="mdi:check"/></FishButton></td>
                        <td><code>{{ '<FishButton round secondary><Icon name="mdi:check"/></FishButton>' }}</code></td>
                    </tr>
                    <tr>
                        <td><FishButton chip>Chip</FishButton></td>
                        <td><code>{{ '<FishButton chip>Chip</FishButton>' }}</code></td>
                    </tr>
                    <tr>
                        <td><FishButton chip secondary>Secondary</FishButton></td>
                        <td><code>&lt;FishButton chip secondary&gt;Vue 3&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton chip success>Active</FishButton></td>
                        <td><code>&lt;FishButton chip success&gt;Active&lt;/FishButton&gt;</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>Interactive States</h3>
            <p>Use <code>selected</code> to hold a visually-active state (like a toggled filter), and <code>disabled</code> to block interaction.</p>
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FishButton selected>Selected</FishButton></td>
                        <td><code>&lt;FishButton selected&gt;Selected&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton secondary selected>Selected</FishButton></td>
                        <td><code>&lt;FishButton secondary selected&gt;Selected&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton disabled>Disabled</FishButton></td>
                        <td><code>&lt;FishButton disabled&gt;Disabled&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton secondary disabled>Disabled</FishButton></td>
                        <td><code>&lt;FishButton secondary disabled&gt;Disabled&lt;/FishButton&gt;</code></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>As a Link</h2>
            <p>Pass a <code>to</code> prop to render a <code>&lt;NuxtLink&gt;</code> instead of a <code>&lt;button&gt;</code>. All visual variants work identically.</p>
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FishButton to="/home">Go Home</FishButton></td>
                        <td><code>&lt;FishButton to="/home"&gt;Go Home&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton to="/about" secondary>About</FishButton></td>
                        <td><code>&lt;FishButton to="/about" secondary&gt;About&lt;/FishButton&gt;</code></td>
                    </tr>
                    <tr>
                        <td><FishButton to="/docs" simple>Read Docs</FishButton></td>
                        <td><code>{{ '<FishButton to="/docs" simple>Read Docs</FishButton>' }}</code></td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Accessibility note:</strong> When rendered as a link, the <code>disabled</code> prop sets the HTML <code>disabled</code> attribute on the <code>&lt;NuxtLink&gt;</code> and applies <code>pointer-events: none</code> via CSS. For full accessibility, consider also setting <code>aria-disabled="true"</code> manually on the parent.</p>
        </section>

        <section>
            <h2>API Reference</h2>
            <table>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>to</code></td>
                        <td>String</td>
                        <td>empty string</td>
                        <td>Route path. When provided, renders a <code>&lt;NuxtLink&gt;</code> instead of a <code>&lt;button&gt;</code>.</td>
                    </tr>
                    <tr>
                        <td><code>secondary</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Uses the secondary background color with primary text.</td>
                    </tr>
                    <tr>
                        <td><code>simple</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Transparent background, no shadow. Behaves like an inline text link.</td>
                    </tr>
                    <tr>
                        <td><code>big</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Increases padding and gap for a larger tap target.</td>
                    </tr>
                    <tr>
                        <td><code>small</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Reduces font size for dense UI contexts.</td>
                    </tr>
                    <tr>
                        <td><code>round</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Makes the button perfectly circular. Best paired with a single icon or character.</td>
                    </tr>
                    <tr>
                        <td><code>chip</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Pill-shaped, compact, no uppercase or letter-spacing. Good for tags and filters.</td>
                    </tr>
                    <tr>
                        <td><code>selected</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Applies a persistent hover/active brightness. Useful for toggled states.</td>
                    </tr>
                    <tr>
                        <td><code>disabled</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Reduces opacity to 30% and blocks all pointer events.</td>
                    </tr>
                    <tr>
                        <td><code>error</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Uses the error color for destructive actions.</td>
                    </tr>
                    <tr>
                        <td><code>success</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>Uses the success color for confirmations or positive actions.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Slots:</strong> FishButton uses a single default slot for its label content. You can place text, icons, or any inline elements inside.</p>
        </section>
    </div>
</template>

<style scoped>
p, h3, h2, h1 {
    margin: 1rem 0;
}
</style>
