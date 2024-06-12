const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
    require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
    require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const fs = require('fs')

module.exports = defineConfig({
    chromeWebSecurity: false,
    env: {
        alertFilePath: 'assets/alert-text.txt'
    },
    e2e: {
        specPattern: '**/*.feature',
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config)

            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)]
            })
            on('file:preprocessor', bundler)

            on('task', {
                readFile(filePath: string) {
                    return new Promise((resolve, reject) => {
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(data)
                            }
                        })
                    })
                }
            })

            return config
        }
    }
})
