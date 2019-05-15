import React, { Component } from 'react';
import Modal from 'react-modal';
import DetailView from './DetailView.jsx';

Modal.setAppElement('#app');

class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  }

  render() {
    const { modalIsOpen } = this.state;
    const { vehicle } = this.props;
    return (
      <div>
        <div className="vehicle-wrapper" onClick={this.toggleModal}>
          <div className="vehicle-detail">
            {vehicle.Year}
          </div>

          <div className="vehicle-detail">
            {vehicle.Make}
          </div>
          <div className="vehicle-detail">
            {vehicle.Model}
          </div>
        </div>
        {modalIsOpen && (
          <Modal isOpen={modalIsOpen} onRequestClose={this.toggleModal} contentLabel="Detail View">
            <DetailView vehicle={vehicle} />
          </Modal>
        )}
      </div>
    );
  }
}

export default Vehicle;
