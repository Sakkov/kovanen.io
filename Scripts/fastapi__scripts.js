// document.getElementById("testingapi").addEventListener("submit", getResult);

// function getResult(e) {
//     e.preventDefault();

//     let input = document.getElementById("testingapi-in").value;
//     console.log(input);

//     fetch(`http://192.168.0.9:8000/${input}`, {method: "GET"})
//         .then(res => res.json())
//         .then(data => {
//             for (var k in data) {
//                 console.log(data[k])
//             }
//         })
// }

fetch(`https://a5om8b.deta.dev/increment-count`, {method: "GET"})
    .then(res => res.json())
    .then(data => document.getElementById("count").innerHTML = data)