// ErrorDisplay.tsx
import React from "react"
import { useNavigate } from "react-router-dom"

interface ErrorDisplayProps {
  errorCode: number
  onRetry?: () => void
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorCode, onRetry }) => {
  const navigate = useNavigate()

  let errorMessage, buttons

  if (errorCode === 404) {
    errorMessage = "User Not Found"
    buttons = (
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 text-white bg-slate-800 rounded-md mr-2"
      >
        Go Back
      </button>
    )
  } else if (errorCode === 500) {
    errorMessage = "Server Error"
    buttons = (
      <>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-white bg-slate-800 rounded-md mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onRetry}
          className="px-4 py-2 text-white bg-orange-600 rounded-md"
        >
          Retry
        </button>
      </>
    )
  } else {
    errorMessage = "Error"
    buttons = (
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 text-white bg-slate-800 rounded-md"
      >
        Go Back
      </button>
    )
  }

  return (
    <div className="pt-16 bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 rounded-lg bg-red-200 text-red-700">
        <h2 className="text-2xl mb-4">{errorMessage}</h2>
        {buttons}
      </div>
    </div>
  )
}

export default ErrorDisplay
