import "./App.css";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "./components/Modal";
import Hookform from "./components/Hookform";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app my-4">
      <div className="app my-4 mx-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1597038519284-aa729dd6d720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NjMzMDk2Mzd8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=294&q=60/286×180"
          />
          <Card.Body>
            <Card.Title>Apple-Series 5</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div onClick={() => console.log("clicked")}>
              <Button onClick={() => setIsOpen(true)}>Feedback</Button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Hookform />
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="app my-4 mx-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjA1fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60/286×180"
          />
          <Card.Body>
            <Card.Title>Apple-Series 6</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div onClick={() => console.log("clicked")}>
              <Button onClick={() => setIsOpen(true)}>FeedBack</Button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Hookform />
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="app my-4 mx-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1519315910113-861dcfbfb9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MjQxMTM2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60/286×180"
          />
          <Card.Body>
            <Card.Title>Apple-Series 7</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div onClick={() => console.log("clicked")}>
              <Button onClick={() => setIsOpen(true)}>Feedback</Button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Hookform />
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="app my-4 mx-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/286×180"
          />
          <Card.Body>
            <Card.Title>Air-Pods Gen-3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div onClick={() => console.log("clicked")}>
              <Button onClick={() => setIsOpen(true)}>Feedback</Button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Hookform />
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
