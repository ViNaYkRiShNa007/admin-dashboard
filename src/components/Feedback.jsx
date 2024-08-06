import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Feedback = ({ name, stars, message }) => {
  return (
    <Card className="bg-blue-950">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row space-x-3">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="font-bold text-2xl text-slate-400">{name}</div>
          </div>
        </CardTitle>
        <CardDescription>
          {" "}
          <div className="flex justify-center flex-row space-x-3 text-yellow-400">
            <div>
              <FaStar />
            </div>
            <div>{stars}</div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="text-balance text-slate-300">{message}</article>
      </CardContent>
    </Card>
  );
};

export default Feedback;
