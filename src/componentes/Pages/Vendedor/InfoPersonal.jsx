import store from "../../../utils/store";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export default function infoPersonal() {
  const { getUser } = store();
  const { setUser } = store();
  const [edit, setEdit] = useState(false);
  const [updateUser, setUpdateUser] = useState({ ...getUser });

  function exampleSubmit(e) {
    e.preventDefault();
    const { name, lastname, username, dni, country, birthdate, phone, email } =
      updateUser;
    console.info({
      name,
      lastname,
      username,
      dni,
      country,
      birthdate,
      phone,
      email,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, lastname, username, dni, country, birthdate, phone, email } =
      updateUser;

    const user = JSON.parse(localStorage.getItem("user"));
    fetch("https://agencia-de-turismo.onrender.com/seller", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name,
        lastname,
        username,
        dni,
        country,
        birthdate,
        phone,
        email,
      }),
    })
      .then((res) => {
        if (res.status === 200)
          setUser({
            ...getUser,
            name,
            lastname,
            username,
            dni,
            country,
            birthdate,
            phone,
            email,
          });
        return res.json();
      })
      .then((data) => console.log(data.message))
      .catch((error) =>
        console.error("Error al procesar solicitud de venta: ", error)
      );
    setEdit(!edit);
  }

  return (
    <section
      className="py-36 w-full bg-zinc-100 text-center"
      style={{
        backgroundImage: "url('/informacionUsuario.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        opacity: 0.9, //Ajusta este valor según la opacidad deseada
      }}
    >
      <div className=" w-96 mx-auto py-6 rounded-lg border-2 border-zinc-500">
        <h3 className="capitalize text-xl font-bold text-slate-700">
          Informacion de vendedor
        </h3>

        <div className="mt-6 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-96 flex flex-col gap-y-2
				"
          >
            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                name
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[a-z]{3,20}$"
                  type="text"
                  placeholder="name"
                  value={updateUser.name}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, name: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.name}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                lastname
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[a-z]{3,20}$"
                  type="text"
                  placeholder="lastname"
                  value={updateUser.lastname}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, lastname: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.lastname}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                birthdate
              </label>
              {edit ? (
                <input
                  required
                  type="text"
                  placeholder="birthdate"
                  value={updateUser.birthdate}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, birthdate: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.birthdate}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                country
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[a-z]{3,20}$"
                  type="text"
                  placeholder="country"
                  value={updateUser.country}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, country: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.country}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                dni
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[0-9]{8,9}$"
                  type="text"
                  placeholder="dni"
                  value={updateUser.dni}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, dni: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.dni}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                email
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[a-z][a-z0-9]{4,16}@[a-z]{4,10}\.com$"
                  type="text"
                  placeholder="email"
                  value={updateUser.email}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, email: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.email}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                phone
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[0-9]{8,}$"
                  type="text"
                  placeholder="phone"
                  value={updateUser.phone}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, phone: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.phone}</label>
              )}
            </div>

            <div className="flex items-center gap-x-4 mx-auto">
              <label
                className="label_title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                username
              </label>
              {edit ? (
                <input
                  required
                  pattern="^[A-Za-z][A-Za-z0-9]{4,20}$"
                  type="text"
                  placeholder="username"
                  value={updateUser.username}
                  onChange={(e) =>
                    setUpdateUser({ ...updateUser, username: e.target.value })
                  }
                />
              ) : (
                <label className="label_info">{updateUser.username}</label>
              )}
            </div>
            <button
              type="submit"
              className={`w-1/2 mt-10 px-7 mx-auto text-sm text-center font-bold py-3 rounded-md uppercase bg-emerald-800 hover:bg-orange-700 text-white ${
                edit ? "" : "hidden"
              }`}
            >
              update
            </button>
          </form>
          <button
            onClick={() => setEdit(!edit)}
            className={`w-1/2 mx-auto mt-10 text-sm font-bold py-3 rounded-md uppercase bg-emerald-800 hover:bg-orange-700 text-white ${
              edit ? "hidden" : ""
            }`}
          >
            <BiEditAlt size="20" className="text-white mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
