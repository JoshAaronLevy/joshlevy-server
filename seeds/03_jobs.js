exports.seed = function (knex, Promise) {
  return knex('jobs').del()
    .then(function () {
      return knex('jobs').insert([
        {
          id: 1,
          company: 'Accenture',
          title: 'Sr. Front-End Developer',
          startDate: '11/21/2018',
          endDate: 'Current',
          description: [
            'Designed, developed, and currently maintain an end-to-end enterprise-scale UI in Angular 7, from inception to MVP delivery ahead of schedule.',
            'Manage two junior developers, helping grow their skills, while delegating user stories that will maximize their impact for their skill level.',
            'Work closely with the business-side daily to determine user stories and priorities, while adhering to strict rules and regulations in the healthcare sector.',
            'Deliver bi-weekly presentations of the UI to business management, demonstrating the consistent development of the product centered around business value.'
          ]
        },
        {
          id: 2,
          company: 'Galvanize - Learn to Code',
          title: 'Co-Organizer/Lead Instructor',
          startDate: '05/01/2018',
          endDate: '10/30/2018',
          description: [
            'One of three volunteer lead instructors of a weekly Learn to Code program.',
            'Delivered engaging classroom lectures on HTML, CSS and VanillaJS tostudents brand new to coding.',
            'Managed and developed the Teaching Assistants.'
          ]
        },
        {
          id: 3,
          company: 'Freelance',
          title: 'Web Designer/Developer',
          startDate: '04/01/2014',
          endDate: '08/30/2017',
          description: [
            'Developed a full-stack web app with AngularJS, NodeJS and Parse.',
            'Developed and maintained four separate client sites in WordPress, adheringto strict deadlines.',
            'Created and managed over 20 SEM and paid advertising campaigns, yieldinga 59% increase in ad revenue for clients.'
          ]
        }
      ]);
    });
};