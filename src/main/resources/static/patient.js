document.getElementById('addPatientForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const patient = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    try {
        const response = await fetch('http://localhost:8080/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patient)
        });
        const data = await response.json();
        alert('Patient added!');
        loadPatients();
    } catch (error) {
        alert('Error adding patient');
    }
});

async function loadPatients() {
    const response = await fetch('http://localhost:8080/patients');
    const patients = await response.json();
    const list = document.getElementById('patientsList');
    list.innerHTML = patients.map(p => `<li>${p.name} - ${p.email} - ${p.phone}</li>`).join('');
}

// Load patients on page load
loadPatients();