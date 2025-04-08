"use client"

import React from "react"
import {Bell, Menu, UserCircle, X} from "lucide-react"
import { useIsMenuOpen } from '@/context/IsMenuOpenContext'

const Header = () => {
  const { isMenuOpen, handleIsMenuToggle } = useIsMenuOpen()

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={() => handleIsMenuToggle(!isMenuOpen)}
          className="p-2 -ml-2 mr-2 hover:bg-slate-100 rounded-full lg:hidden"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-slate-600"/> : <Menu className="w-6 h-6 text-slate-600"/>}
        </button>
        <h1 className="text-xl font-bold text-slate-800">勤怠管理システム</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-slate-100 rounded-full">
          <Bell className="w-5 h-5 text-slate-600"/>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-full">
          <UserCircle className="w-6 h-6 text-slate-600"/>
        </button>
      </div>
    </div>
  )
}

export default Header;