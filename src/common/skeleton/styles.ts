import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useSkeletonClasses = makeStyles(
  {
    root: {
      background: Color.Skeleton
    }
  },
  { name: 'CustomSkeletonClasses' }
)
