import React from 'react'
import { Divider, IconButton, Input } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useSubmitInputStyles } from './styles'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { sendMessageAction } from 'modules/chat'
import { IRootReducer } from 'modules/types'

const mapState = ({
  chat: { selectedChatId, isMessageSending }
}: IRootReducer) => ({ selectedChatId, isMessageSending })

export const SubmitInput = React.memo(() => {
  const styles = useSubmitInputStyles({})

  const { selectedChatId, isMessageSending } = useSelector(
    mapState,
    shallowEqual
  )

  const [text, setText] = React.useState('')

  const handleInputChange = React.useCallback(e => {
    setText(e.target.value)
  }, [])

  const dispatch = useDispatch()

  const handleSendClick = React.useCallback(() => {
    dispatch(
      sendMessageAction.started({
        input: { chatId: selectedChatId, text: text.trim() }
      })
    )
    setText('')
  }, [dispatch, selectedChatId, text])

  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <Divider />
        <Input
          value={text}
          onChange={handleInputChange}
          multiline={true}
          fullWidth={true}
          rows={5}
        />
      </div>
      <div>
        <IconButton
          color="primary"
          onClick={handleSendClick}
          disabled={!text.trim() || isMessageSending}
        >
          <Send />
        </IconButton>
      </div>
    </div>
  )
})
