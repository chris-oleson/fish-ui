<template>
    <section style="background-color: lightblue;">
        <span>Section</span>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
        </p>
        <p>
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
        </p>
    </section>

    <section style="background-color: lightgreen;">
        <span>Section</span>
        <h2>Heading 2</h2>
        <div class="row">
            <span style="flex: 100%;">Row</span>

            <div class="small column">
                <span>Small column</span>
                <div class="card">
                    <span>Card with buttons</span>
                    <FishButton primary>Primary</FishButton>
                    <FishButton border>Border</FishButton>
                    <FishButton error>Error</FishButton>
                    <FishButton simple>Simple</FishButton>
                    <FishButton primary disabled>Disabled Primary</FishButton>
                    <FishButton border disabled>Disabled Border</FishButton>
                    <FishButton simple disabled>Disabled Simple</FishButton>
                </div>

                <div class="card">
                    <span>Card</span>
                    <FishButton small primary>Small Primary</FishButton>
                    <FishButton small simple>Small Simple</FishButton>
                </div>
            </div>

            <div class="column">
                <span>Column</span>
                <div class="card">
                    <span>Card</span>
                    <FishButton big primary>Big Primary</FishButton>
                    <FishButton big border>Big Border</FishButton>
                    <FishButton big simple>Big Simple</FishButton>
                    <FishCheckbox label="Checkbox"/>
                    <FishTextField label="Text field"/>
                    <FishDropdown label="Dropdown" :options="['Option 1', 'Option 2', 'Option 3']"/>
                </div>
            </div>

            <div class="big column">
                <span>Big column</span>
                <section style="background-color: lightcoral;">
                    <span>Section</span>
                    <h3>Heading 3</h3>
                    <p>
                        Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                        Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                    </p>
                    <p>
                        Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                        Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                    </p>
                </section>
            </div>
        </div>
    </section>
</template>
