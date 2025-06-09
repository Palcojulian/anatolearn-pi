import React from 'react'
import { type User } from 'firebase/auth';
import Nquizs from '../pages/profile-user/canvas/Nquizs';

interface Props {
  user: User;
  fecha: string;
  nQuizs: number;
  promedio: number;
  logout: () => void;
}

const InfoUser = (props: Props) => {

  return (
    <div className="w-full flex flex-col  gap-5 border border-gray-400 rounded-xl px-8 py-6 shadow-lg h-full">
      <div className="flex flex-col items-center gap-2">
        <img
          src={`${props.user?.photoURL}`}
          alt=""
          className="rounded-full"
          width={100}
        />
        <h6>{props.user ? props.user.displayName?.toUpperCase() : ""}</h6>
        <hr className="border w-[50%] border-gray-400" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm">
          <b>Email: </b>
          {props.user?.email}
        </span>
        <span className="text-sm">
          <b>Teléfono: </b>
          {props.user?.providerData[0].phoneNumber ?? "Sin telefono"}
        </span>
        <span className="text-sm">
          <b>Proveedor: </b>
          {props.user?.providerData[0].providerId}
        </span>
        <span className="text-sm">
          <b>Email verificado: </b>
          {props.user?.emailVerified ? "Si" : "No"}
        </span>
        <span className="text-sm">
          <b>Fecha inicio sesión: </b>
          {props.fecha}
        </span>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold" >QUIZ's REALIZADOS</span>
            <Nquizs text={props.nQuizs+''} />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-bold" >PROMEDIO</span>
            <Nquizs text={props.promedio.toFixed(1)} />

          </div>
        </div>
        <button onClick={props.logout} className="btn-primary text-sm" >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default InfoUser
