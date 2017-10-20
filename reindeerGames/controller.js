const calledReindeer = JSON.parse(localStorage.getItem("reindeerDB"));
console.log(calledReindeer);
const sleighLandingTarget = document.getElementById("colored-reindeer");

for (let d in calledReindeer) {
    let currentObject = calledReindeer[d];
    sleighLandingTarget.innerHTML += `
    <section style="color:${currentObject.color}">${currentObject.name}<section>
    `
}
sleighLandingTarget.innerHTML += `
<iframe src="https://giphy.com/embed/74v4r30Pow956" width="480" height="296" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>
<p>Dang....left out again</p>
`