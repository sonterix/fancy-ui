import React from 'react'

import { arrayToClasslist, getColorClasses, getTextFamily, getTextWeight } from 'helpers'
import { AvatarProps } from './Avatar.type'
import styles from './Avatar.module.scss'

const Avatar = ({
  width,
  height,
  radius,
  src,
  alt,
  objectFit,
  color,
  textFamily,
  textSize,
  textWeight,
  className,
  style,
  children,
  ...props
}: AvatarProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Avatar,

    ...getColorClasses(color, styles),

    ...getTextFamily(textFamily, styles),

    ...getTextWeight(textWeight, styles),

    className || ''
  ])

  return (
    <div
      className={classes}
      style={{ ...style, ...(width ? { width } : {}), ...(height ? { height } : {}), borderRadius: radius }}
      {...props}
    >
      {src ? (
        <img className={styles.Image} src={src} alt={alt} style={{ objectFit }} />
      ) : (
        <span className={styles.Children}>{children}</span>
      )}
    </div>
  )
}

Avatar.defaultProps = {
  radius: '12px',
  src: '',
  alt: 'avatar',
  objectFit: 'cover',
  textSize: '18px',
  textWeight: 800
}

export default Avatar
