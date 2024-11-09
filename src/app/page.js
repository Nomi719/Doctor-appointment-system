import DoctorsSection from "@/components/DoctorsSection";
import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/lib/data";



export default function name() {
  return(
    <div className="min-h-screen">
      <Hero/>
      <DoctorsSection isHome = {true} />
      
    </div>
  )
  
}