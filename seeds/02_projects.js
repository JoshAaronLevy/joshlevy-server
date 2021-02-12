exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
      {
        id: 1,
        name: 'gitquick',
        date: '10/20/2019',
        snippet: `Your git commit best friend.`,
        description: `Simplify your git add, commit, and push in one easy command.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: null,
        githubUrl: 'https://github.com/joshaaronlevy/gitquick',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 2,
        name: 'Portfolio',
        date: '11/01/2018',
        snippet: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        description: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://joshlevy.tech/',
        githubUrl: 'https://github.com/JoshAaronLevy/joshlevy.tech',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 3,
        name: 'Impostor Coding',
        date: '10/20/2018',
        snippet: `Embrace your Impostor Syndrome.`,
        description: `A blog about all things web development.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://impostorcoding.com/',
        githubUrl: 'https://github.com/JoshAaronLevy/impostorcoding',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 4,
        name: 'PostureMom',
        date: '09/15/2018',
        snippet: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        description: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: `https://www.youtube.com/watch?v=M1_SJuy5KPI&feature=youtu.be`,
        deployedUrl: null,
        githubUrl: 'https://github.com/JoshAaronLevy/posturemom-app/',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 5,
        name: 'Bad Movie Night',
        date: '07/12/2018',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://bad-movie-night.firebaseapp.com',
        githubUrl: 'https://github.com/joshaaronlevy/bad-movie-night'
      }
    ]);
    });
};