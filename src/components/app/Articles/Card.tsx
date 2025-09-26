import { Link } from '@tanstack/react-router'
import ArticleActions from '@/components/app/Articles/Actions'

export default function Card(
  { key, title, source, description, imageUrl, read, bookmark, pinned }:
    {
      key: string,
      title: string,
      source: string,
      description: string,
      imageUrl: string,
      read?: boolean,
      bookmark?: boolean,
      pinned?: boolean,
    }
) {

  const cardClasses = `
  card w-100 ${read ? 'opacity-50 hover:opacity-100' : ''} 
  `;

  return (
    <div className={cardClasses} key={key} >
      <figure className=''>
        <img src={imageUrl} />
      </figure>
      <div className='card-body bg-base-300 hover:bg-base-200 p-4'>
        <h5 className='card-title'>
          <Link
            to='.'
            className='hover:text-white'
            data-overlay='#scroll-inside-modal'
          >
            {title}
          </Link>
        </h5>
        <div className='flex justify-between'>
          <a href='https://google.com' className='text-sm hover:text-white'>{source}</a>
          <span className='text-sm'>2h ago</span>
        </div>
        <p className='my-2'>{description}</p>
        <ArticleActions />
      </div>
    </div >
  )
}
