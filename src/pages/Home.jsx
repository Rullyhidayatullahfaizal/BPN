import React, { useRef } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/card'
import { Peta } from '../components/peta'
import LandingOne from '../components/Landing'
import { PartnerBpn } from '../components/PartnerBpn'
import { Dashboard } from '../components/Dashboard'

export const Home = () => {

  const dashboardRef = useRef(null);

    const scrollToDashboard = () => {
        dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#FFFBDA]">
        <Header></Header>
        <LandingOne onStatistikClick={scrollToDashboard}></LandingOne>
        <PartnerBpn></PartnerBpn>
        <Card></Card>
        <Peta></Peta>
        <div ref={dashboardRef}>
                    <Dashboard />
          </div>
        <Footer></Footer>
      </div>
    </>
  )
}
