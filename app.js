const button = document.getElementById("showBtn");
const usersContainer = document.getElementById("usersContainer");

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        usersContainer.innerHTML = "";

        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");

            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
            `;

            usersContainer.appendChild(userDiv);
        });
    } catch (error) {
        usersContainer.innerHTML = "Failed to load users";
        console.error(error);
    }
}

button.addEventListener("click", fetchUsers);