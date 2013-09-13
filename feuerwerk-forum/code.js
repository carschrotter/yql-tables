function getFormattedDate(date) {
    var str = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    return str;
}
calendar = calendar || 1;
var query = null, d = null, url = '', xpath='/html/body/div/div/div/div/form';
if (date) { d = new Date(date); }
else { d = new Date(); }
url = 'http://www.feuerwerk-forum.de/calendar.php?do=getinfo&day=' + getFormattedDate(d) + '&c=' + calendar;
query = y.query("select * from html where url=@url and xpath=@xpath",{url:url, xpath:xpath});
response.object = query.results;