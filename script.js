const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
    "task4" : {"title" : "Project 4", "url" : "works/task4/index.html"},
    "task5" : {"title" : "Project 5", "url" : "works/task5/index.html"},

};

  
  
  function createNavBar() {
    const navbar = document.querySelector('.navbar');
    Object.keys(works).forEach(key => {
      const button = document.createElement('button');
      button.textContent = works[key].title;
      button.onclick = () => changeContent(key);
      navbar.appendChild(button);
    });
  }
  
  
  function changeContent(projectKey) {
    const content = document.querySelector('.content');
    content.innerHTML = `<iframe src="${works[projectKey].url}" width="100%" height="500px" frameborder="0"></iframe>`;
  }
  
  
  createNavBar();
  
