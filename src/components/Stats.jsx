import React from "react";
import StatInfo from "./StatInfo";
import { Button } from "@/components/ui/button";
import { BsCartCheckFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartXFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";

const Stats = () => {
  return (
    <div className="flex gap-2 flex-row flex-wrap">
      <StatInfo
        info={"Total orders"}
        number={"75"}
        bg={"bg-blue-400"}
        status={"▲3%"}
      >
        <Button className="bg-blue-600 hover:bg-blue-600">
          <BsFillCartPlusFill size={25} />
        </Button>
      </StatInfo>

      <StatInfo
        info={"Total delivered"}
        number={"70"}
        status={"▼3%"}
        bg={"bg-green-300"}
      >
        <Button className="bg-green-400 hover:bg-green-400">
          <BsCartCheckFill size={25} />
        </Button>
      </StatInfo>

      <StatInfo
        info={"Total Cancelled"}
        number={"5 "}
        status={"▲3%"}
        bg={"bg-red-400"}
      >
        <Button className="bg-red-500 hover:bg-red-500">
          <BsFillCartXFill size={25} />
        </Button>
      </StatInfo>

      <StatInfo
        info={"Total Profit"}
        number={"$12k"}
        status={"▲3%"}
        bg={"bg-pink-300"}
      >
        <Button className="bg-pink-500 hover:bg-pink-500">
          <BsCashCoin size={25} />
        </Button>
      </StatInfo>
    </div>
  );
};

export default Stats;
