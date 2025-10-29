// Show last selected number in display
const checkboxes = document.querySelectorAll('input[name="number"]');
let mostRecentCheckbox = null;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) { // Only update if the checkbox is being checked, not unchecked
      mostRecentCheckbox = event.target;
      document.getElementById("current-number").innerHTML=('Most recently checked checkbox:', mostRecentCheckbox.value || mostRecentCheckbox.value || mostRecentCheckbox);
    }
  });
});

// Persist radios
var radios = document.getElementsByName("color");
  var val = localStorage.getItem('color');
  for(var i=0;i<radios.length;i++){
    if(radios[i].value == val){
      radios[i].checked = true;
    }
  }

$('input[name="color"]').on('change', function(){
  localStorage.setItem('color', $(this).val());
});

// Persist checkboxes
let boxes = document.getElementsByClassName('box').length;

function save() { 
  for(let i = 1; i <= boxes; i++){
    var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked); 
  }
}

for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}
window.addEventListener('change', save);

// clear board
const buttonClear = document.getElementById('clear');

buttonClear.addEventListener('click', () => {
  var isAllCheck = false;
  document.querySelectorAll('.numberOption').forEach(el => el.checked = isAllCheck);
  for(let i = 1; i <= boxes; i++){
    var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked); 
  }
});

// clean example
const buttonClean = document.getElementById('clean');

buttonClean.addEventListener('click', () => {
  var isAllCheck = false;
  document.querySelectorAll('.exampleOption').forEach(el => el.checked = isAllCheck);
  for(let i = 1; i <= boxes; i++){
    var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked); 
  }
});

// reset everything
const buttonReset = document.getElementById('reset');

buttonReset.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});
