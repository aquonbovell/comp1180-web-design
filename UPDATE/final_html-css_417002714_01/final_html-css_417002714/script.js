window.onscroll = function () { addSticky() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function addSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
function opennav() {
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("body").style.marginLeft = "200px";
}

function closenav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
}
function myLinks() {
    document.getElementById("myLinks").classList.toggle("show-links");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.links')) {
        var dropdowns = document.getElementsByClassName("dropdown-links");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-links')) {
                openDropdown.classList.remove('show-links');
            }
        }
    }
}
function initMap() {
    var latlng = { lat: 13.100389, lng: -59.557234 };
    var map = new google.maps.Map(document.getElementById('address-map'), {
        zoom: 15,
        center: latlng
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
}