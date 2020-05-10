export interface IChatListItemProps {
  image: string
  lastName: string
  firstName: string
  text: string
  date: string
  unreadCount: number
  selected: boolean
  onClick: (e) => void
}

export interface IMessageProps {
  image: string
  lastName: string
  firstName: string
  text: string
  time: string
  isIncoming: boolean
  isRead: boolean
}
