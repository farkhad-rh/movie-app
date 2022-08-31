import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { MovieService } from '@/services/movie/movie.service'

import MovieList from '../MovieList'

const PopularMovieList: FC = () => {
  const { data: popularMovies, isLoading } = useQuery(
    'Most popular movie in sidebar',
    () => MovieService.getMostPopularMovies(),
    {
      select: (data) => data.slice(0, 3),
    }
  )

  if (isLoading) return (
    <div className='mt-11'>
      <SkeletonLoader count={3} className='h-28 mb-4' />
    </div>
  )

  return (
    <MovieList
      list={{
        link: '/trending',
        movies: popularMovies || [],
        title: 'Popular movies',
      }}
    />
  )
}

export default PopularMovieList
