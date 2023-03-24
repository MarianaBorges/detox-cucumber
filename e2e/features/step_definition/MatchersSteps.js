import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

When('I tap on Count Days by label', async () => {
    await element(by.text('Count_Days_Label')).tap();
})

Given('I tap on the Count', async () => {
    await element(by.text('Counters')).tap();
})

When('I tap on Count Days by text', async () => {
    await element(by.text('Count Days')).tap();
})

Then('I tap on Count Cars by text', async () => {
    await element(by.text('Count Cars')).tap();
})

Then('I tap on Count Heads by text', async () => {
    await element(by.text('Count Heads')).tap();
})

Then('I tap on Count Tips by text', async () => {
    await element(by.text('Count Tips')).tap();
})