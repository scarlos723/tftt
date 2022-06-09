import React from 'react'
import { colorVariants } from '@/utils/colorVariants'

function LogoTFTT({ variant = 'primary' }) {
  return (
    <svg width="126" height="57" viewBox="0 0 126 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="125" height="56" stroke="white" />
      <path d="M35.68 20.824H41.98V14.92H22.54V20.824H28.84V43H35.68V20.824ZM44.3313 14.92V43H51.1713V31.624H60.1713V25.72H51.1713V20.824H61.9713V14.92H44.3313ZM76.3558 20.824H82.6558V14.92H63.2158V20.824H69.5158V43H76.3558V20.824Z" fill="white" />
      <path d="M96.887 20.824H103.187V14.92H83.747V20.824H90.047V43H96.887V20.824Z" fill={variant === colorVariants.primary ? '#F10505' : '#0E8C0D'} />
    </svg>
  )
}

export default LogoTFTT

