//let create an array contains  object of employee info
const empArr=[
    {
        id:102,
        name:"srinija",
        role:'SDE',
        salary:'50k',
        phoneNumber:1234567890,
        EmailId:'srinija@gmail.com',
        company:'SFC',
        edit:'delete'
    },
    {
        id:1021,
        name:"sudha",
        role:'doctor',
        salary:'20k',
        phoneNumber:9087564312,
        EmailId:'Sudha@gmail.com',
        company:'sangareddy',
        edit:'editing'
    }
];

/**
 * Access the tbody Tag
 * Create the tr Tag,td Tag
 * for the td Tag the innerHtml
 * tr.appendChild(td)
 * tbody.appendChild(tr)
 */

const tbodyTag=document.getElementById("tbody");

empArr.forEach((elementObj,i,Arr) =>{
    addEmployee(elementObj);
})

function addEmployee(obj){
    const trTag=document.createElement('tr'); //<tr></tr>
    //let run the loop for the object using for in
    for(let key in obj){
      //  console.log(obj[key]);
      const tdTag=document.createElement('td');
      tdTag.innerHTML=obj[key];
      trTag.appendChild(tdTag);
    }
    tbodyTag.appendChild(trTag)
}
