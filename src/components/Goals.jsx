import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosPlayCircle } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
const Goals = () => {
  return (
    <Card>
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle className="inline-block ">
            <div className="flex flex-row justify-between cursor-pointer">
              <div className="flex gap-2">
                <div>
                  <FiTarget />
                </div>
                <div> Goals</div>
              </div>

              <div>
                <IoIosPlayCircle />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle className="inline-block ">
            <div className="flex flex-row justify-between cursor-pointer">
              <div className="flex gap-2">
                <div>
                  <FaHamburger />
                </div>
                <div> Popular Dishes</div>
              </div>

              <div>
                <IoIosPlayCircle />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle className="inline-block ">
            <div className="flex flex-row justify-between cursor-pointer">
              <div className="flex gap-2">
                <div>
                  <BiSolidDish />
                </div>
                <div> Menus</div>
              </div>

              <div>
                <IoIosPlayCircle />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </Card>
  );
};

export default Goals;
