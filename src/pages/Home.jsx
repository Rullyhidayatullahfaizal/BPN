import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/card'
import { Peta } from '../components/peta'

export const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#FFFBDA]">
        <Header></Header>
        <Card></Card>
        <Peta></Peta>
        <div className="text-center"></div>
        <Footer></Footer>
      </div>
    </>
  )
}
