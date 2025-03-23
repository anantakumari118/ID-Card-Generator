document.getElementById('id-card-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const companyName = document.getElementById('company-name').value;
    const name = document.getElementById('name').value;
    const employeeId = document.getElementById('employee-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const imageFile = document.getElementById('image').files[0]; // Get the first selected image file
  
    // Read the uploaded image file
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageDataUrl = event.target.result;
  
      // Create ID card HTML with the uploaded image and company name
      const idCardHtml = `
        <div class="id-card">
          <img src="${imageDataUrl}" alt="Avatar">
          <h2>${name}</h2>
          <p>Company: ${companyName}</p>
          <p>Employee ID: ${employeeId}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
        </div>
      `;
  
      // Display ID card
      document.getElementById('id-card').innerHTML = idCardHtml;
      document.getElementById('id-card').classList.remove('d-none');
    };
    reader.readAsDataURL(imageFile); // Read the image file as a data URL
  });
  