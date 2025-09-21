import ArticleActions from './ArticleActions2'

export default function Article() {
  const imageUrl = 'https://picsum.photos/id/1/400/250';
  const title = 'Breaking News: Local Cat Becomes Mayor, Promises More Naps and Fish Treats for All';
  const subtitle = 'In an unprecedented turn of events, Mr. Whiskers, a charismatic feline, has been elected as the mayor of Purrville.';

  return (
    <div className='modal-box shadow-lg shadow-black/80'>
      <div className='modal-header flex flex-col'>
        <div className='flex justify-between w-full mb-4'>

          <button
            type='button'
            className='btn btn-text btn-circle btn-sm'
            aria-label='Close'
            data-overlay='#scroll-inside-modal'
          >
            <span className='icon-[tabler--x] size-6'></span>
          </button>
          <ArticleActions bookmark={true} pinned={false} />
        </div>

        <figure className='w-full'>
          <img src={imageUrl} className='w-full' />
        </figure>
        <div className='flex justify-between w-full my-2'>
          <a href='https//google.com' className='text-sm hover:text-white'>The Daily Meow</a>
          <span className='text-sm'>2h ago</span>
        </div>
        <hgroup>
          <h3 className='modal-title mb-4'>{title}</h3>
          <h4 className='text-lg'>{subtitle}</h4>
        </hgroup>
      </div>
      <div className='modal-body prose prose-xl prose-p:my-4'>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorAenean lacinia
          bibendum nulla sed consectetur.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctorAenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit
        </p>
      </div>
      <div className='modal-footer'>
      </div>
    </div>

  )
}
