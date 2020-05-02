import React from 'react'
import { PageWrapper } from 'common/pageWrapper'
import { Grid, Paper } from '@material-ui/core'
import { useChatStyles } from './styles'
import { ChatList, MessagesList, SubmitInput } from './components'
import { useFirstMountState, useMount } from 'react-use'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from 'modules/types'
import { getChatsAction } from 'modules/chat'

const mapState = ({ chat: { isLoading } }: IRootReducer) => ({
  isLoading
})

const Chat = React.memo(() => {
  const styles = useChatStyles({})

  const { isLoading } = useSelector(mapState, shallowEqual)

  const isFirstRender = useFirstMountState()

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getChatsAction.started())
  })

  return (
    <PageWrapper isLoading={isFirstRender || isLoading}>
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
