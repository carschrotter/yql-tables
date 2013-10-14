var console = console || {
	info: 	function () {},
	log: 	function () {
		for each(var item in arguments) {
			y.log(item);
		}
	},
	debug: 	function () {},
	warn: 	function () {},
	error: 	function () {}
};

//trim the String
if (!String.prototype.trim) {
   String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}

var validation = null, 
	regex = {}, 
	query = null, 
	d = null, 
	url = '', 
	xpath = '//*[@id="page"]/div[1]/article/div/table/tbody/tr', 
	baseURL = 'http://www.techpowerup.com/gpuz';

if (id) {
    url = baseURL + id + '/';
}

query = y.query("select * from html where url=@url and xpath=@xpath", {url: url, xpath: xpath});
var resultObj = y.xmlToJson(query.results);
if (resultObj.results) {
    validation = <validation></validation>;
    var data = <data></data>;
    for (var name in resultObj.results) {
	var coldData = resultObj.results[name].toString().trim();
	if (name == 'th') {
	    data = <data><key>{coldData}</key></data>;
	    validation.appendChild(data);
	} else {
	    data.appendChild(<value>{coldData}</value>);
	}
    }
}

response.object = validation;