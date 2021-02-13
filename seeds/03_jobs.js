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
          description: {
            results: [
              {
                id: 1,
                responsibility: 'Designed, developed, and currently maintain an end-to-end enterprise-scale UI in Angular 7, from inception to MVP delivery ahead of schedule.'
              },
              {
                id: 2,
                responsibility: 'Manage two junior developers, helping grow their skills, while delegating user stories that will maximize their impact for their skill level.'
              },
              {
                id: 3,
                responsibility: 'Work closely with the business-side daily to determine user stories and priorities, while adhering to strict rules and regulations in the healthcare sector.'
              },
              {
                id: 4,
                responsibility: 'Deliver bi-weekly presentations of the UI to business management, demonstrating the consistent development of the product centered around business value.'
              }
            ]
          }
        },
        {
          id: 2,
          company: 'Galvanize - Learn to Code',
          title: 'Co-Organizer/Lead Instructor',
          startDate: '05/01/2018',
          endDate: '10/30/2018',
          description: {
            results: [
              {
                id: 1,
                responsibility: 'One of three volunteer lead instructors of a weekly Learn to Code program.'
              },
              {
                id: 2,
                responsibility: 'Delivered engaging classroom lectures on HTML, CSS and VanillaJS tostudents brand new to coding.'
              },
              {
                id: 3,
                responsibility: 'Managed and developed the Teaching Assistants.'
              }
            ]
          }
        },
        {
          id: 3,
          company: 'Freelance',
          title: 'Web Designer/Developer',
          startDate: '04/01/2014',
          endDate: '08/30/2017',
          description: {
            results: [
              {
                id: 1,
                responsibility: 'Developed a full-stack web app with AngularJS, NodeJS and Parse.'
              },
              {
                id: 2,
                responsibility: 'Developed and maintained four separate client sites in WordPress, adheringto strict deadlines.'
              },
              {
                id: 3,
                responsibility: 'Created and managed over 20 SEM and paid advertising campaigns, yieldinga 59% increase in ad revenue for clients.'
              }
            ]
          }
        },
        {
          id: 4,
          company: 'Hillside Software',
          title: 'Marketing and Training Manager',
          startDate: '12/01/2004',
          endDate: '03/30/2013',
          description: {
            results: [
              {
                id: 1,
                responsibility: 'Led QA reporting between development, support staff and clients.'
              },
              {
                id: 2,
                responsibility: 'Created SEO content for over 100 client websites.'
              },
              {
                id: 3,
                responsibility: 'Delivered over 100 technical training presentations.'
              }
            ]
          }
        }
      ]);
    });
};