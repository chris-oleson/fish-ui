<template>
    <div style="padding-top: 4rem">
        <section>
            <span>Section</span>
            <h1>Heading 1</h1>
            <hr>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        <FishButton>Button</FishButton>
                        <FishButton round><Icon name="mdi:account"/></FishButton>
                        <FishButton round secondary><Icon name="mdi:account"/></FishButton>
                        <FishButton round simple><Icon name="mdi:account"/></FishButton>
                        <FishButton><Icon name="mdi:account"/>Icon</FishButton>
                        <FishButton secondary>Secondary</FishButton>
                        <FishButton error>Error</FishButton>
                        <FishButton simple>Simple</FishButton>
                        <FishButton disabled>Disabled Button</FishButton>
                        <FishButton secondary disabled>Disabled Secondary</FishButton>
                        <FishButton simple disabled>Disabled Simple</FishButton>
                    </div>
                </FishColumn>

                <FishColumn big>
                    <span>Big column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishButton big>Big Button</FishButton>
                        <FishButton big secondary>Big Secondary</FishButton>
                        <FishButton big simple>Big Simple</FishButton>
                    </div>
                    <div class="card">
                        <span>Card</span>
                        <FishCheckbox label="Checkbox"/>
                        <FishTextField label="Text field" placeholder="Placeholder"/>
                        <FishDropdown label="Dropdown" placeholder="Placeholder" :options="['Option 1', 'Option 2', 'Option 3']"/>

                        <div class="card">
                            <span>Card</span>
                            <FishTextArea label="Text area" placeholder="Placeholder"/>
                        </div>
                    </div>
                </FishColumn>
                <FishColumn>
                    <span>Column</span>
                    <div class="card">
                        <span>Card</span>
                        <FishRow>
                            <span style="flex: 100%;">Row</span>
                            <FishButton chip>chip</FishButton>
                            <FishButton chip>chip</FishButton>
                            <FishButton chip>chip</FishButton>
                        </FishRow>
                    </div>
                    <div class="card">
                        <span>Card</span>
                        <ul>
                            <li>This</li>
                            <li>Is</li>
                            <li>A</li>
                            <li>List</li>
                        </ul>
                    </div>
                </FishColumn>
            </FishRow>
        </section>
    </div>
</template>
