exports.seed = function (knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([{
        id: 1,
        name: 'Angular 6+',
        type: 'Front-End',
        experience: '5 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Angular-Logo.png'
      }, {
        id: 2,
        name: 'React',
        type: 'Front-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/React-Logo.png'
      }, {
        id: 3,
        name: 'Vue.js',
        type: 'Front-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Vue-Logo.png'
      }, {
        id: 4,
        name: 'Node.js',
        type: 'Back-End',
        experience: '3 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/NodeJS-Logo.png'
      }, {
        id: 5,
        name: 'JavaScript',
        type: 'Front/Back-End',
        experience: '7 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/JavaScript-Logo.png'
      }, {
        id: 6,
        name: 'TypeScript',
        type: 'Front-End',
        experience: '4 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/TypeScript-Logo.png'
      }, {
        id: 7,
        name: 'Google TensorFlow',
        type: 'Front/Back End',
        experience: '>1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Tensorflow-Logo.png'
      }, {
        id: 8,
        name: 'PostgreSQL',
        type: 'Back-End',
        experience: '3 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/PostgreSQL-Logo.png'
      }, {
        id: 9,
        name: 'MongoDB',
        type: 'Back-End',
        experience: '2 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/MongoDB-Logo.png'
      }, {
        id: 10,
        name: 'Cloud Firestore',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Firestore-Logo.png'
      }, {
        id: 11,
        name: 'DynamoDB',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/DynamoDB-Logo.png'
      }, {
        id: 12,
        name: 'MySQL',
        type: 'Back-End',
        experience: '2 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/MySQL-Logo.png'
      }, {
        id: 13,
        name: 'GraphQL',
        type: 'Front-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/GraphQL-Logo.png'
      }, {
        id: 14,
        name: 'Knex.js',
        type: 'Back-End',
        experience: '2 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/KnexJS-Logo.png'
      }, {
        id: 15,
        name: 'Mongoose',
        type: 'Back-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Mongoose-Logo.png'
      }, {
        id: 16,
        name: 'Passport.js',
        type: 'Back-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Passport-Logo.png'
      }, {
        id: 17,
        name: 'Stripe',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Stripe-Logo.png'
      }, {
        id: 18,
        name: 'RESTful API',
        type: 'Back-End',
        experience: '5 Years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/RestAPI-Logo.png'
      }, {
        id: 19,
        name: 'Git',
        type: 'Front/Back-End',
        experience: '7 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Git-Logo.png'
      }, {
        id: 20,
        name: 'AWS',
        type: 'Back-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/AWS-Logo.png'
      }, {
        id: 21,
        name: 'Firebase',
        type: 'Back-End',
        experience: '2 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Firebase-Logo.png'
      }, {
        id: 22,
        name: 'Heroku',
        type: 'Back-End',
        experience: '3 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Heroku-Logo.png'
      }, {
        id: 23,
        name: 'Docker',
        type: 'Back-End',
        experience: '1 year',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Docker-Logo.png'
      }, {
        id: 24,
        name: 'Bootstrap 3 & 4',
        type: 'Front-End',
        experience: '7 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/Bootstrap-Logo.png'
      }, {
        id: 25,
        name: 'HTML5',
        type: 'Front-End',
        experience: '7 years',
        img: 'https://joshlevyportfolio.s3-us-west-2.amazonaws.com/skills/HTML5-Logo.png'
      }, {
        id: 26,
        name: 'SASS',
        type: 'Front-End',
        experience: '7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Sass-Logo.png'
      }, {
        id: 27,
        name: 'LESS',
        type: 'Front-End',
        experience: '7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Less-Logo.png'
      }, {
        id: 28,
        name: 'CSS3',
        type: 'Front-End',
        experience: '7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/CSS3-Logo.png'
      }]);
    });
};