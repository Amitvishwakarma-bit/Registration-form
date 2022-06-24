var form = document.getElementById("form");
var currentRow = null;

form.addEventListener('submit',function(event){
    event.preventDefault();

    var formData = readFormData();
    
    if(currentRow == null){
        insertData(formData);
    }else{
        formUpdate(formData);
    }

})

function readFormData(){
    var formdata = {};
    formdata["name"] = document.getElementById("name").value;
    formdata["Email"] = document.getElementById("email").value;
    formdata["number"] = document.getElementById("number").value;
    formdata["gender"] = getGender();
    return formdata;
}
function getGender(){

    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if(male == true){
        return "Male";
    }else if(female == true){
        return "Female";
    }else{
        return "Other";
    }
}
function insertData(formData){
    var table = document.getElementById("tableElements").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = formData.name;
    cell2.innerHTML = formData.Email;
    cell3.innerHTML = formData.number;
    cell4.innerHTML = formData.gender;
    cell5.innerHTML = `<input type="button" value="Edit" id="edit" onclick="formEdit(this)"/> 
    <input type="button" value="Delete" id="delete"  onclick="formDelete(this)"/>`
    resetForm();

}
function formEdit(td){
    currentRow = td.parentElement.parentElement;
    document.getElementById("name").value = currentRow.cells[0].innerHTML;
    document.getElementById("email").value = currentRow.cells[1].innerHTML;
    document.getElementById("number").value = currentRow.cells[2].innerHTML;
    var gender = currentRow.cells[3].innerHTML;
    if(gender == "Male"){
        document.getElementById("male").checked = true;
    }else if(gender == "Female"){
        document.getElementById("female").checked = true;
    }else{
        document.getElementById("other").checked = true;
    }
}

function formUpdate(formData){
    currentRow.cells[0].innerHTML = formData.name;
    currentRow.cells[1].innerHTML = formData.Email;
    currentRow.cells[2].innerHTML = formData.number;
    currentRow.cells[3].innerHTML = formData.gender;
    resetForm();

}

function formDelete(td){
    if(confirm("Are you sure want to delete your data!!")){
        currentRow = td.parentElement.parentElement;
        document.getElementById("tableElements").deleteRow(currentRow.rowIndex);
        resetForm();
    }
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;

  
    currentRow = null;
  }