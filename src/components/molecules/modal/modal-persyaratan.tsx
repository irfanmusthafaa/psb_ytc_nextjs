import React from "react";
import { Modal } from "antd";

interface ModalPersyaratanProps {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const ModalPersyaratan: React.FC<ModalPersyaratanProps> = ({
  open,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      title="Modal 1000px width"
      centered
      width={1000}
      open={open}
      onCancel={onCancel}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default ModalPersyaratan;
