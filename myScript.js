
document.getElementById('myBtn').addEventListener('click',(e) => displaydata(e));


function displaydata(e){

    e.preventDefault();

    const firstName=document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const employeeId = document.getElementById('employeeId').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById('dob').value;
    console.log('Name:', firstName, lastName);
 
    console.log('Phone Number:', phone);
    console.log('Employee ID:', employeeId);
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dob);
    // document.getElementById("demo").innerHTML=firstName;
}
