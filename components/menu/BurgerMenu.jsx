"use client"
import { Menu } from "@/lib/icons";
import { Notify } from "@/lib/notify";
import Text from "../shared/Text";

export const BurgerMenu = () => {
  return (
    <>
      <Menu onClick={() =>  Notify("بسم الله الرحم الرحيم","error","تجربة")} />
    </>
  );
};
