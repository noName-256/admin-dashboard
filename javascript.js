let dashboardTitle=document.querySelector(".sidebar .title-section .element");
let body=document.querySelector("body");
let sidebar=document.querySelector(".sidebar");

let viewport_width = window.innerWidth;
let viewport_height = window.innerHeight;
// will be called whenever window size changes
window.addEventListener('resize', function() {
	// viewport and full window dimensions will change
	
	viewport_width = window.innerWidth;
	viewport_height = window.innerHeight;
});


if(viewport_width<600){
    body.classList.toggle("hasExtendedSidebar");
    sidebar.classList.toggle("extended"); /* turn off exteneded sidebar if on mobile/tablet/laptop */
}
function toggleSidebarExtend(){
    body.classList.toggle("hasExtendedSidebar");
    sidebar.classList.toggle("extended"); /* turn off exteneded sidebar if on mobile/tablet/laptop */
}
dashboardTitle.addEventListener("click", toggleSidebarExtend);