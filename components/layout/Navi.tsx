import React from "react"
import {Calendar, Clock, Home, LogOut, MessageSquare, Settings} from "lucide-react"
import Button from "@/components/common/Button"

const Navi = () => {
  return (
    <div className="flex flex-col h-full p-4 border rounded-md border-slate-200">
      <ul className="space-y-2">
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors">
            <Home className="w-5 h-5 mr-3"/>
            ホーム
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors">
            <Clock className="w-5 h-5 mr-3"/>
            勤怠記録
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors">
            <Calendar className="w-5 h-5 mr-3"/>
            カレンダー
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors">
            <MessageSquare className="w-5 h-5 mr-3"/>
            メッセージ
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors">
            <Settings className="w-5 h-5 mr-3"/>
            設定
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-full transition-colors">
            <LogOut className="w-5 h-5 mr-3"/>
            ログアウト
          </a>
        </li>
      </ul>
      <div className="mt-6">
        <Button/>
      </div>
    </div>
  )
}

export default Navi;
