import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import cn from 'classnames'

import { MaterialIcon } from '@/ui/icons/MaterialIcon'

import { IMenuItem } from './menu.types'

import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter()

  return (
    <li
      className={cn({
        [styles.active]: asPath === item.link,
      })}
    >
      <Link href={item.link}>
        <a>
          <MaterialIcon name={item.icon} />
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
