<template>
    <section>
        <h1>Buttons</h1>

        <p>Use the <code>{{ '<FishButton>' }}</code> element for buttons and navigational links.</p>

        <h2 style="text-align: start; margin-top: 2rem; margin-bottom: 1rem;">Props</h2>

        <table>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Data type</th>
                    <th>Use</th>
                    <th>Render</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>None</td>
                    <td>N/A</td>
                    <td>Default primary button</td>
                    <td><FishButton>Button</FishButton></td>
                </tr>

                <tr>
                    <td><code>to="/example"</code></td>
                    <td>String</td>
                    <td>Renders the button as a NuxtLink</td>
                    <td><FishButton to="/example">Link Button</FishButton></td>
                </tr>

                <tr>
                    <td><code>variant="simple"</code></td>
                    <td>Boolean</td>
                    <td>Minimal text-only button style</td>
                    <td><FishButton variant="simple">Simple</FishButton></td>
                </tr>

                <tr>
                    <td><code>variant="secondary"</code></td>
                    <td>Boolean</td>
                    <td>Minimal border-based button style</td>
                    <td><FishButton variant="secondary">Secondary Button</FishButton></td>
                </tr>

                <tr>
                    <td><code>size="large"</code></td>
                    <td>Boolean</td>
                    <td>Increases button padding and spacing</td>
                    <td><FishButton size="large">Large Button</FishButton></td>
                </tr>

                <tr>
                    <td><code>size="small"</code></td>
                    <td>Boolean</td>
                    <td>Uses a smaller font size</td>
                    <td><FishButton size="small">Small Button</FishButton></td>
                </tr>

                <tr>
                    <td><code>selected</code></td>
                    <td>Boolean</td>
                    <td>Applies the selected/hovered visual state</td>
                    <td><FishButton selected>Selected</FishButton></td>
                </tr>

                <tr>
                    <td><code>disabled</code></td>
                    <td>Boolean</td>
                    <td>Disables interaction and lowers opacity</td>
                    <td><FishButton disabled>Disabled</FishButton></td>
                </tr>

                <tr>
                    <td><code>success</code></td>
                    <td>Boolean</td>
                    <td>Uses the success color palette</td>
                    <td><FishButton role="success">Success</FishButton></td>
                </tr>

                <tr>
                    <td><code>role="danger"</code></td>
                    <td>Boolean</td>
                    <td>Uses the error color palette</td>
                    <td><FishButton role="danger">Danger</FishButton></td>
                </tr>

                <tr>
                    <td><code>round</code></td>
                    <td>Boolean</td>
                    <td>Creates a circular icon-style button</td>
                    <td>
                        <FishButton round>
                            <Icon name="mdi:heart" />
                        </FishButton>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 style="text-align: start; margin-top: 2rem; margin-bottom: 1rem;">Variables</h2>

        <table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Use</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>--primary</td>
                    <td>Background color of the default button</td>
                </tr>

                <tr>
                    <td>--secondary</td>
                    <td>Background color of secondary buttons</td>
                </tr>

                <tr>
                    <td>--success</td>
                    <td>Background color of success buttons</td>
                </tr>

                <tr>
                    <td>--error</td>
                    <td>Background color of error buttons</td>
                </tr>

                <tr>
                    <td>--white</td>
                    <td>Text color of default buttons</td>
                </tr>

                <tr>
                    <td>--text-primary</td>
                    <td>Text color of secondary and active simple buttons</td>
                </tr>

                <tr>
                    <td>--text-secondary</td>
                    <td>Text color of simple buttons</td>
                </tr>

                <tr>
                    <td>--border-radius</td>
                    <td>Border radius of buttons</td>
                </tr>

                <tr>
                    <td>--fast</td>
                    <td>Transition duration for hover and active states</td>
                </tr>

                <tr>
                    <td>--small</td>
                    <td>Line height used for button text</td>
                </tr>

                <tr>
                    <td>--tiny</td>
                    <td>Font size used for small buttons</td>
                </tr>

                <tr>
                    <td>--bold-weight</td>
                    <td>Font weight used for button text</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
