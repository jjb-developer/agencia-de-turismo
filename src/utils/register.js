import { url } from './variables.js'
export async function registerHandler(data) {
  try {
    const response = await fetch(`${url}/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, "user_state": true }),
    });

    const responseData = await response.json();

    return {
      statusCode: response.status,
      data: responseData
    };
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
   }
}

