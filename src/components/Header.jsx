
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button";

  
export default function Header(){

  const session = {name: "noman"};
    return(

        <div className="bg-secondary py-3">
        <div className=" container flex justify-between mx-auto">
            <h1 className=" text-xl font-mono font-bold ">
                LOGO
            </h1>
            {
              session ?    (
              
              <Menubar>
              <MenubarMenu>
                <MenubarTrigger className= {'border-none bg-transparent'}>
                    <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </MenubarTrigger>
                <MenubarContent>
                  
                 <Link href={'/profile'}><MenubarItem>Profile</MenubarItem></Link> 
                  <MenubarSeparator />
                 <Link href={'/appointments'}>
                 <MenubarItem>My appointments</MenubarItem>
                 </Link> 
                  <MenubarSeparator />
                  <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
              ): (
                <Link href={"/signin"}>
                <Button variant={"outline"}>Login</Button>
              </Link>
            )}



        </div>

        </div>

    )
}