exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
      {
        id: 1,
        name: 'Bad Movie Night',
        date: 'Jul 2018',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://bad-movie-night.firebaseapp.com',
        githubURL: 'https://github.com/joshaaronlevy/bad-movie-night'
      }, {
        id: 2,
        name: 'Portfolio',
        date: 'Aug 2018',
        snippet: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        description: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://joshlevy.tech/',
        githubURL: 'https://github.com/JoshAaronLevy/portfolio'
      }, {
        id: 3,
        name: 'Dev Videos',
        date: 'Aug 2018',
        snippet: `Full CRUD. Find developer videos easily with intuitive filters. Built with Vue.js and MongoDB.`,
        description: `Full CRUD. Find developer videos easily with intuitive filters. Built with Vue.js and MongoDB.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://g90-videos.firebaseapp.com/',
        githubURL: 'https://github.com/JoshAaronLevy/gvideos-client'
      }, {
        id: 4,
        name: 'PostureMom',
        date: 'Sep 2018',
        snippet: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        description: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: `https://www.youtube.com/watch?v=M1_SJuy5KPI&feature=youtu.be`,
        deployedURL: null,
        githubURL: 'https://github.com/JoshAaronLevy/posturemom-app/'
      }, {
        id: 5,
        name: 'Coding Roadmap',
        date: 'Oct 2018',
        snippet: `A blog about all things web development.`,
        description: `A blog about all things web development.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://codingroadmap.com/',
        githubURL: 'https://github.com/JoshAaronLevy/coding-roadmap'
      }, {
        id: 6,
        name: 'Angular Books',
        date: 'Nov 2018',
        snippet: `A side project showcasing my 10 favorite books. Built with Angular 6.`,
        description: `A side project showcasing my 10 favorite books. Built with Angular 6.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://angular-bookstore.firebaseapp.com/books',
        githubURL: 'https://github.com/JoshAaronLevy/angular-bookstore'
      }
    ]);
    });
};