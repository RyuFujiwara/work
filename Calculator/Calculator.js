function get_calc(btn) {
  if (btn.value == "=") {
    document.myForm.myLine.value = eval(document.myForm.myLine.value);
  } else if (btn.value == "C") {
    document.myForm.myLine.value = "";
  } else {
    if (btn.value == "x") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    } var a = document.myForm.myLine.value;
    if (btn.value == "X²") {
      document.myForm.myLine.value = "";
      btn.value = a * a;
    } else if (btn.value == "Tax") {
      document.myForm.myLine.value = "";
      btn.value = Math.floor(a * 1.1);
    }

    document.myForm.myLine.value += btn.value;
    document.myForm.multi_btn.value = "x";
    document.myForm.div_btn.value = "÷";
    document.myForm.Tax_btn.value = "Tax";
    document.myForm.square_btn.value = "X²";
  }
}