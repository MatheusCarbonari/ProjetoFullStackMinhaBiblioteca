import React from 'react'
import ContentLoader from 'react-content-loader'

const ProfileCard = props => {
  return (
    <ContentLoader
      speed={1}
      width={300}
      height={300}
      viewBox="0 0 450 400"
      backgroundColor={props.cor}
      foregroundColor={props.cor}
      {...props}
    >
      <rect x="122" y="53" rx="0" ry="0" width="2" height="300" />
      <rect x="336" y="55" rx="0" ry="0" width="2" height="300" />
      <rect x="121" y="53" rx="0" ry="0" width="216" height="2" />
      <rect x="121" y="353" rx="0" ry="0" width="216" height="2" />
      <circle cx="227" cy="147" r="44" />
      <rect x="124" y="53" rx="0" ry="0" width="216" height="41" />
      <rect x="148" y="207" rx="0" ry="0" width="160" height="9" />
      <rect x="181" y="236" rx="0" ry="0" width="92" height="9" />
      <rect x="156" y="324" rx="0" ry="0" width="146" height="51" />
    </ContentLoader>
  )
}
export default ProfileCard;