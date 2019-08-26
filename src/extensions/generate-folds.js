module.exports = toolbox => {
  const {
    template,
    print: { success }
  } = toolbox

  async function createFoldTests(name) {
    await template.generate({
      template: `tests.js.ejs`,
      target: `${name}/__tests__/Units/test.spec.js`,
      props: {
        typeTest: `Units`
      }
    })

    await template.generate({
      template: `tests.js.ejs`,
      target: `${name}/__tests__/Integrations/test.spec.js`,
      props: {
        typeTest: `Integrations`
      }
    })

    await template.generate({
      template: `usercontroller.js.ejs`,
      target: `${name}/src/app/controllers/userController.js`
    })

    await template.generate({
      template: `auth.js.ejs`,
      target: `${name}/src/app/middleware/auth.js`
    })

    await template.generate({
      template: `user.mongo.js.ejs`,
      target: `${name}/src/app/models/user.js`
    })

    await template.generate({
      template: `vars.js.ejs`,
      target: `${name}/src/config/vars.js`
    })

    await template.generate({
      template: `database.js.ejs`,
      target: `${name}/src/config/database.js`
    })

    await template.generate({
      template: `app.js.ejs`,
      target: `${name}/src/start/app.js`
    })

    await template.generate({
      template: `routes.js.ejs`,
      target: `${name}/src/start/route.js`
    })

    await template.generate({
      template: `index.js.ejs`,
      target: `${name}/src/start/index.js`
    })

    await template.generate({
      template: `packege.js.ejs`,
      target: `${name}/package.json`,
      props: {
        name
      }
    })

    await template.generate({
      template: `env.js.ejs`,
      target: `${name}/.env.example`
    })

    await template.generate({
      template: `env.js.ejs`,
      target: `${name}/.env`
    })

    await template.generate({
      template: `gitignore.js.ejs`,
      target: `${name}/.gitignore`
    })

    success(`Folder created with success !!`)
  }

  toolbox.createFoldTests = createFoldTests
}
