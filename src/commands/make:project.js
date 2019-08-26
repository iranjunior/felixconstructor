module.exports = {
  name: 'make:project',
  run: async toolbox => {
    const { createFoldTests } = toolbox

    await createFoldTests()
  }
}
