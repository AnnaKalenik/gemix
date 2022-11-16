export default function accordion() {
    const accord = document.querySelectorAll(".faq__accordion");

    for (let i = 0; i < accord.length; i++) {
        accord[i].addEventListener("click", function() {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.querySelector(".faq__btn").classList.remove("faq__btn_active");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.querySelector(".faq__btn").classList.add("faq__btn_active");
            }  
        });
    }
}
