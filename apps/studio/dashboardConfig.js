export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'm4d0/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '61e89b7d910d0b4cf56d3004',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-jzz8byk6',
                  apiId: '2206ae3d-bc32-47a4-90cd-0a155e22d2a9'
                },
                {
                  buildHookId: '61e89b7d1b8cc6468e911f13',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-sd7tp5m5',
                  apiId: 'eb69f687-bced-4ce3-9639-3899973a8545'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/m4d0/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-sd7tp5m5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
