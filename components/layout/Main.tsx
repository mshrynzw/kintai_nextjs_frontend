"use client"

import React from "react"
import Stamp from "@/components/features/Stamp"
import Home from "@/components/features/Home"
import {useFeature} from "@/context/FeatureContext"

const Main = () => {
  const {feature} = useFeature()

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        {feature === "stamp"
          ? <Stamp/>
          : <Home/>
        }
      </div>

      {/* Statistics - Mobile/Tablet View */}
      <div className="mt-6 lg:hidden">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">今月の統計</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
              <p className="text-sm text-slate-600 mb-1">総勤務時間</p>
              <p className="text-2xl font-semibold text-teal-600">160時間 30分</p>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
              <p className="text-sm text-slate-600 mb-1">残業時間</p>
              <p className="text-2xl font-semibold text-teal-600">10時間 15分</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">休暇取得日数</p>
              <p className="text-2xl font-semibold text-teal-600">2日</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
