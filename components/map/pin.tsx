import * as React from 'react'

function Pin() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <rect width="40" height="40" rx="20" fill="#1ED760" />
      </g>
      <g opacity="0.2">
        <rect x="8" y="8" width="24" height="24" rx="12" fill="#1ED760" />
      </g>
      <rect x="16" y="16" width="8" height="8" rx="4" fill="#1ED760" />
    </svg>
  )
}

export default React.memo(Pin)
