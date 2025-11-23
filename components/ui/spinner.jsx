import { Loader2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Spinner(props) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', props.className)}
      {...props}
    />
  )
}

export { Spinner }
