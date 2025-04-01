document.getElementById('bookAppointmentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const appointment = {
        patientId: document.getElementById('patientId').value,
        doctorId: document.getElementById('doctorId').value,
        time: document.getElementById('time').value
    };

    try {
        const response = await fetch(`http://localhost:8080/appointments?patientId=${appointment.patientId}&doctorId=${appointment.doctorId}&time=${appointment.time}`, {
            method: 'POST'
        });
        const data = await response.json();
        alert('Appointment booked!');
    } catch (error) {
        alert('Error booking appointment');
    }
});