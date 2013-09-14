y.include("https://raw.github.com/carschrotter/yql-tables/master/js/helper.js");
y.include("https://datejs.googlecode.com/files/date.js");
function getFormattedDate(date) {
    var str = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    return str;
}
calendar = calendar || 1;
var query = null, d = null, url = '', xpath = '/html/body/div/div/div/div/form';
y.log(date);
if (date) {
    d = Date.parse(date);
}
else {
    d = new Date();
}
y.log(d);
url = 'http://www.feuerwerk-forum.de/calendar.php?do=getinfo&day=' + getFormattedDate(d) + '&c=' + calendar;
query = y.query("select * from html where url=@url and xpath=@xpath", {url: url, xpath: xpath});
var results = <events></events>;
query.results.forEach(function(index, value) {
    y.log(value);
    var form = value.results.form;
    form.forEach(function(i, v) {
    
    }
    results.appendChild( <event><number>{index}</number><place></place><value>{value}</value></event> );
});
response.object = results;