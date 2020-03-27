function makeServiceAjax(){

	var service = { getInformations: getInformations };

	var url = "https://musicbrainz.org/ws/2/";

	function getInformations(type, recherche, limit, offset) {
		var urlRecherche = url+type+"/?query="+recherche+"&limit="+limit+"&offset="+offset+"&fmt=json";

		return new Promise(function(resolve, reject) {
			http = new XMLHttpRequest();
			http.open("GET", urlRecherche);
			http.responseType= "json";
			http.send();

			http.onload = function() {
				if(this.readyState == this.DONE && this.status == 200)
					resolve(this.response);
				else
					reject(this.status);
			};

			http.onerror = function() {
				reject("Erreur");
			};
		});
	}
	return service;
}