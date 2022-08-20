let URL = "https://weather.tsukumijima.net/api/forecast/city/";

function citybtn() {
    let num = document.getElementById("city").value;
    console.log(num);
    let url = URL + num;
    console.log(url);

    async function callApi() {
        const res = await fetch(url);
        const users = await res.json();
        console.log(users);
        // console.log(users.forecasts);
        // console.log(users.forecasts[2].telop);
        var result = document.getElementById('box');
        console.log(users.title);
        // console.log(users.forecasts[0]);
        // console.log(users.forecasts[0].dateLabel);
        const ul = document.createElement("ul");
        ul.innerHTML = users.title;
        result.appendChild(ul);
        for (i = 0; i < users.forecasts.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = users.forecasts[i].dateLabel + '  ' + users.forecasts[i].telop + '  ' + '最高気温' + users.forecasts[i].temperature.max.celsius + '°' + '  ' + '最低気温' + users.forecasts[i].temperature.min.celsius + '°';
            result.appendChild(li);
            if (users.forecasts[i].temperature.max.innerHTML == null || users.forecasts[i].temperature.min.innerHTML == null) {
                let caut = document.getElementById("caution");
                caut.innerHTML = "※気温についてnullと表示されることがあります。"
            }
        }
    };
    callApi();
};