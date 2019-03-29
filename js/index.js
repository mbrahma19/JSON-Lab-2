let request = new XMLHttpRequest();
let url = "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState === 4) {
        let array = JSON.parse(this.responseText);
        for (let i = 0; i < array.data.length; i++) {
            let value = array.data[i];
            if (value[10] === "Golden Gate Bridge") {
                document.getElementById('result').innerHTML += value[8] + value[9] + value[12] + "<br>" + "<br>";
            }
        }
    }
};
request.open("GET", url, true);
request.send();