export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b7d33de1d9891bb1f64e9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mawtfogc',
                  apiId: 'f759d7ca-9b39-4be8-a065-0c11f673b408'
                },
                {
                  buildHookId: '5f8b7d330e2c91bcf8d41416',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z3ahxe6p',
                  apiId: 'f90a23a6-fb84-4391-bff4-426a030f4688'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matts213/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z3ahxe6p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
