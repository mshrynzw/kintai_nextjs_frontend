import React from "react"

const Sidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">今月の統計</h2>
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <p className="text-sm text-slate-600 mb-1">総勤務時間</p>
          <p className="text-2xl font-semibold text-teal-600">160時間 30分</p>
        </div>
        <div className="border-b border-slate-100 pb-3">
          <p className="text-sm text-slate-600 mb-1">残業時間</p>
          <p className="text-2xl font-semibold text-teal-600">10時間 15分</p>
        </div>
        <div>
          <p className="text-sm text-slate-600 mb-1">休暇取得日数</p>
          <p className="text-2xl font-semibold text-teal-600">2日</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
