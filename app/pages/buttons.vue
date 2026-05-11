<template>
<section>
    <p>Use the {{ '<FishButton>' }} element for buttons and links.</p>

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
                <td><FishButton>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td>Makes the button unclickable</td>
                <td><FishButton disabled>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>secondary</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton secondary>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>simple</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton simple>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>success</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton success>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>error</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton error>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>big</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton big>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>small</code></td>
                <td>Boolean</td>
                <td>Styling change</td>
                <td><FishButton small>Button</FishButton></td>
            </tr>
            <tr>
                <td><code>to</code></td>
                <td>String</td>
                <td>Provides a path for the button to link to</td>
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
                <td>--primary</td>
                <td>Background color of default button</td>
            </tr>
            <tr>
                <td>--secondary</td>
                <td>Background color of secondary button</td>
            </tr>
            <tr>
                <td>--ultra-light</td>
                <td>Text color of default button</td>
            </tr>
            <tr>
                <td>--muted</td>
                <td>Text color of simple button</td>
            </tr>
            <tr>
                <td>--text</td>
                <td>Text color of secondary button and hovered simple button</td>
            </tr>
            <tr>
                <td>--border-radius</td>
                <td>Border radius of buttons</td>
            </tr>
            <tr>
                <td>--highlight-shadow</td>
                <td>Highlight and drop shadow of buttons</td>
            </tr>
        </tbody>
    </table>
</section>
</template>

<script setup>

</script>

<style setup>

</style>
