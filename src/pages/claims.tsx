import { useState } from "react";
import { Modal, Button } from "@/components";

const Claims = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <h1>This is hero on relesease candidate</h1>
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Open modal
      </Button>
      <Modal open={isModalOpen} onCloseModal={() => setIsModalOpen(false)}>
        <h1>Modal</h1>
      </Modal>
    </>
  );
};

export default Claims;
