//
//	Horloge.js Mise à jour du 08-01-18
//
	document.addEventListener("DOMContentLoaded", function(event) {
		// Images à utiliser - commenter/décommenter selon le besoin
		//Taille 1600px à 100% (ratio 1)
		var pngcadran = 'cadran.png',
			pngaigH = 'aigH.png',
			pngaigM = 'aigM.png',
			pngaigS = 'aigS.png';
		
		//Taille 608px à 100% (ratio 1)
		//var pngcadran = 'cadran.min.png',
		//	pngaigH = 'aigH.min.png',
		//	pngaigM = 'aigM.min.png',
		//	pngaigS = 'aigS.min.png';
		
	    var imgsrc = document.getElementById('horloge').attributes['data-imgsrc'].value;
		var cadran = document.createElement('img');
			cadran.setAttribute('src'  , imgsrc+pngcadran);
		window.cadransrc = cadran.attributes['src'].value;
		window.cadranoc = cadran.naturalHeight;
		var size = document.getElementById('horloge').attributes['size'].value;
		if(document.getElementsByTagName('body')[0].style.MozTransform == ''
		 || document.getElementsByTagName('body')[0].style.WebkitTransform == ''
		 || document.getElementsByTagName('body')[0].style.OTransform == ''
		 || document.getElementsByTagName('body')[0].style.OTransform
		 || document.getElementsByTagName('body')[0].style.msTransform == ''
		 || document.getElementsByTagName('body')[0].style.transform == '')
		{
			
		var d    = new Date();
		var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();
         var aigS = document.createElement('img');
			aigS.setAttribute('src'  , imgsrc+pngaigS);
			aigS.setAttribute('id'  , 'aigS');
			aigS.setAttribute('style', 'z-index: 30; left:46.67%; bottom: 39.61%; position: absolute;');
			aigS.style.MozAnimation	=
			aigS.style.WebkitAnimation = 
			aigS.style.OAnimation      =
			aigS.style.msAnimation		=
			aigS.style.animation       = 'aigS 60s linear -'+time+'s infinite';
			oaigSh = aigS.naturalHeight;
			oaigSw = aigS.naturalWidth;
			aigS.height	= oaigSh * size;
			aigS.width	= oaigSw * size;
			if(oaigSh < "1" || oaigSw < "1") { 
				var recadrageaigS = setInterval(function() {
					oaigSh = aigS.naturalHeight;
					oaigSw = aigS.naturalWidth;
					aigS.height	= oaigSh * size;
					aigS.width	= oaigSw * size;
					if(oaigSh > "1" && oaigSw > "1") {
						resize();
						clearInterval(recadrageaigS);
					}
				}, 1000);
			}
			aigS.style.MozTransformOrigin    =
			aigS.style.WebkitTransformOrigin =
			aigS.style.OTransformOrigin      =
			aigS.style.msTransformOrigin     =
			aigS.style.transformOrigin       = '50% 78%';

         var aigM = document.createElement('img');
            aigM.setAttribute('src'  , imgsrc+pngaigM);
			aigM.setAttribute('id'  , 'aigM');
            aigM.setAttribute('style', 'z-index: 20; left: 47.75%; bottom: 39.9%; position: absolute;');
			aigM.style.MozAnimation	=
			aigM.style.WebkitAnimation = 
			aigM.style.OAnimation      =
			aigM.style.msAnimation		=
			aigM.style.animation       = 'aigM 3600s linear -'+time+'s infinite';
			oaigMh = aigM.naturalHeight;
			oaigMw = aigM.naturalWidth;
			aigM.height	= oaigMh * size;
			aigM.width	= oaigMw * size;
			if(oaigMh < "1" || oaigMw < "1") { 
				var recadrageaigM = setInterval(function() {
					oaigMh = aigM.naturalHeight;
					oaigMw = aigM.naturalWidth;
					aigM.height	= oaigMh * size;
					aigM.width	= oaigMw * size;
					if(oaigMh > "1" && oaigMw > "1") {
						resize();
						clearInterval(recadrageaigM);
					}
				}, 1000);
			}
			aigM.style.MozTransformOrigin   =
			aigM.style.WebkitTransformOrigin =
			aigM.style.OTransformOrigin      =
			aigM.style.msTransformOrigin      =
			aigM.style.transformOrigin       = '50% 78.38%';

         var aigH = document.createElement('img');
            aigH.setAttribute('src'  , imgsrc+pngaigH);
			aigH.setAttribute('id'  , 'aigH');
            aigH.setAttribute('style', 'z-index: 10; left: 47%; bottom: 39.9%; position: absolute;');
			aigH.style.MozAnimation	=
			aigH.style.WebkitAnimation = 
			aigH.style.OAnimation      =
			aigH.style.msAnimation		=
			aigH.style.animation       = 'aigH 43200s linear -'+time+'s infinite';
			oaigHh = aigH.naturalHeight;
			oaigHw = aigH.naturalWidth;
			aigH.height	= oaigHh * size;
			aigH.width	= oaigHw * size;
			if(oaigHh < "1" || oaigHw < "1") { 
				var recadrageaigH = setInterval(function() {
					oaigHh = aigH.naturalHeight;
					oaigHw = aigH.naturalWidth;
					aigH.height	= oaigHh * size;
					aigH.width	= oaigHw * size;
					if(oaigHh > "1" && oaigHw > "1") {
						resize();
						clearInterval(recadrageaigH);
					}
				}, 1000);
			}
			aigH.style.MozTransformOrigin    =
			aigH.style.WebkitTransformOrigin =
			aigH.style.OTransformOrigin      =
			aigH.style.msTransformOrigin     =
			aigH.style.transformOrigin       = '50% 72%';
			cote = window.cadranoc * size;
		 var horloge = document.getElementById('horloge');
			horloge.height = cote+"px";
			horloge.width = cote+"px";
            horloge.setAttribute('style', 'max-width: '+horloge.parentElement.clientWidth+'px; position: relative; border: 1px solid black; width: '+cote+'px; height:'+cote+'px; background: url(\''+window.cadransrc+'\'); background-size: '+cote+'px '+cote+'px; -moz-border-radius: '+cote / 2+'px; -webkit-border-radius: '+cote / 2+'px; -o-border-radius: '+cote / 2+'px; -ms-border-radius: '+cote / 2+'px; border-radius: '+cote / 2+'px;');
            horloge.appendChild(aigS);
            horloge.appendChild(aigM);
            horloge.appendChild(aigH);
			if(window.cadranoc < "1") { 
				var recadrage = setInterval(function() {
					window.cadranoc=cadran.naturalHeight;
					if(window.cadranoc > "1") {
						resize();
						clearInterval(recadrage);
					}
				}, 1000);
			}
		resize();
		var style = document.createElement('style');
		document.getElementsByTagName('head')[0].appendChild(style);
		style.type = 'text/css';
		style.innerHTML = "@-webkit-keyframes aigS { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } } @-moz-keyframes aigS { 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(360deg); }} @-ms-keyframes aigS {	0% { -ms-transform: rotate(0deg); }	100% { -ms-transform: rotate(360deg); } } @-o-keyframes aigS {	0% { -o-transform: rotate(0deg); }	100% { -o-transform: rotate(360deg); } } @-webkit-keyframes aigM { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } } @-moz-keyframes aigM { 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(360deg); }} @-ms-keyframes aigM {	0% { -ms-transform: rotate(0deg); }	100% { -ms-transform: rotate(360deg); } } @-o-keyframes aigM {	0% { -o-transform: rotate(0deg); }	100% { -o-transform: rotate(360deg); } } @-webkit-keyframes aigH { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } } @-moz-keyframes aigH { 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(360deg); }} @-ms-keyframes aigH {	0% { -ms-transform: rotate(0deg); }	100% { -ms-transform: rotate(360deg); } } @-o-keyframes aigH {	0% { -o-transform: rotate(0deg); }	100% { -o-transform: rotate(360deg); } }";
		document.addEventListener('visibilitychange', function () { calage(); });
		}
   });

   function calage() {
		var d    = new Date();
		var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();
		var aaigS = document.getElementById('aigS');
		var aaigM = document.getElementById('aigM');
		var aaigH = document.getElementById('aigH');
		aaigS.classList.remove("run-animation");
		aaigM.classList.remove("run-animation");
		aaigH.classList.remove("run-animation");
		void aaigS.offsetWidth;
		void aaigM.offsetWidth;
		void aaigH.offsetWidth;
		aaigS.style.MozAnimation	=
		aaigS.style.WebkitAnimation = 
		aaigS.style.OAnimation      =
		aaigS.style.msAnimation		=
		aaigS.style.animation       = 'aigS 60s linear -'+d.getSeconds()+'s infinite';
		aaigM.style.MozAnimation	=
		aaigM.style.WebkitAnimation = 
		aaigM.style.OAnimation      =
		aaigM.style.msAnimation		=
		aaigM.style.animation       = 'aigM 3600s linear -'+time+'s infinite';
		aaigH.style.MozAnimation	=
		aaigH.style.WebkitAnimation = 
		aaigH.style.OAnimation      =
		aaigH.style.msAnimation		=
		aaigH.style.animation       = 'aigH 43200s linear -'+time+'s infinite';
		var aigS = aaigS.cloneNode(true);
		var aigM = aaigM.cloneNode(true);
		var aigH = aaigH.cloneNode(true);
		aaigS.parentNode.replaceChild(aigS, aaigS);
		aaigM.parentNode.replaceChild(aigM, aaigM);
		aaigH.parentNode.replaceChild(aigH, aaigH);
		/* var aigS = document.getElementById('aigS');
		var aigM = document.getElementById('aigM');
		var aigH = document.getElementById('aigH');
		aigS.style.MozAnimation	=
		aigS.style.WebkitAnimation = 
		aigS.style.OAnimation      =
		aigS.style.msAnimation		=
		aigS.style.animation       = 'aigS 60s linear -'+d.getSeconds()+'s infinite';
		aigM.style.MozAnimation	=
		aigM.style.WebkitAnimation = 
		aigM.style.OAnimation      =
		aigM.style.msAnimation		=
		aigM.style.animation       = 'aigM 3600s linear -'+time+'s infinite';
		aigH.style.MozAnimation	=
		aigH.style.WebkitAnimation = 
		aigH.style.OAnimation      =
		aigH.style.msAnimation		=
		aigH.style.animation       = 'aigH 43200s linear -'+time+'s infinite'; */
		aigS.classList.add("run-animation");
		aigM.classList.add("run-animation");
		aigH.classList.add("run-animation");
	}

   function resize() {
		var size = document.getElementById('horloge').attributes['size'].value;
		var aigS = document.getElementById('aigS');
		var aigM = document.getElementById('aigM');
		var aigH = document.getElementById('aigH');
		var horloge = document.getElementById('horloge');
		var cote = window.cadranoc * size;
		aigS.height	= oaigSh * size;
		aigS.width	= oaigSw * size;
		aigM.height	= oaigMh * size;
		aigM.width	= oaigMw * size;
		aigH.height	= oaigHh * size;
		aigH.width	= oaigHw * size;
		horloge.setAttribute('style', 'position: relative; border: 1px solid black; width: '+cote+'px; height:'+cote+'px; background: url(\''+window.cadransrc+'\'); background-size: '+cote+'px '+cote+'px; -moz-border-radius: '+cote / 2+'px; -webkit-border-radius: '+cote / 2+'px; -o-border-radius: '+cote / 2+'px; -ms-border-radius: '+cote / 2+'px; border-radius: '+cote / 2+'px;');
		return true;
   }
