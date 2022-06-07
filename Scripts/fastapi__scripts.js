document.getElementById("testingapi").addEventListener("submit", getResult);

function getResult(e) {
    e.preventDefault();

    let input = document.getElementById("testingapi-in").value;
    console.log(input);

    fetch(`http://192.168.0.9:8000/${input}`, {method: "GET"})
        .then(res => res.json())
        .then(data => console.log(data))
}