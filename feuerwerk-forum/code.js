var window = {}, document = {};
y.include("https://datejs.googlecode.com/files/date.js");
y.include("https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js");
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
$.each(query.results, function(index, value) {
    response.object[index] = <event><ort></ort><value>{value}</value></event>;
}); 
//;
//
//response.object =  
//<messengerstatus> 
//   <yahoo_id>{u}</yahoo_id> 
//   <status>{status}</status> 
//</messengerstatus>; 