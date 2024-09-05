import Image from 'next/image'
import React from 'react'

const KevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='Kevin Kimani' />
    </div>
  )
}

export default KevImg