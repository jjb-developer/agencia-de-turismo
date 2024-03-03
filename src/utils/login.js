import { url } from './variables.js'

// LOGIN DE USUARIO
export async function loginHandler(user,pass) {

  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: user, password: pass }),
    });

    const responseData = await response.json();
   
    localStorage.setItem('user', JSON.stringify({...responseData, statusCode: response.status}))
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
}