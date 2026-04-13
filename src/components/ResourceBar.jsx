const barColors = {
  focus: { bg: 'bg-blue-100', fill: 'bg-blue-500', text: 'text-blue-700' },
  funding: { bg: 'bg-green-100', fill: 'bg-green-500', text: 'text-green-700' },
  resilience: { bg: 'bg-amber-100', fill: 'bg-amber-500', text: 'text-amber-700' },
}

function Bar({ label, value, colorKey }) {
  const colors = barColors[colorKey]
  return (
    <div>
      <div className="flex justify-between text-xs font-medium mb-1">
        <span className={colors.text}>{label}</span>
        <span className="text-gray-500">{value}/100</span>
      </div>
      <div className={`w-full h-2.5 rounded-full ${colors.bg}`}>
        <div
          className={`h-2.5 rounded-full ${colors.fill} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function ResourceBar({ resources }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm space-y-3 mb-4">
      <Bar label="Focus" value={resources.focus} colorKey="focus" />
      <Bar label="Funding" value={resources.funding} colorKey="funding" />
      <Bar label="Resilience" value={resources.resilience} colorKey="resilience" />
    </div>
  )
}
