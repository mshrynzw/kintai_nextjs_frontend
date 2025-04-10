"use client"

import React from "react"
import {Calendar, Clock, Home, LogOut, MessageSquare, Settings} from "lucide-react"
import Button from "@/components/common/Button"
import {useFeature} from "@/context/FeatureContext"

const Navi = () => {
  const {feature, handleFeature} = useFeature()

  return (
    <div className="flex flex-col h-full p-4 border rounded-md border-slate-200">
      <ul className="space-y-2">
        {feature === "home" ? (
          <li
            className="flex items-center px-4 py-2  bg-teal-50 text-teal-600 rounded-full transition-colors"
          >
            <Home className="w-5 h-5 mr-3"/>
            ホーム
          </li>
        ) : (
          <li
            className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors cursor-pointer"
            onClick={() => handleFeature("home")}
          >
            <Home className="w-5 h-5 mr-3"/>
            ホーム
          </li>
        )}
        <li
          className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors cursor-pointer"
          onClick={() => handleFeature("home")}
        >
          <Clock className="w-5 h-5 mr-3"/>
          記録
        </li>
        <li
          className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors cursor-pointer"
          onClick={() => handleFeature("home")}
        >
          <Calendar className="w-5 h-5 mr-3"/>
          カレンダー
        </li>
        <li
          className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors cursor-pointer"
          onClick={() => handleFeature("home")}
        >
          <MessageSquare className="w-5 h-5 mr-3"/>
          メッセージ
        </li>
        <li
          className="flex items-center px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-colors cursor-pointer"
          onClick={() => handleFeature("home")}
        >
          <Settings className="w-5 h-5 mr-3"/>
          設定
        </li>
        <li
          className="flex items-center px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
          onClick={() => handleFeature("home")}
        >
          <LogOut className="w-5 h-5 mr-3"/>
          ログアウト
        </li>
      </ul>
      <div className="mt-6">
        <Button/>
      </div>
    </div>
  )
}

export default Navi
