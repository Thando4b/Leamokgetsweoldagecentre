const form = document.getElementById('enquiryForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let responseEl = document.getElementById('formResponse');
    let error = "";

    if(name.length < 3) error = "Name must be at least 3 characters";
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = "Invalid email format";
    else if(!/^[0-9]{10}$/.test(phone)) error = "Phone must be 10 digits";

    if(error){
      responseEl.innerText = error;
      responseEl.style.color = "red";
      return;
    }

    let type = document.getElementById('enquiryType').value;
    let msg = type === 'care' ? "Care cost: R5000/month" : type === 'volunteer' ? "Volunteer orientation: Monday 10am" : "Sponsorship: R1000 - R10000";

    responseEl.innerText = "Success! " + msg;
    responseEl.style.color = "green";
    this.reset();
  });
}