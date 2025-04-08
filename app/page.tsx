import React from "react"

import Header from "@/components/layout/Header"
import Navi from "@/components/layout/Navi"
import NaviMobile from "@/components/layout/NaviMobile"
import Main from "@/components/layout/Main"
import Sidebar from "@/components/layout/Sidebar"

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navi */}
      <header className="bg-teal-500 border-b border-slate-200 fixed top-0 w-full z-30">
        <div className="container mx-auto px-4 py-3">
          <Header/>
        </div>
      </header>

      {/* Mobile Navi Overlay */}
      <NaviMobile/>

      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar Navi - Desktop */}
          <nav className="hidden lg:block lg:w-64 py-4">
            <div className="sticky top-20">
              <Navi/>
            </div>
          </nav>

          {/* Main Content / Timeline */}
          <main className="flex-1 py-4">
            <Main/>
          </main>

          {/* Right Sidebar - Statistics - Desktop View */}
          <aside className="hidden lg:block lg:w-80 py-4">
            <div className="sticky top-20">
              <Sidebar/>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
