import React from 'react'
import { PageWrapper } from 'common/pageWrapper'
import { Grid, Paper } from '@material-ui/core'
import { useChatStyles } from './styles'
import { ChatList, MessagesList, SubmitInput } from './components'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from 'modules/types'
import { useUnmount } from 'react-use'
import { onClearChatAction } from 'modules/chat'

const mapState = ({ chat: { isLoading } }: IRootReducer) => ({
  isLoading
})

const Chat = React.memo(() => {
  const styles = useChatStyles({})

  const { isLoading } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  useUnmount(() => {
    dispatch(onClearChatAction())
  })

  return (
    <PageWrapper isLoading={isLoading}>
      <Paper className={styles.paper}>
        <Grid container={true} className={styles.root}>
          <Grid item={true} xs={3} container={true} direction="column">
            <ChatList />
          </Grid>
          <Grid item={true} xs={9} container={true} direction="column">
            <MessagesList />
            <SubmitInput />
          </Grid>
        </Grid>
      </Paper>
    </PageWrapper>
  )
})

export default Chat
