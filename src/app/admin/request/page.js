import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getRequest } from "@/actions/requests";


import DoctorRequests from "@/components/RequestSection";

export default async function Request({searchParams}) {
  const { status } = searchParams;
  const session = await auth();
  if (!session && session?.user?.role !== 'admin') redirect('/');

  const {requests} = await getRequest( status);
  console.log("requests", requests);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl my-3">Doctors Requests</h1>
      <DoctorRequests status={status} requests={requests} />
    </div>
  );
}