import React from 'react';
import { Button, Modal } from 'antd';

function DeletePopUp({ isModalOpen, handleOk, handleCancel }) {
    return (
        <Modal centered title="" okText="Confirm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h4 style={{ textAlign: "center", padding: "20px 0", fontSize: "20px", fontWeight: 500 }}>Are you sure want to delete this ?</h4>
        </Modal>
    )
}

export default DeletePopUp
