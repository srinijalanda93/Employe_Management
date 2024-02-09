function toggleForm() {
  const formBody = document.getElementById("form-body");
  if (formBody.style.display === "none") {
    formBody.style.display = "flex";
  } else {
    formBody.style.display = "none"; // Corrected from '===' to '='
  }
}

// const formTag=document.getElementsByTagName('form');
// console.log("using the form Tag:",formTag[0])
addEventListener("submit", (eventobj) => {
  eventobj.preventDefault();
  //  console.log("the form Target:",eventobj.target); //grt the <form></form>
  // console.log("the form Target:",eventobj.target.ename); //get that element
  // console.log("the form Target:",eventobj.target.ename.value); //give the value of that element tag
  const employeeObj = {
    name: eventobj.target.ename.value,
    role: eventobj.target.role.value,
    salary: eventobj.target.esalary.value,
    phoneNumber: eventobj.target.ePhone.value,
    EmailId: eventobj.target.Eemail.value,
    company: eventobj.target.ecompany.value,
  };
  // Reset the form
  eventobj.target.reset();
  /**
   * let pass the employeeObj in the function
   * which is responsole for creating tr and td
   */

  addEmployee(employeeObj);
  toggleForm();
});

/**
 * Access the tbody Tag
 * Create the tr Tag,td Tag
 * for the td Tag the innerHtml
 * tr.appendChild(td)
 * tbody.appendChild(tr)
 */
/**
 * but object excluded with id,edit column we need add Manually
 */

const tbodyTag = document.getElementById("tbody");
let employeId = 234;
function addEmployee(obj) {
  const trTag = document.createElement("tr"); //<tr></tr>
  trTag.id=employeId;
  const tdId = document.createElement("td");
  tdId.innerText = employeId;
  employeId++;
  trTag.appendChild(tdId);
  //let run the loop for the object using for in
  for (let key in obj) {
    //  console.log(obj[key]);
    const tdTag = document.createElement("td");
    tdTag.innerText = obj[key];
    trTag.appendChild(tdTag);
  }
  //last tdedit
  /**
   * let create delete and edit button
   *  <td><button>Delete</button><button>Edit</button></td>
   * append to tr
   * manually add the eventListener to delete and edit
   */
  const tdedit = document.createElement("td");
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "Delete";
  const editbutton = document.createElement("button");
  editbutton.innerText = "Edit";
  tdedit.append(deletebutton, editbutton);
  // tdedit.innerHTML=`<button>delete</button> <button>Edit</button>`;
  trTag.appendChild(tdedit);
  tbodyTag.appendChild(trTag);
  /**
   * add the eventListener
   */
  deletebutton.addEventListener("click",deleteButton); //passfunctionref
  editbutton.addEventListener("click",editButton); //passfunctionref
}

function deleteButton(event) {
  //event Listener callback for delete button
  console.log(event.target); //button.parentNode=><td>.parentNode=><tr>
  //using parentNode property
  let buttontag=event.target;
 let tdTag= buttontag.parentNode;
 let trTag=tdTag.parentNode;
 trTag.remove();

}

function editButton(event) {
  //event Listener call back for the dit button
  console.log(event.target);
}
