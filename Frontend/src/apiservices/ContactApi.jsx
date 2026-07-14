export const sendMail = async (Form_data) => {
  try {
    const response = await fetch("http://localhost:8000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
              to: "veerpaldhillon2005@gmail.com",
              subject: "Contact Form - Real Estate Website",
              name: Form_data.name,
              email: Form_data.email,
              phone: Form_data.phone,
              message: Form_data.message,
            })
    });

    const data = await response.json();

    console.log("Sending mail data:", data);

    alert("Message sent successfully!");

    return data;
  } catch (err) {
    console.error(err);
    alert("Failed to send message");
  }
};