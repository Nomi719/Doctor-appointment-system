// "use server"

// import { revalidatePath } from "next/cache";


// export async function addRequest(data) {
//     let add = await fetch(`${process.env.BASE_URL}api/requests`, {
//       method: "POST",
//       body: JSON.stringify(data),
//     });
//      add = add.json();
//      return add;
// }

// export async function getRequest(status) {
//     let requests = await fetch(`${process.env.BASE_URL}api/requests?status=${status ? status : ""}`,{
      
//     });
//     requests = requests.json();
//     return requests;
    
// }

// export async function getSingleRequest(id) {
//   let request = await fetch(`${process.env.BASE_URL}api/requests/${id}`
    
//   );
//   request = request.json();
//   return request;
  
// }

// export async function updateRequest(id, status) {
//   let requests = await fetch(`${process.env.BASE_URL}api/requests`, {
//     method: "PUT",
//     body: JSON.stringify({ id, status }),
//   });
//   requests = requests.json();
//   revalidatePath("/admin/requests");
//   return requests;
// }


"use server";

import { revalidatePath } from "next/cache";

export async function addRequest(data) {
  try {
    let response = await fetch(`${process.env.BASE_URL}api/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let add = await response.json();
    return add;
  } catch (error) {
    console.error("Error adding request:", error);
    throw error;
  }
}

export async function getRequest(status) {
  try {
    let response = await fetch(`${process.env.BASE_URL}api/requests?status=${status ? status : ""}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let requests = await response.json();
    return requests;
  } catch (error) {
    console.error("Error getting requests:", error);
    throw error;
  }
}

export async function getSingleRequest(id) {
  try {
    let response = await fetch(`${process.env.BASE_URL}api/requests/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let request = await response.json();
    return request;
  } catch (error) {
    console.error("Error getting single request:", error);
    throw error;
  }
}

export async function updateRequest(id, status) {
  try {
    let response = await fetch(`${process.env.BASE_URL}api/requests`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let requests = await response.json();
    revalidatePath("/admin/requests");
    return requests;
  } catch (error) {
    console.error("Error updating request:", error);
    throw error;
  }
}