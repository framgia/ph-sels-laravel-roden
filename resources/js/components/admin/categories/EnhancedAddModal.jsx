import React from 'react';
import AddModal from './AddModal';

class EnhancedAddModal extends React.Component {
	render() {
    return <AddModal {...this.props} />
  }
}

export default EnhancedAddModal;

