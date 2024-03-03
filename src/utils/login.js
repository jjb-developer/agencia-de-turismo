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
    localStorage.setItem('user', JSON.stringify({...responseData, status: 200}))
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
}