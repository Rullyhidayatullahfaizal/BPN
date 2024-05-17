import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/card'
import { Peta } from '../components/peta'
import LandingOne from '../components/Landing'
import { PartnerBpn } from '../components/PartnerBpn'
import { Dashboard } from '../components/Dashboard'

export const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#FFFBDA]">
        <Header></Header>
        <LandingOne></LandingOne>
        <PartnerBpn></PartnerBpn>
        <Card></Card>
        <Peta></Peta>
        <Dashboard></Dashboard>
        <div className="text-center"></div>
        <Footer></Footer>
      </div>
    </>
  )
}
