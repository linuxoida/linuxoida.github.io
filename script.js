
	let themeSwitch = '';
	if (!localStorage.theme) {
		localStorage.theme = "light";
	}
	if (localStorage.theme == "light") {
        $("#theme").attr("href","/lightTheme.css");
		themeSwitch = false;
	}
	else if (localStorage.theme == "dark") {
        $("#theme").attr("href","/darkTheme.css");
		themeSwitch = true;
	}
    $('.themeSwitch').click(function(){
        if(!themeSwitch) {
            $("#theme").attr("href","/darkTheme.css");
            themeSwitch = true;
			localStorage.theme = "dark";
        }
        else {
            $("#theme").attr("href","/lightTheme.css");
            themeSwitch = false;
			localStorage.theme = "light";
        }
    });
	 $("#footer").html('<div id = "underFooter"></div>© 2025 Лаптев Н.С.');
     $("head").append('<link rel="icon" href="/img/favicon.ico" type="image/x-icon">');
$( document ).ready(function() {
	let menuHamburger = true;
    $(window).resize(function() {
        if(window.screen.availWidth > 1440) {
            $("#sidebar").attr("style","");
            $("#container").attr("style","");
            $("#sidebar").removeClass('sidebarMenu');
			menuHamburger = true
        }
    });
    $('#menuHamburgerBase').click(function(){
        
        document.getElementById("sidebar").style.width = "100px";
        if(!menuHamburger) {
            $("#sidebar").removeClass('sidebarMenu');
            $("#sidebar").css("display","none");
            $("#container").css("filter","");
            $("#footer").css("filter","");
            menuHamburger = true;
        }
        else {
            $("#sidebar").addClass('sidebarMenu');
            $("#sidebar").css("display","block");
            $("#container").css("filter","blur(10px)");
            $("#footer").css("filter","blur(10px)");
            $("#container").css("user-select","none");
            menuHamburger = false;
        }
    });
    $('#container').click(function(){
		if (!menuHamburger) {
			$("#sidebar").removeClass('sidebarMenu');
            $("#sidebar").css("display","none");
            $("#container").css("filter","");
            $("#footer").css("filter","");
            menuHamburger = true;
		}
	});
});
