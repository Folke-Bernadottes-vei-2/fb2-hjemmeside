// This file is in 'C' style, where each function is defined before it is used
// I have tried to keep the functions short

function content_level(line) {
	if (line.length == 0)
		return -1;
	for (var i = 0; i < line.length; i++) {
		if (line.charAt(i) != "#")
			return i;
	}
	// console.log ("All #:" + line.length);
	return -1; // no end to the #s
}

function open_tag_for_lvl(lvl) {
	if (lvl == 0)
		return "<p>";
	else if (lvl > 0)
		return "<h" + lvl + ">";
	else
		return "";
}

function close_tag_for_lvl(lvl) {
	if (lvl == 0)
		return "</p>";
	else if (lvl > 0)
		return "</h" + lvl + ">";
	else
		return "";
}

// Craft the HTML from a "content" file by using marked
function make_content_marked(file) {
	return marked(file);
}

// Craft the HTML from a "content" file (not realy Markdown, but ends with .md)
function make_content(file) {
	var r = "";
	var v = file.split("\n");
	var lvl = -1; // level -1 corresponds to no open tags
	var nlvl = -1;
	for (var i = 0; i < v.length; i++) {
		var line = v[i].trim();
		// console.log(line);
		lvl = nlvl;
		nlvl = content_level(line);
		if (lvl != nlvl)
			r = r + close_tag_for_lvl(lvl) + open_tag_for_lvl(nlvl);
		if (nlvl >= 0)
			r = r + line.substring(nlvl, line.length).trim();
	}
	r = r + close_tag_for_lvl(lvl);
	// console.log(r);
	return r;
}

// This function calculates which level a menu line belongs on.
// We can expand later to allow several layers.
// For now we use significant whitespace (sorry), but that can be changed
function menu_lvl(s) {
	if (s.charAt(0) == " " || s.charAt(0) == "\t")
		return 2;
	return 1;
}

// this function creates a list item for a given line on a given level
// there is no magic "URL base" inside, it is simly "/"
function line_to_li(line, lvl, special) {
	var s = line.split(":");
	var r = s[0].trim();
	var is_special = false;
	if (s.length > 1) {
		var addr = s[1].trim();
		if (addr != "") {
			if (addr.charAt(0) != "/")
				addr = "/" + addr;
			if (addr == special)
				is_special = true;
			if (addr.length > 0) {
				if (addr.charAt(addr.length - 1) != "/")
					addr = addr + ".html";
				r = '<a href="' + addr + '">' + r + '</a>';
			}
		} else
			console.log('Empty address field for "' + line + '"');
	}
	var cl = 'm' + lvl;
	if (is_special)
		cl = cl + " highlight hl" + lvl;
	return '<li class="' + cl + '">' + r + '</li>';
}

// This function builds HTML from the menu.txt file (which will be fetched during a load) which is
// inside of the XMLHttpRequest object r
function make_menu(r) {
	var s = r.response;
	var lines = s.split("\n");
	var h = '<h1 class="menu">Meny</h1>'; // the html we want to return
	var lvl = 0; // which level are we on? We start with nothing
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if (line.trim() != "") {
			var nlvl = menu_lvl(line);
			while (nlvl > lvl) {
				lvl++;
				h = h + '<ul class="m' + lvl + '">';
			}
			while (nlvl < lvl) {
				h = h + '</ul>';
				lvl--;
			}
			h = h + line_to_li(line, lvl, r.X_URL);
		}
	}
	while (0 < lvl) {
		h = h + '</ul>';
		lvl--;
	}
	return h;
}

function menu_change() {
	var e = document.getElementById("nav");
	if(this.readyState === XMLHttpRequest.DONE) {
		e.innerHTML = make_menu(this);
	} else
		e.innerHTML = "Laster: " + this.readyState + " / 4";
}

function content_change(r) {
	var e = document.getElementById("main");
	if(this.readyState === XMLHttpRequest.DONE) {
		e.innerHTML = '<div id="innhold">&nbsp;</div>' + make_content_marked(this.response);
		document.getElementById('innhold').scrollIntoView();
	} else
		e.innerHTML = "Laster: " + this.readyState + " / 4";
}

function ol(x) {
	// console.log("Loaded and running ol(): " + x);
	if (x.charAt(0) != "/")
		x = "/" + x;
	var e = document.getElementById("load");
	e.outerHTML = '<header><h1 class="title">Sameiet Folke Bernadottes vei 2</h1></header><div class="oflex"><nav id="nav"><h3>Laster meny</h3></nav><div class="mid">&nbsp;</div><main id="main"><p>Laster innhold</p></main></div><footer><p class="p-footer"><a class="old" href="mailto:styret@fb2.no">styret@fb2.no</a></p></footer>';
	// fire off requests to build the menu and the content
	var nav = new XMLHttpRequest();
	nav.onreadystatechange = menu_change;
	// nav.open("GET","https://fb2.hermunn.no/menu.txt",true);
	nav.open("GET","/menu.txt",true);
	nav.send();
	nav.X_URL = x;
	var content = new XMLHttpRequest();
	content.onreadystatechange = content_change;
	// content.open("GET","https://fb2.hermunn.no/" + x + ".md",true);
	var y = x;
	if (x.charAt(x.length - 1) == "/")
		y = x + "index";
	content.open("GET", y + ".md",true);
	content.send();
}

/*
		<header>
		<h1>Sameiet Folke Bernadottes vei 2</h1>
		<p>Denne siden er under gjenoppbygging. Se <a class="old" href="https://sites.google.com/a/fb2.no/sameiet/">gammel versjon</a> til alt er fikset her.</p>
		</header>
		<div class="oflex">
			<nav>
				<esi:include src="/fb2.no/nav.html" />
			</nav>
			<div class="mid">&nbsp;</div>
			<main>
			</main>
		</div>
		<footer>
			<p class="p-footer"><a class="old" href="mailto:styret@fb2.no">styret@fb2.no</a></p>
		</footer>
*/
