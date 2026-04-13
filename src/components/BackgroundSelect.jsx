import { backgrounds } from '../data/gameData'

export default function BackgroundSelect({ onSelect }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Choose your background
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        This determines your starting resources.
      </p>
      <div className="space-y-3">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            onClick={() => onSelect(bg.id)}
            className="w-full text-left bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:border-gray-400 transition-colors"
          >
            <div className="font-semibold text-gray-900 mb-1">{bg.name}</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              {bg.description}
            </p>
            <div className="text-xs text-gray-400">{bg.stats}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
