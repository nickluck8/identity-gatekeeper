chrome.runtime.sendMessage("fofplhilplkapiocpokanjbfconidpgm", {event: " HISTORY"},

    function (response) {

        let res = "";

        for (let key in response) {
            if (Object.prototype.hasOwnProperty.call(response, key)) {
                console.log(response[key]);
                let s = `<div> ${key} : ${response[key]}</div>`;
                res += s;
            }
        }

        document.getElementById("show").innerHTML = res;
    }
);