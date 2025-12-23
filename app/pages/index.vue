<template>
    <div>
        <section style="background-color: var(--accent);">
            <span>Section</span>
            <h1>Heading 1</h1>
            <hr>
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

        <section style="background-color: var(--accent);">
            <span>Section</span>
            <h2>Heading 2</h2>
            <div class="row">
                <span style="flex: 100%;">Row</span>

                <div class="small column">
                    <span>Small column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishButton primary>Primary</FishButton>
                        <FishButton round primary><Icon name="mdi:account"/></FishButton>
                        <FishButton round border><Icon name="mdi:account"/></FishButton>
                        <FishButton round simple><Icon name="mdi:account"/></FishButton>
                        <FishButton primary><Icon name="mdi:account"/>Icon</FishButton>
                        <FishButton border>Border</FishButton>
                        <FishButton error>Error</FishButton>
                        <FishButton simple>Simple</FishButton>
                        <FishButton primary disabled>Disabled Primary</FishButton>
                        <FishButton border disabled>Disabled Border</FishButton>
                        <FishButton simple disabled>Disabled Simple</FishButton>
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
                        <FishTextField label="Text field" placeholder="Placeholder"/>
                        <FishDropdown label="Dropdown" :options="['Option 1', 'Option 2', 'Option 3']"/>
                    </div>
                </div>

                <div class="big column">
                    <span>Big column</span>
                        <section>
                        <span>Section</span>
                        <h3>Heading 3</h3>
                        <hr>
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
    </div>
</template>
