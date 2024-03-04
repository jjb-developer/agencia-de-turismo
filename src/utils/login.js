import { url } from './variables.js'

// LOGIN DE USUARIO
async function loginHandler(user,pass) {

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

    return true

  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
}


export async function loginGetInfoHandle(username,password){

  try {
    const response = await loginHandler(username, username);

    if(response){
      const user = JSON.parse(localStorage.getItem("user"))

      if (user.statusCode != 403){
        try {
          return await fetch(`${url}/user`, {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${user.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => data.results );
        } catch (error) {
          console.log(error.message)
        }
      }
    }

  } catch (error) {
    console.log("Error en la petición login:", error.message);
  }
}
