<template>
    <div style="padding-top: 4rem">
        <section>
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

        <section>
            <span>Section</span>
            <h2>Heading 2</h2>
            <FishRow>
                <span style="flex: 100%;">Row</span>

                <FishColumn small>
                    <span>Small column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishButton primary>Primary</FishButton>
                        <FishButton round primary><Icon name="mdi:account"/></FishButton>
                        <FishButton round secondary><Icon name="mdi:account"/></FishButton>
                        <FishButton round simple><Icon name="mdi:account"/></FishButton>
                        <FishButton primary><Icon name="mdi:account"/>Icon</FishButton>
                        <FishButton secondary>Secondary</FishButton>
                        <FishButton error>Error</FishButton>
                        <FishButton simple>Simple</FishButton>
                        <FishButton primary disabled>Disabled Primary</FishButton>
                        <FishButton secondary disabled>Disabled Secondary</FishButton>
                        <FishButton simple disabled>Disabled Simple</FishButton>
                    </div>
                </FishColumn>

                <FishColumn big>
                    <span>Big column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishButton big primary>Big Primary</FishButton>
                        <FishButton big secondary>Big Secondary</FishButton>
                        <FishButton big simple>Big Simple</FishButton>
                    </div>
                    <div class="card">
                        <span>Card</span>
                        <FishCheckbox label="Checkbox"/>
                        <FishTextField label="Text field" placeholder="Placeholder"/>
                        <FishDropdown label="Dropdown" placeholder="Placeholder" :options="['Option 1', 'Option 2', 'Option 3']"/>
                        <FishTextArea label="Text area" placeholder="Placeholder"/>
                    </div>
                </FishColumn>
                <FishColumn>
                    <span>Column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishRow>
                            <span style="flex: 100%;">Row</span>
                            <FishButton primary chip>chip</FishButton>
                            <FishButton primary chip>chip</FishButton>
                            <FishButton primary chip>chip</FishButton>
                        </FishRow>
                    </div>
                    <div class="card">
                        <span>Card</span>
                    </div>
                </FishColumn>
            </FishRow>
        </section>
    </div>
</template>
