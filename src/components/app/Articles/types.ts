export type ViewItem = {
  key: string,
  title: string,
  link?: string,
  source: string,
  description: string,
  imageUrl: string,
  read?: boolean,
  bookmark?: boolean,
  pinned?: boolean,
}

export type viewList = 'cards' | 'list' | 'small'
export type sortList = 'asc' | 'desc'

export type ActionsProps = {
  read?: boolean,
  bookmark?: boolean,
  pinned?: boolean
}
