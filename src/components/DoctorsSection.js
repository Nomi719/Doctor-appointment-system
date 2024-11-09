import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, doctors } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Car } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ClockIcon, HomeIcon, PlusIcon } from "@radix-ui/react-icons";
  



export default function DoctorsSection({isHome}) {

    const filtered = isHome ? doctors.slice(0,6) : doctors;
  return(

    <div className="container mx-auto my-5">

      <div className=" flex justify-between">
        <h1 className="text-3xl font-semibold"> Doctors you need</h1>
        
        {
            isHome ? (
                <Link href={'/doctors'}>
                <Button>See All</Button>
                </Link>
            ) : (

        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="select" />
  </SelectTrigger>
  <SelectContent>
    {
      categories.map((category)=> <SelectItem key={category} value={category}>{category}</SelectItem>
    )
    }
   
  </SelectContent>
</Select>
            )
        }

      </div>

                             {/* cardSection */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
    {filtered.map((doctor) => (
          <Card key={doctor.name}>
            <CardHeader className={"flex flex-row  "}>
              <Avatar className="self-center h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DAS</AvatarFallback>
              </Avatar>
              <div className="pl-3">
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.category}</CardDescription>
              </div>
            </CardHeader>

            {
              !isHome && <CardContent>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                  <HomeIcon />
                  <h1 className="font-semibold">Gender</h1>
                </div>
                <h1>{doctor.gender}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                  <PlusIcon />
                  <h1 className="font-semibold">Hospital</h1>
                </div>
                <h1>{doctor.hospital}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex gap-2 items-center">
                  <ClockIcon />
                  <h1 className="font-semibold">Appointment Time</h1>
                </div>
                <h1>{doctor.appointmentTime}</h1>
              </div>
            </CardContent>
            }

            

              <CardFooter>
                <Link href={`/doctors/${doctor.id}`}>
                <Button>See details</Button>
                </Link>
              </CardFooter>
                </Card>
            ))
        }



    </div>

    </div>
   
)
}