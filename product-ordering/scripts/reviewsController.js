const comments = require("./reviewsFactory");

const writeTrollStuff = {

    "addComments": function () {
        comments.comments().forEach(comment => {
            let commentEl = document.querySelector(comment.id);
            let newP = document.createElement("p")
            newP.innerHTML = comment.comments;
            commentEl.appendChild(newP)
        })
    }

}

module.exports = writeTrollStuff;
