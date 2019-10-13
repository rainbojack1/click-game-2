import React, { Component } from "react";

class StartOver extends Component {
  state = {
    isOpen: this.props.showModal,
    tryingToClose: false
  }

    componentDidUpdate(prevProps) {
        if (prevProps.showModal !== this.props.showModal) {
            if (this.state.tryingToClose === false){
                this.setState({isOpen: this.props.showModal});
            } else{
                this.setState({tryingToClose: false});
            }
        }
    }
    
  closeModal = () => {
    this.setState({tryingToClose: true});
    this.setState({isOpen: false});
    
   }

  render() {
    if (this.state.isOpen) {
      return (
        <div
            className="modal"
            id="startOverModal"
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Round Over</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.closeModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>You Already Picked This One. Try Again.</p>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default StartOver;
