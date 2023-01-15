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



openDownMenu();