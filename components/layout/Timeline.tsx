import React from "react"
import {ChevronRight, Clock} from "lucide-react"

const Timeline = () => {
  const timelineItems = [
    {
      type: 'clock-in',
      time: '09:00',
      date: '2024-03-15',
      message: '出勤しました'
    },
    {
      type: 'notification',
      time: '12:30',
      date: '2024-03-15',
      message: '休憩時間です'
    },
    {
      type: 'clock-out',
      time: '18:00',
      date: '2024-03-15',
      message: '退勤しました'
    }
  ];

  return (
    <>
    {timelineItems.map((item, index) => (
        <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Clock className="w-5 h-5 text-teal-500" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-slate-900">{item.message}</p>
              <p className="text-sm text-slate-500">{item.date} {item.time}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </div>
      ))}
    </>
  )
}

export default Timeline;