// Handle user information display and validation
document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('userName');
    const phone = localStorage.getItem('userPhone');
    const age = localStorage.getItem('userAge');

    if (!name || !phone || !age) {
        // If no user info is found, redirect back to intro page
        window.location.href = 'intro.html';
    }

    // Display user info in the results container
    const resultUserInfo = document.getElementById('resultUserInfo');
    if (resultUserInfo) {
        resultUserInfo.innerHTML = `
            <div class="user-info-header">
                <h3>معلومات الممتحن</h3>
            </div>
            <div class="user-info-content">
                <p>الاسم: <span>${name}</span></p>
                <p>رقم الهاتف: <span>${phone}</span></p>
                <p>العمر: <span>${age}</span></p>
            </div>
        `;
    }
});

function showForm() {
  console.log("showForm function called!");
  document.getElementById('intro-section').style.display = 'none';
  const formSection = document.getElementById('form-section');
  formSection.style.display = 'block';
  // Add a slight delay to allow display: block to apply before transition
  setTimeout(() => {
    formSection.classList.add('active');
  }, 10);
}

function validateAndSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;

  if (!name || !phone || !age) {
    alert('يرجى ملء جميع الحقول المطلوبة');
    return false;
  }

  localStorage.setItem('userName', name);
  localStorage.setItem('userPhone', phone);
  localStorage.setItem('userAge', age);

  window.location.href = 'quiz.html';
  return false;
} 