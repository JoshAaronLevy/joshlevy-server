exports.seed = function (knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([{
        id: 1,
        name: 'React',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/React-Logo.png'
      }, {
        id: 2,
        name: 'Angular 1 & 6',
        type: 'Front-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Angular-Logo.png'
      }, {
        id: 3,
        name: 'Vue.js',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Vue-Logo.png'
      }, {
        id: 4,
        name: 'Node.js',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/NodeJS-Logo.png'
      }, {
        id: 5,
        name: 'JavaScript',
        type: 'Front/Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/JavaScript-Logo.jpg'
      }, {
        id: 6,
        name: 'TypeScript',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/TypeScript-Logo.png'
      }, {
        id: 7,
        name: 'Google TensorFlow',
        type: 'Front/Back End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Tensorflow-Logo.png'
      }, {
        id: 8,
        name: 'PostgreSQL',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/PostgreSQL-Logo.png'
      }, {
        id: 9,
        name: 'MongoDB',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/MongoDB-Logo.png'
      }, {
        id: 10,
        name: 'Cloud Firestore',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/CloudFirestore-Logo.png'
      }, {
        id: 11,
        name: 'DynamoDB',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/DynamoDB-Logo.png'
      }, {
        id: 12,
        name: 'MySQL',
        type: 'Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/MySQL-Logo.png'
      }, {
        id: 13,
        name: 'GraphQL',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/GraphQL-Logo.png'
      }, {
        id: 14,
        name: 'Knex.js',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/KnexJS-Logo.png'
      }, {
        id: 15,
        name: 'Mongoose',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Mongoose-Logo.png'
      }, {
        id: 16,
        name: 'Passport.js',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/PassportJS-Logo.png'
      }, {
        id: 17,
        name: 'Stripe',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Stripe-Logo.png'
      }, {
        id: 18,
        name: 'RESTful API',
        type: 'Back-End',
        experience: '3-5 Years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/RestAPI-Logo.png'
      }, {
        id: 19,
        name: 'Git',
        type: 'Front/Back-End',
        experience: '5-7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Git-Logo.png'
      }, {
        id: 20,
        name: 'AWS',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/AWS-Logo.png'
      }, {
        id: 21,
        name: 'Firebase',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Firebase-Logo.png'
      }, {
        id: 22,
        name: 'Heroku',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Heroku-Logo.png'
      }, {
        id: 23,
        name: 'Docker',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Docker-Logo.png'
      }, {
        id: 24,
        name: 'Bootstrap 3 & 4',
        type: 'Front-End',
        experience: '5-7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Bootstrap-Logo.png'
      }, {
        id: 25,
        name: 'HTML5',
        type: 'Front-End',
        experience: '5-7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/HTML5-Logo.png'
      }, {
        id: 26,
        name: 'SASS',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/SASS-Logo.png'
      }, {
        id: 27,
        name: 'LESS',
        type: 'Front-End',
        experience: '5-7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/LESS-Logo.png'
      }, {
        id: 28,
        name: 'CSS3',
        type: 'Front-End',
        experience: '5-7 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/CSS3-Logo.png'
      }]);
    });
};