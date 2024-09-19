import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Workmodal = ({ onClose, children }) => {
  return (
    <Card className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <CardContent className=" bg-primary text-white dark:bg-secondary p-6 max-w-md w-full">
        {children}
      </CardContent>
    </Card>
  );
};

export default Workmodal;
