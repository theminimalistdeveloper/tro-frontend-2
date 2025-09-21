import Card from './Card'
import items from './content.ts'

export default function CardsView() {
  return (
    <div className='flex flex-wrap z-2 w-full p-2 pl-4 gap-3'>
      {items.map((item) => (
        <Card
          key={item.key}
          title={item.title}
          description={item.description}
          source={item.source}
          pinned={item.pinned}
          read={item.read}
          bookmark={item.bookmark}
          imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}
