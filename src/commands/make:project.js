module.exports = {
  name: 'make:project',
  run: async toolbox => {
    const {
      createFoldTests,
      print: { info },
      parameters
    } = toolbox

    console.log(parameters.first)
    await createFoldTests(parameters.first)
    info(`cd ${parameters.first}`)
    info(`yarn install`)
  }
}
