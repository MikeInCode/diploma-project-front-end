import { format, isSameDay, isSameISOWeek, isSameYear } from 'date-fns'
import { enUS, ru, uk } from 'date-fns/locale'
import { LANGUAGES } from 'appConstants'

const dateFnsLocales = {
  [LANGUAGES.UK]: uk,
  [LANGUAGES.RU]: ru,
  [LANGUAGES.EN]: enUS
}

export const getChatMessageDate = (messageDate: Date, locale: string) => {
  const currentDate = new Date()
  return format(
    messageDate,
    isSameDay(currentDate, messageDate)
      ? 'HH:mm'
      : isSameISOWeek(currentDate, messageDate)
      ? 'EEE'
      : 'dd.MM.yy',
    {
      locale: dateFnsLocales[locale]
    }
  )
}

export const getMessageSendTime = (messageDate: Date) =>
  format(messageDate, 'HH:mm')

export const getMessageDate = (messageDate: Date, locale: string) => {
  const currentDate = new Date()
  return format(
    messageDate,
    isSameYear(messageDate, currentDate) ? 'd MMMM' : 'd MMMM, yyyy',
    {
      locale: dateFnsLocales[locale]
    }
  )
}
