import items from './content.ts'
import { Link } from '@tanstack/react-router'
import ArticleActions from './ArticleActions2'

export default function ListView() {
  return (
    <div className='flex flex-wrap w-full max-w-3xl m-auto gap-3'>
      {items.map((item) => (
        <div key={item.key} className="flex py-4 border-b border-base-content/20">
          <div className='w-2/6 pr-4'>
            <figure className='mb-4'><img src={item.imageUrl} alt="Shoes" /></figure>
          </div>

          <div className='w-4/6 px-2'>
            <div className='mb-4'>
              <h2 className='text-xl font-bold pb-2'>
                <Link
                  to='.'
                  className='hover:text-white'
                  data-overlay='#scroll-inside-modal'
                >{item.title}</Link>
              </h2>
              <div className='flex justify-between pb-2'>
                <a href='https://google.com' className='text-sm hover:text-white'>{item.source}</a>
                <span className='text-sm'>2h ago</span>
              </div>
              <p>{item.description}</p>
            </div>
            <ArticleActions />
          </div>
        </div>

      ))}
    </div>
  )
}
