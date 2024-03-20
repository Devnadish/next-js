import ThemeSwitch from "@/components/shared/ThemeSwitch";

export const SideBar = () => {
  return (
    <aside className="flex flex-col items-center justify-center fixed top-[50px] left-0 shadow-xl h-screen bg-accent/70 w-[56px]  ">
      <div className="border-y border-border h-1/4 w-full flex items-center justify-center">
        icon
      </div>
      <div className="border-y border-border  h-full w-full flex items-center justify-center">
        icons
      </div>
      <div className="border-y border-border h-1/4 w-full flex items-center justify-start flex-col py-2">
        {/* <ModeToggle /> */}
        <ThemeSwitch />
      </div>


    </aside>
  );
};
