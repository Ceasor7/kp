import React from "react";
import { Button } from "./ui/button";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-lg max-w-md w-full">
        {children}
        <Button className="mt-4 bg-primary py-2 px-4 rounded" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
