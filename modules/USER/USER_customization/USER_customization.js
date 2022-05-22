export function modal_USER_customization_Load() {

    let modal_USER_customization_button = document.getElementById("modal_USER_customization_button")

    let modal_USER_customization = document.createElement("div");
    modal_USER_customization.id = "modal_USER_customization";

    let modal_USER_customization_content = document.createElement("div");
    modal_USER_customization_content.id = "modal_USER_customization_content";
    modal_USER_customization_content.innerText = "I'm modal";

    modal_USER_customization_button.addEventListener('click', () => {
        modal_USER_customization.style.display = "block";
        console.log(modal_USER_customization.style.display)
    });

    window.addEventListener('click', () => {

        if (event.target == modal_USER_customization) {
            modal_USER_customization.style.display = "none";
        }
    })

    modal_USER_customization.appendChild(modal_USER_customization_content);
    document.body.appendChild(modal_USER_customization);

}