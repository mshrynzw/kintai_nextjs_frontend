import {Loader2} from "lucide-react"

interface LoadingProps {
  size?: number
  color?: string
}

const Loading = ({size = 10, color = "text-slate-600"}: LoadingProps) => {
  return (
    <div className="fixed top-[57px] inset-x-0 bottom-0 flex items-center justify-center bg-slate-500/30 backdrop-blur-sm z-40">
      <Loader2 className={`w-16 h-16 ${color} animate-spin`}/>
    </div>
  )
}

export default Loading 