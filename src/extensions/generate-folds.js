module.exports = toolbox => {
  const {
    template,
    filesystem,
    print: { success, error, info }
  } = toolbox

  async function createFoldTests() {
    await template.generate({
      template: 'tests.js.ejs',
      target: '__tests__/Units/test.spec.js',
      props: {
        typeTest: 'Units'
      }
    })

    success('Folder created with success !!')
  }
  toolbox.createFoldTests = createFoldTests
}
