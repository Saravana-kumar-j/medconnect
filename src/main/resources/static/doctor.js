document.getElementById('addDoctorForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const doctor = {
        name: document.getElementById('name').value,
        specialty: document.getElementById('specialty').value,
        location: document.getElementById('location').value
    };

    try {
        const response = await fetch('http://localhost:8080/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doctor)
        });
        const data = await response.json();
        alert('Doctor added!');
    } catch (error) {
        alert('Error adding doctor');
    }
});

document.getElementById('searchDoctorsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const specialty = document.getElementById('specialty').value;
    const location = document.getElementById('location').value;
    
    const response = await fetch(`http://localhost:8080/doctors/search?specialty=${specialty}&location=${location}`);
    const doctors = await response.json();
    const list = document.getElementById('doctorsList');
    list.innerHTML = doctors.map(d => `<li>${d.name} - ${d.specialty} - ${d.location}</li>`).join('');
});