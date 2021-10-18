function checkboxLimit() {
  var checkBox = document.getElementById("check_box");
  var checkBoxGrp = checkBox.querySelectorAll("input[type=checkbox]");

  var limit = 2;
  for (var i = 0; i < checkBoxGrp.length; i++) {
    checkBoxGrp[i].onclick = function () {
      var checkedcount = 0;
      for (var i = 0; i < checkBoxGrp.length; i++) {
        checkedcount += checkBoxGrp[i].checked ? 1 : 0;
        checkboxLimiter();
      }
      if (checkedcount > limit) {
        console.log("you can select maximum of" + limit + " checkboxes.");
        this.checked = false;
      }
    };
  }
  function checkboxLimiter() {
    let markedBoxCount = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    if (markedBoxCount == 2) {
      disable();
    }
    getValue();
  }

  function disable() {
    let unmarkedBoxCount = document.querySelectorAll(
      'input[type="checkbox"]:not(:checked)'
    );

    // same thing as Checkboxes
    unmarkedBoxCount.forEach((checkbox) => {
      checkbox.disabled = true;
    });
  }

  var checkboxvalue = [];
  function getValue() {
    let markedBox = document.querySelectorAll('input[type="checkbox"]:checked');
    markedBox.forEach((value) => {
      checkboxvalue.push(value.value);
      console.log(checkboxvalue);
    });
  }
}
checkboxLimit();

var fname = [];
var lname = [];
var address = [];
var checkbox = [];

var n = 1;
var x = 0;
function AddRow() {
  var Addrow = document.getElementById("show");
  var newrow = Addrow.insertRow(n);

  fname[x] = document.getElementById("fname").value;
  lname[x] = document.getElementById("lname").value;
  address[x] = document.getElementById("address").value;
  // checkbox[x] = getValue();

  var cel1 = newrow.insertCell(0);
  var cel2 = newrow.insertCell(1);
  var cel3 = newrow.insertCell(2);
  var cel4 = newrow.insertCell(3);

  cel1.innerHTML = fname[x];
  cel2.innerHTML = lname[x];
  cel3.innerHTML = address[x];
  cel4.innerHTML = checkbox[x];

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("address").value = "";

  n++;
  x++;
}
