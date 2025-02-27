
	let themeSwitch = '';
	if (!localStorage.theme) {
		localStorage.theme = "light";
	}
	if (localStorage.theme == "light") {
		document.getElementById("theme").href = "lightTheme.css";
		themeSwitch = false;
	}
	else if (localStorage.theme == "dark") {
		document.getElementById("theme").href = "darkTheme.css";
		themeSwitch = true;
	}
    $('.themeSwitch').click(function(){
        if(!themeSwitch) {
            document.getElementById("theme").href = "darkTheme.css";
            themeSwitch = true;
			localStorage.theme = "dark";
        }
        else {
            document.getElementById("theme").href = "lightTheme.css";
            themeSwitch = false;
			localStorage.theme = "light";
        }
    });
$( document ).ready(function() {
	let menuHamburger = true;
    $(window).resize(function() {
        if(window.screen.availWidth > 1440) {
            document.getElementById("sidebar").style = "";
            document.getElementById("container").style = "";
            $("#sidebar").removeClass('sidebarMenu');
			menuHamburger = true
        }
    });
    $('#menuHamburgerBase').click(function(){
        
        document.getElementById("sidebar").style.width = "100px";
        if(!menuHamburger) {
            $("#sidebar").removeClass('sidebarMenu');
            document.getElementById("sidebar").style.display = "none";
            document.getElementById("container").style.filter = "";
            menuHamburger = true;
        }
        else {
            $("#sidebar").addClass('sidebarMenu');
            document.getElementById("sidebar").style.display = "block";
            document.getElementById("container").style.filter = "blur(10px)";
			document.getElementById("container").style.userSelect = "none";
            menuHamburger = false;
        }
    });
    $('#container').click(function(){
		if (!menuHamburger) {
			$("#sidebar").removeClass('sidebarMenu');
            document.getElementById("sidebar").style.display = "none";
            document.getElementById("container").style.filter = "";
            menuHamburger = true;
		}
	});
});