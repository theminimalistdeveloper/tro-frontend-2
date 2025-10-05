import { Link } from '@tanstack/react-router'
import { ViewItem } from '@/components/app/Articles/Views/types'
import ArticleActions from '@/components/app/Articles/List/ArticleActions'

export default function params(params: ViewItem) {
  return (
    <div key={params.key} className="flex py-4 border-b border-base-content/20">
      <div className='w-2/6 pr-4'>
        <figure className='mb-4'>
          <img src={params.imageUrl} />
        </figure>
      </div>

      <div className='w-4/6 px-2'>
        <div className='mb-4'>
          <h2 className='text-xl font-bold pb-2'>
            <Link
              to='.'
              className='hover:text-white'
              data-overlay='#scroll-inside-modal'
            >{params.title}</Link>
          </h2>
          <div className='flex justify-between pb-2'>
            <a href={params.link} className='text-sm hover:text-white'>
              {params.source}
            </a>
            <span className='text-sm'>2h ago</span>
          </div>
          <p>{params.description}</p>
        </div>
        <ArticleActions
          read={params.read}
          bookmark={params.bookmark}
          pinned={params.pinned}
        />
      </div>
    </div>
  )
}
