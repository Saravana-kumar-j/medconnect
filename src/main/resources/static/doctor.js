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
    const specialty = document.getElementById('s-specialty').value.trim();
    const location = document.getElementById('s-location').value.trim();

    try {
        const response = await fetch(`http://localhost:8080/doctors/search?specialty=${specialty}&location=${location}`);
        const doctors = await response.json();
        console.log("Doctors API Response:", doctors); // Debugging line

        if (!Array.isArray(doctors) || doctors.length === 0) {
            document.getElementById('doctorsList').innerHTML = "<li>No doctors found</li>";
            return;
        }

        document.getElementById('doctorsList').innerHTML = doctors.map(d => 
            `<li>${d.name || "Unknown"} - ${d.specialty || "Unknown"} - ${d.location || "Unknown"}</li>`
        ).join('');
    } catch (error) {
        console.error("Error fetching doctors:", error);
        document.getElementById('doctorsList').innerHTML = "<li>Error retrieving doctors</li>";
    }
});
