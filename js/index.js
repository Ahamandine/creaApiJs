// ----- POST FUNCTION -----

var createButton    = document.querySelector("#createButton");
var categoryName    = document.querySelector("#categoryName");

var createCategory = function(event) {
    var requestBody = {
        "name": categoryName.value
    };
    fetch("https://127.0.0.1:8000/api/categories", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then(function (response) {
        return response.json()
    })
    .then(function (responseJSON) {
        var resultDiv = document.createElement("div");
        if (responseJSON["@type"] == "hydra:Error") {
            console.log("Une erreur est survenue : " + responseJSON["hydra:description"])
            resultDiv.innerHTML = "Une erreur est survenue";
        }
        else {
            console.log(responseJSON)
            resultDiv.innerHTML = "Catégorie créée";
        }
        document.body.appendChild(resultDiv);
    })
}

createButton.addEventListener("click",createCategory);



// ----- DELETE FUNCTION -----

var deleteButton    = document.querySelector("#deleteButton");
var articleId    = document.querySelector("#articleId");

var deleteArticle = function(event) {
    var requestBody = {
        "id": articleId.value
    };
    fetch("https://127.0.0.1:8000/api/articles/410", {
        method: "DELETE",
        body: JSON.stringify(requestBody)
    }).then(function (response) {
        return response.json()
    })
    .then(function (responseJSON) {
        var resultDiv = document.createElement("div");
        if (responseJSON["@type"] == "hydra:Error") {
            console.log("Une erreur est survenue : " + responseJSON["hydra:description"])
            resultDiv.innerHTML = "Une erreur est survenue";
        }
        else {
            console.log(responseJSON)
            resultDiv.innerHTML = "Article supprimé";
        }
        document.body.appendChild(resultDiv);
    })
}

deleteButton.addEventListener("click",deleteArticle);



// ----- PATCH FUNCTION -----

var patchButton    = document.querySelector("#patchButton");
var categoryName    = document.querySelector("#categoryUpdate");

var patchCategory = function(event) {
    var requestBody = {
        "name": categoryName.value
    };
    fetch("https://127.0.0.1:8000/api/categories/32", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    }).then(function (response) {
        return response.json()
    })
    .then(function (responseJSON) {
        var resultDiv = document.createElement("div");
        if (responseJSON["@type"] == "hydra:Error") {
            console.log("Une erreur est survenue : " + responseJSON["hydra:description"])
            resultDiv.innerHTML = "Une erreur est survenue";
        }
        else {
            console.log(responseJSON)
            resultDiv.innerHTML = "Catégorie mise à jour";
        }
        document.body.appendChild(resultDiv);
    })
}

patchButton.addEventListener("click",patchCategory);
