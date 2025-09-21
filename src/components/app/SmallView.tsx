import items from './content.ts'
import ArticleActions from './ArticleActions2'
import { Link } from '@tanstack/react-router'

export default function SmallView() {
  return (
    <div className='flex flex-wrap w-full max-w-3xl m-auto'>
      {items.map((item) => (
        <div
          key={item.key}
          className="flex justify-between flex-wrap w-full py-2 border-b border-base-content/10"
        >
          <h2 className='text-md w-4/5'>
            <Link
              to='.'
              className='hover:text-white'
              data-overlay='#scroll-inside-modal'
            >{item.title}</Link>
          </h2>
          <div className='w-35'>
            <ArticleActions />
          </div>
        </div>
      ))}
    </div>
  )
}
