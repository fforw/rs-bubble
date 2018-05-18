
import React from "react"
import { render } from "react-dom"

import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap"

class Main extends React.Component {

    state = {
        modalOpen : false
    };

    toggle = () => this.setState({ modalOpen: !this.state.modalOpen});

    render()
    {
        const { modalOpen } = this.state;

        return (
            <form
                onSubmit={ ev => alert("Main form submit") }
            >
                <Button
                    color="seconday"
                    type="button"
                    onClick={ this.toggle }
                >
                    Open Modal
                </Button>
                <Button
                    type="submit"
                    color="primary"
                >
                    Submit
                </Button>
                <Modal isOpen={ modalOpen } toggle={ this.toggle }>
                    <ModalHeader toggle={ this.toggle }>
                        Modal with nested Form
                    </ModalHeader>
                    <ModalBody>
                        <form
                            onSubmit={ ev => alert("Modal submit") }
                        >
                            <Button
                                type="submit"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </form>

                    </ModalBody>
                </Modal>
            </form>
        )
    }
}


window.onload = () => render(
    <Main/>,
    document.getElementById("root"),
    () => console.log("ready")
);
