window.addEventListener('DOMContentLoaded', function () {

    // input要素を取得
    var input_name = document.getElementById("id_textBox1");

    // イベントリスナーでイベント「change」を登録
    input_name.addEventListener("change", function () {
        const rawtext = document.getElementById("id_textBox1");
        var array = Array.from(rawtext.value);
        console.log(array);
        target = document.getElementById("output");
        var string;
        for (var i = 0; i < array.length; i++) {
            string = array.join(' " ');
            target.innerText = string + ' " ';
        }
    }
    )
}
)
