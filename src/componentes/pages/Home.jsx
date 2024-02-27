import Navbar from "../Nav/Navbar";
import SectionSearch from "../Search/Section";
import Info from "../Result/Info";
import { useEffect } from "react";
import Search from "../Search/Section";

export default function Home() {
  const url = "https://agencia-de-turismo.onrender.com";
  const urlDev = "http://localhost:3001";
  const tokenC =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0NywiaWF0IjoxNzA4OTkyNDkyLCJleHAiOjE3MDg5OTYwOTJ9.GGCCeDN50zpeW02T-OP7HtKtRhr9gmjL1hoj9WKuY44";
  const tokenV =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0OCwiaWF0IjoxNzA5MDAxNjc1LCJleHAiOjE3MDkwMDUyNzV9.mwr5VFqRSwzqi0TyBvx-lLLkG_Yu0vz2idf_GDlAOws";
  function loadServiceHandler() {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      });
  }
  function loginHandler() {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: "cristobal", password: "cristobal" }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error al procesar la solicitud", error));
  }
  function createSalesHandler() {
    fetch(`${url}/sales`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenC}`,
      },
      body: JSON.stringify({
        id_servicios: [4, 5],
        payment_method: "mastercard",
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error al procesar la solicitud", error));
  }
  function getSalesHandler() {
    fetch(`${url}/sales`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenV}`,
      },
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error al procesar la solicitud", error));
  }
  //solo rol empleado
  function createServiceHandler() {
    fetch(`${url}/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenV}`,
      },
      body: JSON.stringify({
        name: "pasaje de colectivo",
        description: "viaja en bondi con aire acondicionado",
        service_destination: "caba",
        service_date: "2024-11-04",
        cost: "1",
        service_code: 4,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error al procesar la solicitud", error));
  }
  return (
    <div className="flex flex-col gap-3">
      <section className="w-full h-auto ">
        <Navbar />
      </section>
      <section className=" w-full min-h-fit flex flex-col gap-y-4 justify-center p-4">
          <Search />
          <Info />
      </section>
    </div>
  );
}
