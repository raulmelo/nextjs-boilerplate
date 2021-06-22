module.exports = function (plop) {
  // eslint-disable-next-line no-unused-expressions
  plop.setGenerator('Página', {
    description: 'Criar uma nova página na aplicação',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome da página:'
      },
      {
        type: 'confirm',
        name: 'hasCss',
        message: 'Adicionar css',
        default: true
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Inserir fluxo existente',
        default: ''
      }
    ],
    actions: function (data) {
      data.page = true
      var actions = [
        {
          type: 'add',
          path: '../src/pages/{{dashCase folder}}/{{camelCase name}}/index.tsx',
          templateFile: 'templates/page.hbs'
        }
      ]
      if (data.hasCss) {
        actions.push({
          type: 'add',
          path: '../src/pages/{{dashCase folder}}/{{camelCase name}}/{{pascalCase name}}page.module.scss',
          templateFile: 'templates/styles.hbs'
        })
      }
      return actions
    }
  }),
  plop.setGenerator('Componente', {
      description: 'Criar um novo componente',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Nome do componente?'
        },
        {
          type: 'confirm',
          name: 'hasCss',
          message: 'Adicionar css',
          default: true
        },
        {
          type: 'confirm',
          name: 'hasStorybook',
          message: 'Adicionar MDX storybook',
          default: false
        }
      ],
      actions: function (data) {
        data.page = false
        var actions = [
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/component.hbs'
          }
        ]

        if (data.hasCss) {
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
            templateFile: 'templates/styles.hbs'
          })
        }
        if (data.hasStorybook) {
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
            templateFile: 'templates/stories.hbs'
          })
        }
        return actions
      }
    })
}
