const path = require('path')
const fs = require('fs-extra')
const templates = require('./templates')
const { fchmodSync } = require('fs-extra')

const root = path.join(__dirname, '../..')

module.exports = function writeStubs(target) {
  console.log('TARGET', target)
  const steps = target.split('/')
  const head = steps.pop()
  const name = head[0].toUpperCase() + head.slice(1)
  const out = path.join(root, ...steps, name)

  if (fs.existsSync(out)) {
    throw new Error(`Folder ${out} already exists!`)
  }
  fs.mkdirSync(out)

  const files = {
    [`${name}.test.tsx`]: templates.testTemplate,
    [`${name}.legacy.stories.tsx`]: templates.legacyStoryTemplate,
    [`${name}.tsx`]: templates.compTemplate,
    'index.ts': templates.indexTemplate,
  }

  for (const fileName of Object.keys(files)) {
    fs.writeFileSync(
      path.join(out, fileName),
      files[fileName].replace(/NAME/g, name)
    )
  }

  console.log(`Component ${name} stubbed at ${out}`)
}
