import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";

const sleep = t => new Promise(res => setTimeout(res, t));

const typeInElement = async (mobileElement, text) => {
    await mobileElement.replaceText(text);
    await mobileElement.tapReturnKey();
}

setDefaultTimeout(120 * 1000);

When('I tap the Add Member Icon', async () => {
    await element(by.id('addMemberIcon')).tap()
});

Then('I type {string} as Name and {string} as Surname', async (name, surname) => {
    await element(by.id('formInput-name')).typeText(name);
    await element(by.id('formInput-surname')).typeText(surname);
    await element(by.id('formInput-surname')).tapBackspaceKey();
});

Then('I replace {string} in Name and {string} in Surname', async (name, surname) => {
    await element(by.id('formInput-name')).replaceText(name);
    await element(by.id('formInput-surname')).replaceText(surname);
    await element(by.id('formInput-surname')).tapReturnKey();
});

Then('I enter {string} in Name and {string} in Surname', async (name, surname) => {
    await typeInElement(element(by.id('formInput-name')), name);
    await typeInElement(element(by.id('formInput-surname')), surname);

    sleep(5000);
});

//Swiping actions

Then('I swipe {string} {string}', async (elementId, direction) => {
    await element(by.id(elementId)).swipe(direction);
});

Then('I swipe {string} {string} {string}', async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
});

Then('I swipe {string} {string} {string} for {float} of the screen', async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
});