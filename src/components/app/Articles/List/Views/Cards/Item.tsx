import { Link } from '@tanstack/react-router'
import { ViewItem } from '@/components/app/Articles/types'
import ArticleActions from '@/components/app/Articles/List/ArticleActions'

export default function Item(params: ViewItem) {
  const cardClasses = `
  card w-100 ${params.read ? 'opacity-50 hover:opacity-100' : ''} 
  `;

  return (
    <div className={cardClasses} key={params.key} >
      <figure className=''>
        <img src={params.imageUrl} />
      </figure>
      <div className='card-body bg-base-300 hover:bg-base-200 p-4'>
        <h5 className='card-title'>
          <Link
            to='.'
            className='hover:text-white'
            data-overlay='#scroll-inside-modal'
          >
            {params.title}
          </Link>
        </h5>
        <div className='flex justify-between'>
          <a
            href='https://google.com'
            className='text-sm hover:text-white'
          >{params.source}
          </a>
          <span className='text-sm'>2h ago</span>
        </div>
        <p className='my-2'>{params.description}</p>
        <ArticleActions
          read={params.read}
          bookmark={params.bookmark}
          pinned={params.pinned}
        />
      </div>
    </div >
  )
}
