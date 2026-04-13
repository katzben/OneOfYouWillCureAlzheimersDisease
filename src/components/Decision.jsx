import { useState } from 'react'

function EffectDisplay({ effects }) {
  const entries = Object.entries(effects).filter(([, v]) => v !== 0)
  const labels = { focus: 'Focus', funding: 'Funding', resilience: 'Resilience' }
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {entries.map(([key, val]) => (
        <span
          key={key}
          className={`text-sm font-medium px-2 py-1 rounded ${
            val > 0
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {labels[key]} {val > 0 ? '+' : ''}{val}
        </span>
      ))}
    </div>
  )
}

export default function Decision({ decision, onChoose }) {
  const [chosen, setChosen] = useState(null)

  const handleChoice = (choice) => {
    setChosen(choice)
    setTimeout(() => {
      onChoose(choice)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{decision.title}</h3>
      <p className="text-gray-700 leading-relaxed mb-5">{decision.prompt}</p>

      {chosen ? (
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-1">
              {chosen.label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {chosen.text}
            </p>
            <EffectDisplay effects={chosen.effects} />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {decision.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => handleChoice(choice)}
              className="w-full text-left bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-300"
            >
              <div className="font-semibold text-gray-900 mb-1">
                {choice.label}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {choice.text}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
