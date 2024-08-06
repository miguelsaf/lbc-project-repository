const projectForm = document.querySelector("#create-project-form");

projectForm.onsubmit = async function(evt) {
  evt.preventDefault();
  const projectRequest = {
    "title": document.querySelector("#title").value,
    "description": document.querySelector("#description").value,
    "course": document.querySelector("#course").value,
    "gitUrl": document.querySelector("#gitUrl").value,
    "websiteUrl": document.querySelector("#websiteUrl").value,
    "year": document.querySelector("#year").value,
    "teamName": document.querySelector("#teamName").value,
    "dev1": document.querySelector("#dev1").value,
    "dev2": document.querySelector("#dev2").value,
    "dev3": document.querySelector("#dev3").value,
    "dev4": document.querySelector("#dev4").value,
  }
  axios.post("https://62xhyw6tad.execute-api.us-west-2.amazonaws.com/dev/projects", projectRequest)
  .then((res) => {
    console.log(res);
    window.location.href = '/home.html';
  })
  .catch(error => {
    console.error('Error', error);
  });
}