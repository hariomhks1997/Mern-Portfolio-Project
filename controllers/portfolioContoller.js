





const Sib = require('sib-api-v3-sdk');
const client = Sib.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.API_KEY;
const tranEmailApi = new Sib.TransactionalEmailsApi();

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const sender = {
      email:email,
      name:name,
  }
  const receivers = [
      {
          email: process.env.EMAIL_ID ,
      }
  ]
  await tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: "Portfolio issue",
    htmlContent: `
    <h5>Detail Information</h5>
    <ul>
      <li><p>Name : ${name}</p></li>
      <li><p>Email : ${email}</p></li>
      <li><p>Message : ${msg}</p></li>
    </ul>`
})
    

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
