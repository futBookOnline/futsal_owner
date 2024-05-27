
// Send Email Verification
export const sendEmailVerification = (email) => {
  const verificationCode = Math.floor(Math.random() * 10000);
  console.log("VERIFICATION CODE: ", verificationCode)
  console.log("EMAIL: ", email)
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "futbook.online@gmail.com",
  //     pass: "Futsal@10",
  //   },
  // });

  // const mailOptions = {
  //   from: "futbook.online@gmail.com",
  //   to: email,
  //   subject: "Futsal Finder: Verify your email",
  //   text: `${verificationCode}`,
  // };
  // try {
  //   await transporter.sendMail(mailOptions);
  //   console.log("Email Sent");
  // } catch (error) {
  //   console.log("FAILED: ", error.message);
  // }
};
