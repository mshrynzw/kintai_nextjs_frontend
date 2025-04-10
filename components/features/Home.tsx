import React from "react"
import Status from "@/components/layout/Status"
import Timeline from "@/components/layout/Timeline"

const Home = () => {
  return (
    <>
      {/* Today's Status */}
      <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 to-slate-50">
        <Status/>
      </div>

      {/* Timeline */}
      <div className="divide-y divide-slate-100">
        <Timeline/>
      </div>
    </>
  )
}
export default Home;
