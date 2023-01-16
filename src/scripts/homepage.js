function openDownMenu(){
    let change = false;
    const menuBtn = document.querySelector(".openMenuBtn");
    menuBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        const buttonImage = document.querySelector(".buttonImg");
        const menu = document.querySelector(".menuDown");
        menu.classList.toggle("menuShow");
        menuBtn.classList.toggle("closeMenuBtn");
        if (change === true){
            buttonImage.src = "/src/assets/icons/menuVector.svg";
        
        }else{
            buttonImage.src = "/src/assets/icons/CloseBtn.svg";
        }
        change = !change;
    });
}


async function renderEmpresas(){
    const companyBox = document.querySelector(".companyBox");
    const listagemEmpresas = await getApiEmpresas("http://localhost:6278/companies");
    listagemEmpresas.forEach(empresa => {
        const companyDivCard = document.createElement("div");
        const companyTitle = document.createElement("h2");
        const time = document.createElement("p");
        const sector = document.createElement("span");

        companyDivCard.classList.add("companyCard");
        companyTitle.innerText = `${empresa.name}`;
        time.innerText = `${empresa.opening_hours}`;
        sector.innerText = `${empresa.sectors.description}`;

        companyBox.appendChild(companyDivCard);
        companyDivCard.append(companyTitle, time, sector);
    });
}


openDownMenu();
renderEmpresas();
