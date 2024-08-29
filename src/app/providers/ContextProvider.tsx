"use client"
import React from "react"
import { GlobalStyleProviders } from "./GlobalStyleProviders";


interface Props{
    children:React.ReactNode;
}

const ContextProvider = ({children}:Props) => {
  return (
    <GlobalStyleProviders>{children}</GlobalStyleProviders>
    
  )
}

export default ContextProvider