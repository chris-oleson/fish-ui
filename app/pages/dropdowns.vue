<template>
<section>
    <p>Use the {{ '<FishDropdown>' }} element for select inputs.</p>
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
                    <td>N/A</td>
                    <td><FishDropdown :options="['Option 1', 'Option 2', 'Option 3']" /></td>
                </tr>
                <tr>
                    <td><code>label</code></td>
                    <td>String</td>
                    <td>Adds a label to the left of the dropdown</td>
                    <td><FishDropdown label="Label" :options="['Option 1', 'Option 2', 'Option 3']" /></td>
                </tr>
                <tr>
                    <td><code>placeholder</code></td>
                    <td>String</td>
                    <td>Text shown when no value is selected</td>
                    <td><FishDropdown placeholder="Placeholder" :options="['Option 1', 'Option 2', 'Option 3']" /></td>
                </tr>
                <tr>
                    <td><code>options</code></td>
                    <td>Array</td>
                    <td>List of selectable options</td>
                    <td>N/A</td>
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
                    <td>--border-radius</td>
                    <td>Border radius of the input and dropdown</td>
                </tr>
                <tr>
                    <td>--recessed-shadow</td>
                    <td>Inset shadow on the input field</td>
                </tr>
                <tr>
                    <td>--highlight-shadow</td>
                    <td>Drop shadow on the open dropdown</td>
                </tr>
                <tr>
                    <td>--slightly-dark</td>
                    <td>Background color of the input field</td>
                </tr>
                <tr>
                    <td>--secondary</td>
                    <td>Background color of the open dropdown</td>
                </tr>
                <tr>
                    <td>--muted</td>
                    <td>Placeholder text color and unselected option color</td>
                </tr>
                <tr>
                    <td>--text</td>
                    <td>Option color on hover/focus</td>
                </tr>
                <tr>
                    <td>--fast</td>
                    <td>Transition duration for option hover</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
