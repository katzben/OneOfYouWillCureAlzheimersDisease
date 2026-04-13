import { useState } from 'react'

export default function Ending({ ending, onPlayAgain }) {
  const [copied, setCopied] = useState(false)

  const shareText = `I played Dr. Katz's Alzheimer's research game and got: ${ending.title}!`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = shareText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const isSting = ending.sting
  const borderColor = isSting ? 'border-gray-300' : ending.id === 'cure' ? 'border-amber-300' : 'border-gray-200'

  return (
    <div className={`bg-white rounded-xl border ${borderColor} p-6 shadow-sm`}>
      <h2
        className={`text-2xl font-bold mb-2 ${
          ending.id === 'cure' ? 'text-amber-700' : isSting ? 'text-gray-500' : 'text-gray-900'
        }`}
      >
        {ending.title}
      </h2>

      <div className="text-gray-700 leading-relaxed mb-6 space-y-4">
        {ending.text.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Share section */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-700 text-sm mb-3 font-medium">{shareText}</p>
        <button
          onClick={handleCopy}
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
            copied
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {copied ? 'Copied!' : 'Copy result'}
        </button>
      </div>

      <button
        onClick={onPlayAgain}
        className="w-full py-3 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Play again
      </button>
    </div>
  )
}
