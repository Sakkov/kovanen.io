document.getElementById("testingapi").addEventListener("submit", getResult);

function getResult(e) {
    e.preventDefault();

    let input = document.getElementById("testingapi-in").value;

    fetch(`http://127.0.0.1:8000/`, {method: "GET"})
        .then(res => {res.json()})
        .then(data => console.log(data))
}