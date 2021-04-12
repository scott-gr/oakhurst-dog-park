import React from 'react'

function CityIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="32px"
      width="32px"
      style={{ margin: '0 0.5rem', verticalAlign: 'middle' }}
      {...props}
    >
      <path d="M19 15h-2v-2h2m0 6h-2v-2h2M13 7h-2V5h2m0 6h-2V9h2m0 6h-2v-2h2m0 6h-2v-2h2m-6-6H5V9h2m0 6H5v-2h2m0 6H5v-2h2m8-6V5l-3-3-3 3v2H3v14h18V11h-6z" />
    </svg>
  )
}

export default CityIcon
