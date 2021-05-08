const ghpages = require('gh-pages')

ghpages.publish(
  'build',
  {
    repo: 'https://github.com/Abhilashkashyap96/Portfolio-Website.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
