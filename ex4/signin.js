document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = this.email.value.trim();
    const password = this.password.value.trim();
    const userType = this['user-type'].value;
    const dob = this.dob.value;
  
    if (!email || !password || !userType || !dob) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // You can add more validations here as needed
  
    alert(`Welcome back, ${email}!\nUser Type: ${userType}`);
    this.reset();
  });
  