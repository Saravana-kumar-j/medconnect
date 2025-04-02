# MedConnect

MedConnect is a **Spring Boot**-based healthcare management system that facilitates doctor-patient interactions, appointment scheduling, and medical record tracking. The application follows a **layered architecture** (Controller → Service → Repository) and integrates **Spring Security**, **Spring Data JPA**, and **Thymeleaf/Web UI**.

---

## 🚀 Features
- 📋 **Doctor and Patient Management**: Register, update, and view doctor/patient details.
- 🗓 **Appointment Scheduling**: Book, cancel, and manage appointments.
- 🔐 **User Authentication**: Secure login and role-based access control.
- 🏥 **Medical Record Storage**: Store and retrieve patient history.
- 🌐 **RESTful API**: JSON-based API endpoints for frontend integration.
- 💾 **Database Persistence**: Uses MySQL with Spring Data JPA.
- 📊 **Admin Dashboard**: Manage system users and appointments.

---

## 🏗️ Tech Stack
- **Backend**: Java, Spring Boot, Spring Security, Spring Data JPA
- **Frontend**: HTML, CSS, JavaScript (optional Thymeleaf templates)
- **Database**: MySQL (configured via `application.properties`)
- **Build Tool**: Maven
- **Security**: Spring Security (authentication & authorization)

---

## 📂 Project Structure
```
MedConnect/
│-- src/main/java/com/medconnect/
│   │-- controller/        # REST Controllers
│   │-- service/           # Business Logic Layer
│   │-- repository/        # Spring Data JPA Repositories
│   │-- model/             # Entity Definitions
│   │-- config/            # Security and Application Configurations
│   │-- MedconnectApplication.java  # Main Spring Boot Application
│-- src/main/resources/
│   │-- templates/         # Thymeleaf HTML Templates (if applicable)
│   │-- static/            # CSS, JS, and other frontend assets
│   │-- application.properties  # Database & Spring Boot Configs
│-- pom.xml                # Maven Dependencies
│-- README.md              # Project Documentation
```

---

## 🛠️ Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/Saravana-kumar-j/medconnect.git
cd medconnect
```
### **2. Configure Database (MySQL)**
Make sure MySQL is running and update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/medconnect
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
```

### **3. Build and Run the Application**
```bash
mvn clean install
mvn spring-boot:run
```
The application will start on **`http://localhost:8080`**.

### **4. API Endpoints (Postman or Browser)**
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/doctors`        | Fetch all doctors |
| POST   | `/doctors`        | Add a new doctor |
| GET    | `/patients`       | Fetch all patients |
| POST   | `/appointments`   | Book an appointment |

---


## 📜 License
This project is licensed under the **MIT License**.

---

## 📧 Contact
For any issues, reach out at [your-email@example.com](mailto:saravanakumarj.net@gmail.com) or open a GitHub issue.
