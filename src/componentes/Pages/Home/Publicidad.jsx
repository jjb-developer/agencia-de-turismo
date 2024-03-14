import React from "react";
import store from "../../../utils/store";

export default function Publicidad({ isLoggedIn }) {
  const { getUser } = store();

  const isCliente = getUser && getUser.role === "cliente";
  const isVendedor = getUser && getUser.role === "vendedor";

  return (
    <div>
      {!isLoggedIn ? (
        <div className="mx-auto mt-24 bg-emerald-200 w-[350px] base:w-[768px] md:w-[1024px] lg:w-[1400px] xl:w-[1800px] h-[200px] md:h-[400px] flex justify-around text-center">
          <h1
            className="my-auto mx-auto text-xl md:text-4xl lg:text-3xl font-bold font-roboto "
            style={{ transform: "rotate(-6deg)" }}
          >
            Encontrá tu próximo destino.
            <br /> Regístrate y vivi una experiencia única
          </h1>
          <img
            src="./imagenTurismo.png"
            alt=""
            className=" w-[600px] h-96 hidden sm:hidden md:hidden lg:block bg-cover my-auto mr-64"
          />
        </div>
      ) : (
        <>
          {isCliente && (
            <div className="mx-auto mt-24 bg-orange-200 w-[350px] base:w-[768px] md:w-[1024px] lg:w-[1400px] xl:w-[1800px] h-[200px] md:h-[400px] flex justify-around text-center">
              <h1
                className="my-auto mx-auto text-xl md:text-4xl lg:text-3xl font-bold font-roboto "
                style={{ transform: "rotate(-6deg)" }}
              >
                Encontrá tu paquete preferido y ahorra con un 10% de descuento
                <br /> Vive una experiencia única
              </h1>
              <img
                src="./publicidadLogueado.png"
                alt=""
                className=" w-[600px] h-96 hidden sm:hidden md:hidden lg:block bg-cover my-auto mr-64"
              />
            </div>
          )}

          {isVendedor && (
            <div className="mx-auto mt-24 bg-orange-200 w-[350px] base:w-[768px] md:w-[1024px] lg:w-[1400px] xl:w-[1800px] h-[200px] md:h-[400px] flex justify-around text-center">
              <h1
                className="my-auto mx-auto text-xl md:text-4xl lg:text-3xl font-bold font-roboto "
                style={{ transform: "rotate(-6deg)" }}
              >
                Mejora tus ventas Agregando detalles a tus publicaciones 
                <br /> Gracias por ser parte de nuestro staff
              </h1>
              <img
                src="./publicidadVendedor.png"
                alt=""
                className=" w-[600px] h-96 hidden sm:hidden md:hidden lg:block bg-cover my-auto mr-64"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
