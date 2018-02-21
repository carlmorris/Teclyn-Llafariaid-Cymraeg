testun = "";

// Dethol popeth
function DetholPopeth(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

var llinynllafariaid = "aeiouwyâáàäêéèëîíìïôóòöûúùüŵẃẁẅŷýỳÿ";

// 
function wedinewid()
{	
	testun = document.getElementById("lletestun").value;
	testunmoel = testun.toLowerCase();
    	    	
	html = "";
	testungydamelyn = "";
	llafariaid = 0;
	for (var i = 0; i < testun.length; i++) {

		if(llinynllafariaid.indexOf(testunmoel.charAt(i)) !== -1) {
			testungydamelyn += "<span class=\"llafariad\">" + testun.charAt(i) + "</span>";
			llafariaid++;
		}
		else {
			if(testunmoel.charAt(i) == '\n')
				testungydamelyn += "<br>";
			else
				testungydamelyn += "<span class=\"symbolarall\">" + testun.charAt(i) + "</span>";
		}
	}
			
	html += "<br>A total of ";
	if(llafariaid == 1) html += "1 vowel was "; else html += llafariaid + " vowels were ";
	html += "located in your text";
	
	if(testun.length > 0) html += ":<br>"; else html += ".";
	
	html += testungydamelyn;
	
	document.getElementById("canlyniad").innerHTML = html;
}

var cynnwys= ["Mae hen wlad fy nhadau yn annwyl i mi,\nGwlad beirdd a chantorion, enwogion o fri;\nEi gwrol ryfelwyr, gwladgarwyr tra mad,\nDros ryddid collasant eu gwaed.\nGwlad, Gwlad, pleidiol wyf i'm gwlad.\nTra môr yn fur i'r bur hoff bau,\nO bydded i'r heniaith barhau.",

"Shotton Rhyngwladol, Y Fflint, Prestatyn, Rhyl, Abergele, Bae Colwyn, Cyffordd Llandudno, Conwy, Penmaenmawr, Llanfairfechan, Bangor, Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch, Bodorgan, Tŷ Croes, Rhosneigr, Y Fali, Caergybi Rhyngwladol",

"A fo ben, bid bont\nByr yw Chwefror, ond hir ei anghysuron\nNid hawdd bodloni pawb\nTwyllo arall, twyllo dy hunan",

"Yr iach a gâch yn y bore,\nA'r afiach a gâch yn yr hwyr.\nYr afiach a gâch yn ddarnau bach,\nA'r iach a gâch yn llwyr.",

"a, b, c, ch, d, dd, e, f, ff, g, ng, h, i, l, ll, m, n, o, p, ph, r, rh, s, t, th, u, w, y",

"Annwyl bawb. Yr wyf bellach wedi dysgu bod 7 llafariad yn Gymraeg. Mae'n ddrwg gen i am fy anwybodaeth llwyr. #twpdra.",

];


// rhoi testun cyflym yn y blwch
function gosodcynnwys(rhif) {

	if(rhif >= 0 && rhif < cynnwys.length)
		document.getElementById("lletestun").value = cynnwys[rhif];
	else
		console.log("gwall");
	
	wedinewid();
}

