import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StatInfo = ({ children, number, info, bg, status }) => {
  return (
    <Card className={`${bg} text-white`}>
      <CardHeader>
        {children}
        <CardDescription className="text-white font-semibold">
          {info}
        </CardDescription>
        <CardTitle>
          <div className="font-sans text-3xl font-extrabold">
            {number} <p className="inline-block text-sm">{" " + status}</p>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default StatInfo;
