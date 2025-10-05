import { Link } from '@tanstack/react-router'
import { ViewItem } from '@/components/app/Articles/Views/types'
import ArticleActions from '@/components/app/Articles/List/ArticleActions'

export default function params(params: ViewItem) {
  return (
    <div
      key={params.key}
      className="flex justify-between flex-wrap w-full py-2 last:border-b-0 border-b border-base-content/10"
    >
      <h2 className='text-md w-4/5'>
        <Link
          to='.'
          className='hover:text-white'
          data-overlay='#scroll-inside-modal'
        >{params.title}</Link>
      </h2>
      <div className='w-35'>
        <ArticleActions
          read={params.read}
          bookmark={params.bookmark}
          pinned={params.pinned}
        />
      </div>
    </div>
  )
}
