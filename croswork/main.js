var obj = new XMLHttpRequest();
obj.open('GET', 'http://fujiwaratest.wp.xdomain.jp/work/croswork/load.html', true); //true:非同期通信
obj.onreadystatechange = function() {

    if (obj.readyState === 4 && obj.status === 200) {
        var str = obj.responseText; //読み込んだHTMLを変数に代入
        console.log(str);
    }

};
obj.send(null);