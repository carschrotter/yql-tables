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
	baseURL = 'http://www.techpowerup.com/gpuz/';

if (id) {
    url = baseURL + id + '/';
}

query = y.query("select * from html where url=@url and xpath=@xpath and compat=@compat", {url: url, xpath: xpath, compat: 'html5'});
var resultObj = y.xmlToJson(query.results);
if (resultObj.results) {
    validation = <validation></validation>;
    var data = [<data></data>, <data></data>];
    for each (var rows in resultObj.results.tr) {
        for (var name in rows) {
        	
            var coldData = Array.isArray(rows[name]) ?  rows[name] : [rows[name]];
            for (var i in coldData) {
	            var value = value[i].toString().trim();
	            if (name == 'th') {
	                datal[i] = <data><key>{value}</key></data>;
	                validation.appendChild(datal[i]);
	            } else {
	                data[i].appendChild(<value>{value}</value>);
	            }
            }
        }
    }
}

response.object = validation;