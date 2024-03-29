import React from "react";
import { Modal } from "antd";

const CsModal = ({ open, title, content, onCancel, onOk }) => {
  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        footer={[]}
        width={1000}
      >
        {content}
      </Modal>
    </>
  );
};

export default CsModal;
