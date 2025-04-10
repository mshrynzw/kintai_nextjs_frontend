import React from "react"
import Status from "@/components/layout/Status"
import Timeline from "@/components/layout/Timeline"
import Stamp from "@/components/common/Stamp"
import StampsProvider from "@/components/common/StampsProvider"

const Home = () => {
  return (
    <StampsProvider>
      {/* Today's Status */}
      <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 to-slate-50">
        <div className="flex items-center justify-between">
          <Status/>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Stamp/>
        </div>
      </div>

      {/* Timeline */}
      <div className="divide-y divide-slate-100">
        <Timeline/>
      </div>
    </StampsProvider>
  )
}

export default Home
