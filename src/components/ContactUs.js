import { FloatingLabel, Form } from "react-bootstrap";
import emailpic from "../images/emailpic.png";
import emailjs from "emailjs-com";

function ContactUs() {
  //   let mailSent = false;
  const onFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62zm63h",
        "template_k82uu9j",
        e.target,
        "2aqrXlbsDCrI_ERzk"
      )
      .then(
        (result) => {
          console.log("sent");
          alert('Mail sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container text-center">
      <img src={emailpic} alt="my email pic" style={{"width": "40%"}}></img>
      
      <Form onSubmit={onFormSubmit} className="w-50">
      <p className="display-6 text-primary">Email us</p>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter your name"
          className="mb-3"
        >
          <Form.Control type="name" placeholder="name" name="name" />
        </FloatingLabel>
        <FloatingLabel label="Enter Message" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            name="message"
          />
        </FloatingLabel>
        <button type="submit" className="btn btn-primary ">
          Send mail
        </button>
      </Form>
    </div>
  );
}

export default ContactUs;
