import { Container } from "react-bootstrap";
import image2 from "../images/image2.png";
function Home() {
  return (
    <div>
      <p className="display-4 text-primary mt-2 mb-0">Home</p>
      <Container>
        <img src={image2} alt="My innovation" className="w-50"></img>
        <p className="text-center " style={{ "font-size": "20px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. There are many variations of
          passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage
          of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text.
        </p>
      </Container>
    </div>
  );
}

export default Home;
