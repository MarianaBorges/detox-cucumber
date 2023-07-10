import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import detox from "detox/internals";
import { detox as config } from '../../../package.json';

BeforeAll({timeout: 60 * 10000}, async () => {
    await detox.init();
});

Before(async () => {
    await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
    await detox.cleanup();
})