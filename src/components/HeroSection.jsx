import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


export default function Hero(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-3/4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-semibold sm:text-3xl text-xl mb-4 text-gray-900">
        DOCTOR's APPOINTMENT SYSTEM 
        <br className="hidden lg:inline-block" />
        BY Batch-11
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-2">
        <Button variant = {'outline'}>Find doctor you need</Button>
        <Link href={'/doctors/apply'}>
        
        <Button>Apply as doctor</Button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={400}
        width={400}
        src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  </div>
</section>

    )
}