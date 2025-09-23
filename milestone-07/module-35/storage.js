const handleAddToStorage = () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const data = { name, email }

    console.log(id);
    console.log(name);
    console.log(email);
    console.log(data);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem(id, JSON.stringify(data));
}

const storedItem = localStorage.getItem("1");
console.log(JSON.parse(storedItem));

const handleClear = () => {
    localStorage.clear();
}