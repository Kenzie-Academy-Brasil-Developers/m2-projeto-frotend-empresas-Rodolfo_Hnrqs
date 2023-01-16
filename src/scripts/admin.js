function renderDepartments(){
    const departamentsContainer = document.querySelector(".departamentBox");
    departments.forEach(depart => {
        const departCard = document.createElement("div");
        const departTitle = document.createElement("h3");
        const departDesc = document.createElement("p");
        const departCompany = document.createElement("span");
        const divFooter = document.createElement("div");
        const viewButton = document.createElement("button");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const viewImg = document.createElement("img");
        const editImg = document.createElement("img");
        const deleteImg = document.createElement("img");

        departCard.classList.add("departamentCard");
        departTitle.innerText = `${depart.name}`;
        departDesc.innerText = `${depart.description}`;
        departCompany.innerText = `${depart.company}`;
        divFooter.classList.add("buttonsFooter");
        viewButton.classList.add("viewBtn");
        editButton.classList.add("editBtn");
        deleteButton.classList.add("deleteBtn");
        viewImg.src = "/src/assets/icons/viewVector.svg";
        editImg.src = "/src/assets/icons/editVector.svg";
        deleteImg.src = "/src/assets/icons/deleteVector.svg";

        departamentsContainer.appendChild(departCard);
        departCard.append(departTitle, departDesc, departCompany, divFooter);
        divFooter.append(viewButton, editButton, deleteButton);
        viewButton.appendChild(viewImg);
        editButton.appendChild(editImg);
        deleteButton.appendChild(deleteImg);
    });

}

function renderUsers(){
    const usersContainer = document.querySelector(".userBox");
    users.forEach(user => {
        const userCard = document.createElement("div");
        const userTitle = document.createElement("h3");
        const userLevel = document.createElement("p");
        const userCompany = document.createElement("span");
        const divFooter = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const editImg = document.createElement("img");
        const deleteImg = document.createElement("img");

        userCard.classList.add("userCard");
        userTitle.innerText = `${user.name}`;
        userLevel.innerText = `${user.nivel}`;
        userCompany.innerText = `${user.company}`;
        divFooter.classList.add("userButtonsFooter");
        editButton.classList.add("userEditBtn");
        deleteButton.classList.add("userDeleteBtn");
        editImg.src = "/src/assets/icons/coloredEdit.svg";
        deleteImg.src = "/src/assets/icons/deleteVector.svg";

        usersContainer.appendChild(userCard);
        userCard.append(userTitle, userLevel, userCompany, divFooter);
        divFooter.append(editButton, deleteButton);
        editButton.appendChild(editImg);
        deleteButton.appendChild(deleteImg);
    });

}

renderDepartments();
renderUsers();
