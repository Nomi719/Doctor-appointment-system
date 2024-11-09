import { columns } from "@/components/AppointmentTable/Columns";
import { AppointmentTable } from "@/components/AppointmentTable/Data-table";
import { appointments } from "@/lib/data";

export default function Appointment(){
    return(
        <div className="container mx-auto">
            <div className="my-10">

            <AppointmentTable columns={columns} data={appointments}/>
            </div>
        </div>
    )
}