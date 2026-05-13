<template>
  <section>
    <p>Use the <code>{{ '<FishCheckbox>' }}</code> element for boolean inputs.</p>
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
          <td><FishCheckbox /></td>
        </tr>
        <tr>
          <td><code>label</code></td>
          <td>String</td>
          <td>Adds a label to the left of the checkbox</td>
          <td><FishCheckbox label="Label" /></td>
        </tr>
        <tr>
          <td><code>small</code></td>
          <td>Boolean</td>
          <td>Styling change</td>
          <td><FishCheckbox small /></td>
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
          <td>Border radius of the checkbox and its inner indicator</td>
        </tr>
        <tr>
          <td>--recessed-shadow</td>
          <td>Inset shadow on the unchecked checkbox</td>
        </tr>
        <tr>
          <td>--highlight-shadow</td>
          <td>Drop shadow on the checked indicator</td>
        </tr>
        <tr>
          <td>--slightly-dark</td>
          <td>Background color of the checkbox</td>
        </tr>
        <tr>
          <td>--primary</td>
          <td>Color of the checked indicator</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
