// Tab Show Functionality
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active-tab'));
    document.querySelectorAll('.tabs .tab').forEach(link => link.classList.remove('active'));

    document.getElementById(tabName).classList.add('active-tab');
    const activeTab = [...document.querySelectorAll('.tabs .tab')].find(link => link.textContent.toLowerCase() === tabName.replace('Tab', '').toLowerCase());
    activeTab.classList.add('active');
}

// Result Form Submission
document.getElementById('resultForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const score = document.getElementById('score').value;
    const date = document.getElementById('date').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td class="student-name">${studentName}</td>
      <td>${subject}</td>
      <td>${score}</td>
      <td>${date}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    
    newRow.querySelector('.edit-btn').addEventListener('click', () => editRow(newRow));
    newRow.querySelector('.delete-btn').addEventListener('click', () => newRow.remove());
  
    document.getElementById('scoreboardBody').appendChild(newRow);
    document.getElementById('resultForm').reset();
});

// Edit Row Functionality
function editRow(row) {
    document.getElementById('studentName').value = row.querySelector('.student-name').textContent;
    document.getElementById('subject').value = row.cells[1].textContent;
    document.getElementById('score').value = row.cells[2].textContent;
    document.getElementById('date').value = row.cells[3].textContent;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.type = 'button';
    saveButton.addEventListener('click', () => {
        row.querySelector('.student-name').textContent = document.getElementById('studentName').value;
        row.cells[1].textContent = document.getElementById('subject').value;
        row.cells[2].textContent = document.getElementById('score').value;
        row.cells[3].textContent = document.getElementById('date').value;
        document.getElementById('resultForm').reset();
        document.getElementById('resultForm').appendChild(saveButton);
    });
    
    const resultForm = document.getElementById('resultForm');
    resultForm.querySelector('button[type="submit"]').replaceWith(saveButton);
}

// Login Form
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!email || !password) return alert('Please fill in both fields.');
    if (!validateEmail(email)) return alert('Please enter a valid email address.');

    alert('Login successful!');
});

function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Signup Form
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) return alert('All fields are required!');
    
    alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
    document.getElementById('signupForm').reset();
});
