import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      email,
      subject,
      message,
      isEuropeanImporter,
      importedProducts,
      productOrigin,
    } = req.body;

    // Create a transporter object using SMTP transport options
    let transporter = nodemailer.createTransport({
      service: "Gmail", // You can use other services like Mailgun, SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password (you might need an app password for Gmail)
      },
    });

    // Organize the email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}

      --- Message ---
      ${message}

      --- Survey Responses ---
      Are you a European importer?: ${isEuropeanImporter}
      What products do you import into the EU?: ${importedProducts}
      Where were the products produced?: ${productOrigin}
    `;

    try {
      // Send mail with the defined transport object
      const info = await transporter.sendMail({
        from: email, // Sender address
        to: process.env.EMAIL_TO, // List of receivers (your email)
        subject: `${subject} - From ${name}`, // Subject line
        text: emailContent, // Email body content
      });

      // Respond with success
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
      console.log("Email sent:", info);
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
