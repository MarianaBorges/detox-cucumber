import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { init, cleanup } from detox;
import { detox as config } from '../../../package.json';

BeforeAll({timeout: 60 * 10000}, async () => {
    await init(config);
});

Before(async () => {
    await device.launchApp({ newInstance });
});

AfterAll(async () => {
    await cleanup();
})