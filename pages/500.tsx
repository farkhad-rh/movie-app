import Heading from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta'

const Error500 = () => {
  return (
    <Meta title='Page not found'>
      <Heading title='500 - Server-side error occurred' />
    </Meta>
  )
}

export default Error500
