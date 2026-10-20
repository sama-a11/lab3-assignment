
const people = [
    { name: "Samah",   age: 21, city: "Cairo" },
    { name: "Ali",     age: 25, city: "Giza" },
    { name: "Mona",    age: 19, city: "Alexandria" },
    { name: "Omar",    age: 30, city: "Cairo" },
    { name: "Nour",    age: 22, city: "Mansoura" },
    { name: "Youssef", age: 27, city: "Giza" },
    { name: "Hana",    age: 20, city: "Tanta" },
    { name: "Karim",   age: 24, city: "Alexandria" }
];

const tableBody  = document.getElementById("tableBody");
const searchBox  = document.getElementById("search");
const sortName   = document.getElementById("sortName");
const sortAge    = document.getElementById("sortAge");
const countText  = document.getElementById("count");

let searchText = "";
let sortBy = null;   

function render() {
    let rows = people.filter(function (person) {
        const text = (person.name + " " + person.age + " " + person.city).toLowerCase();
        return text.includes(searchText.toLowerCase());
    });

    if (sortBy === "name") {
        rows.sort(function (a, b) { return a.name.localeCompare(b.name); });
    } else if (sortBy === "age") {
        rows.sort(function (a, b) { return a.age - b.age; });
    }

    tableBody.innerHTML = "";

    if (rows.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 3;
        td.textContent = "No results found.";
        tr.appendChild(td);
        tableBody.appendChild(tr);
    }

    rows.forEach(function (person) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = person.name;

        const tdAge = document.createElement("td");
        tdAge.textContent = person.age;

        const tdCity = document.createElement("td");
        tdCity.textContent = person.city;

        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdCity);
        tableBody.appendChild(tr);
    });

    countText.textContent = "Showing " + rows.length + " of " + people.length + " people";
}

searchBox.addEventListener("input", function () {
    searchText = searchBox.value;
    render();
});

sortName.addEventListener("click", function () {
    sortBy = "name";
    render();
});

sortAge.addEventListener("click", function () {
    sortBy = "age";
    render();
});

render();
