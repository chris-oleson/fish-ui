<template>
<section>
    <p>Use the <code>{{ '<FishTextField>' }}</code> element for text inputs.</p>
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
                    <td><FishTextField/></td>
                </tr>
                <tr>
                    <td><code>label</code></td>
                    <td>String</td>
                    <td>Adds a label to the left of the field</td>
                    <td><FishTextField label="Label"/></td>
                </tr>
                <tr>
                    <td><code>placeholder</code></td>
                    <td>String</td>
                    <td>Text shown when the field is empty</td>
                    <td><FishTextField placeholder="Placeholder" /></td>
                </tr>
                <tr>
                    <td><code>error</code></td>
                    <td>String</td>
                    <td>Displays an error message below the field</td>
                    <td><FishTextField label="Label" error="This is an error" /></td>
                </tr>
                <tr>
                    <td><code>password</code></td>
                    <td>Boolean</td>
                    <td>Masks input and adds a show/hide toggle</td>
                    <td><FishTextField password/></td>
                </tr>
                <tr>
                    <td><code>email</code></td>
                    <td>Boolean</td>
                    <td>Sets input type to email</td>
                    <td><FishTextField email /></td>
                </tr>
                <tr>
                    <td><code>big</code></td>
                    <td>Boolean</td>
                    <td>Styling change</td>
                    <td><FishTextField big /></td>
                </tr>
                <tr>
                    <td><code>focus</code></td>
                    <td>Boolean</td>
                    <td>Autofocuses the field on mount</td>
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
                    <td>Border radius of the input field</td>
                </tr>
                <tr>
                    <td>--recessed-shadow</td>
                    <td>Inset shadow on the input field</td>
                </tr>
                <tr>
                    <td>--slightly-dark</td>
                    <td>Background color of the input field</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
