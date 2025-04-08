"use client"

import React from "react"
import Navi from "@/components/layout/Navi"
import { useIsMenuOpen } from '@/context/IsMenuOpenContext'

const NaviMobile = () => {
  const { isMenuOpen, handleIsMenuToggle } = useIsMenuOpen()

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => handleIsMenuToggle(false)}>
          <div
            className="fixed inset-y-0 left-0 w-full bg-white shadow-lg p-4 pt-20"
            onClick={e => e.stopPropagation()}
          >
            <Navi/>
          </div>
        </div>
      )}
    </>
  )
}

export default NaviMobile;