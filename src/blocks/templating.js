document.addEventListener('DOMContentLoaded', function () {

  const userList = [
    {
      name: 'suzy',
      bday: '01.02.1980',
      phone: '964-52-34',
      mail: 'suzy@gmail.com',
      job: 'head HR'
    },
    {
      name: 'alex',
      bday: '12.07.1990',
      phone: '435-42-76',
      mail: 'alex@gmail.com',
      job: 'senior web dev'
    },
    {
      name: 'megan',
      bday: '09.11.1994',
      phone: '365-79-12',
      mail: 'megan@hotmail.com',
      job: 'sales manager'
    },
    {
      name: 'greg',
      bday: '26.04.1987',
      phone: '328-91-73',
      mail: 'greg@gmail.com',
      job: 'team lead'
    }
  ];

  // Variable to store template html code
  const templateHTML = document.querySelector('#user-card-tmpl').innerHTML;

  generateResigTmpl(templateHTML, {
    data: userList
  });

  generateLodashTmpl(templateHTML, {
    data: userList
  });

  function generateResigTmpl(template ,obj) {
    let content = tmpl(template, obj);
    let resigContainer = document.querySelector('.resig-tmpl');

    resigContainer.innerHTML += content;
  }

  function generateLodashTmpl(template, obj) {
    let lodashTmpl = _.template(template);
    let content = lodashTmpl(obj);
    let lodashContainer = document.querySelector('.lodash-tmpl');

    lodashContainer.innerHTML += content;
  }

});
