import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
  const { data, isLoading } = usePopularGenres()

  if (isLoading) return (
    <div className='mx-11 mb-6'>
      <SkeletonLoader count={5} className='h-7 mt-6' />
    </div>
  )

  return (
    <Menu
      menu={{
        title: 'Popular genres',
        items: data || [],
      }}
    />
  )
}

export default GenreMenu
