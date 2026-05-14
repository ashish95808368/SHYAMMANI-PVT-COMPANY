function login(){

let user = document.getElementById("username").value;

let pass = document.getElementById("password").value;

if(user=="admin" && pass=="1234")
{
    alert("Login Successful");

    window.location.href="dashboard.html";
}
else
{
    alert("Wrong Username or Password");
}

}
function saveClient(){

alert("Client Saved Successfully");

}
function deleteRow(button){

let row = button.parentNode.parentNode;

row.remove();

alert("Client Deleted");

}
function searchClient(){

let input = document.getElementById("search").value.toLowerCase();

let table = document.querySelector("table");

let tr = table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++)
{
    let td = tr[i].getElementsByTagName("td")[0];

    if(td)
    {
        let text = td.textContent || td.innerText;

        if(text.toLowerCase().indexOf(input) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}

}

function calculateEMI(){

let amount = document.getElementById("amount").value;

let months = document.getElementById("months").value;

let emi = amount / months;

document.getElementById("result").innerHTML =
"Monthly EMI = " + emi;

}function darkMode(){

document.body.classList.toggle("dark");

}
function validateForm(name,amount){

if(name=="" || amount=="")
{
    alert("Please Fill All Fields");
    return false;
}

return true;

}
function loadClients(){

let clients=JSON.parse(localStorage.getItem("clients")) || [];

let table=document.getElementById("clientTable");

clients.forEach((client,index)=>{

let row=table.insertRow();

row.insertCell(0).innerHTML=client.name;

row.insertCell(1).innerHTML=client.amount;

row.insertCell(2).innerHTML=
'<button onclick="deleteClient('+index+')">Delete</button>';

});

}
function deleteClient(index){

let clients=JSON.parse(localStorage.getItem("clients")) || [];

clients.splice(index,1);

localStorage.setItem("clients",JSON.stringify(clients));

location.reload();

}