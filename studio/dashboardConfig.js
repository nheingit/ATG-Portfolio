export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '602855051a7fecf5a958dff0',
                  title: 'Sanity Studio',
                  name: 'atg-portfolio-studio',
                  apiId: '9a339cd4-cb9c-4bb8-904c-e6896895b758'
                },
                {
                  buildHookId: '6028550537f509ee4648ea2a',
                  title: 'Portfolio Website',
                  name: 'atg-portfolio',
                  apiId: '25f522f6-e40d-4681-8d75-94c42563e1e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nheingit/ATG-Portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://atg-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
