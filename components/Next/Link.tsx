import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type LinkType = {
  href: string,
  fill?: boolean,
  children?: React.ReactNode,
  disabled?: boolean,
  newTab?: boolean,
  shallow?: boolean
}

const MyLink = ({ children, href, fill, disabled, newTab, shallow }: LinkType) => {

  fill ? fill : false

  return (
    <S_NextLink href={href} fill={fill ? 1 : 0} shallow={shallow}>
      <S_Link href={href} fill={fill ? 1 : 0} disabled={disabled} target={newTab ? '_blank' : '_self'}>
        { children }
      </S_Link>
    </S_NextLink>
  )
}

export default MyLink

const S_Link = styled.a`
  display: flex;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: var(--Font_Color);
  text-decoration: none;
  width: ${props => props.fill ? '100%' : 'auto'};
  width: ${props => props.fill ? '100%' : 'auto'};
  height: ${props => props.fill ? '100%' : 'auto'};
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`

const S_NextLink = styled(Link)`
  display: flex;
  width: ${props => props.fill ? '100%' : 'auto'};
  height: ${props => props.fill ? '100%' : 'auto'};
`