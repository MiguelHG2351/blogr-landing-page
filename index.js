const $containerDropdown = document.getElementById("header-menu");
const $btnMenu = document.getElementById("btn-menu");
const $detailsList = document.querySelectorAll('[data-dropdown]');

$detailsList.forEach(($details) => {
    $details.addEventListener('toggle', closeDropdown)
})

$btnMenu.addEventListener("click", () => {
    $containerDropdown.classList.toggle("active");
});

function closeDropdown() {
    'use strict'
    if(!this.open) {
        this.removeAttribute('open')
    } else {
        $detailsList.forEach($details => {
            if($details !== this) {
                $details.removeAttribute('open')
            }
        })
    }
}
