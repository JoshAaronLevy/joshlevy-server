exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([{
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
      }]);
    });
};