'use script';


{
    function onButtonClick() {
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
}
