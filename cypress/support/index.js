// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        const videoFileName = `${Cypress.spec.name}.mp4`
        addContext({ test }, "Below is the attached screenshot of failed scenario. If not visible then it might have failed in before hook")
        addContext({ test }, `assets/failedScreenshots/${Cypress.spec.name}/${screenshotFileName}`)
        addContext({ test }, "Below is the attached video of complete failed spec (not just scenario)")
        addContext({ test }, `assets/failedVideos/${videoFileName}`)
    }
})