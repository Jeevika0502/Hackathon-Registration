const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const registerNumber =
        document.getElementById("registerNumber").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const selectedEvent =
        document.getElementById("event").value;

    const team =
        document.getElementById("team").value.trim();

    const idea =
        document.getElementById("idea").value.trim();


    // Clear previous errors

    document.getElementById("nameError").textContent = "";
    document.getElementById("registerError").textContent = "";
    document.getElementById("departmentError").textContent = "";
    document.getElementById("yearError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("teamError").textContent = "";

    let valid = true;


    // Name validation

    if (name === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name.";

        valid = false;
    }


    // Register number validation

    if (registerNumber === "") {

        document.getElementById("registerError").textContent =
            "Please enter your register number.";

        valid = false;
    }


    // Department validation

    if (department === "") {

        document.getElementById("departmentError").textContent =
            "Please select your department.";

        valid = false;
    }


    // Year validation

    if (year === "") {

        document.getElementById("yearError").textContent =
            "Please select your year.";

        valid = false;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    // Mobile validation

    const mobilePattern =
        /^[0-9]{10}$/;

    if (mobile === "") {

        document.getElementById("mobileError").textContent =
            "Please enter your mobile number.";

        valid = false;

    } else if (!mobilePattern.test(mobile)) {

        document.getElementById("mobileError").textContent =
            "Mobile number must contain exactly 10 digits.";

        valid = false;
    }


    // Event validation

    if (selectedEvent === "") {

        document.getElementById("eventError").textContent =
            "Please select a hackathon track.";

        valid = false;
    }


    // Team validation

    if (team === "") {

        document.getElementById("teamError").textContent =
            "Please enter your team name.";

        valid = false;
    }


    // Stop if invalid

    if (!valid) {

        return;
    }


    // Registration data

    const registrationData = {

        name: name,

        registerNumber: registerNumber,

        department: department,

        year: year,

        email: email,

        mobile: mobile,

        event: selectedEvent,

        team: team,

        projectIdea: idea,

        registeredAt: new Date().toLocaleString()

    };


    // Get existing registrations

    let registrations =
        JSON.parse(localStorage.getItem("technovaRegistrations")) || [];


    // Add new registration

    registrations.push(registrationData);


    // Save data

    localStorage.setItem(
        "technovaRegistrations",
        JSON.stringify(registrations)
    );


    // Show success message

    document.getElementById("successMessage").style.display = "block";


    // Reset form

    form.reset();


    // Scroll to success message

    document.getElementById("successMessage").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});