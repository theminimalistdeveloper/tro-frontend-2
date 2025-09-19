import { Link } from '@tanstack/react-router'

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
            to='/app/article/modal'
            mask={{ to: '/app/article/modal' }}
            className='hover:text-white'
            state={true}
          >
            {title}
          </Link>
        </h5>
        <div className='flex justify-between'>
          <Link to='/' className='text-sm hover:text-white'>{source}</Link>
          <span className='text-sm'>2h ago</span>
        </div>
        <p className='my-2'>{description}</p>

        <div
          className='card-actions flex justify-between'>
          <div className="tooltip mt-1">
            <button type="button" className="tooltip-toggle ">
              {(read) ?
                <span className="icon-[tabler--circle] size-4"></span> :
                <span className="icon-[tabler--circle-filled] text-primary size-4"></span>
              }
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>
                {(read) ? 'Mark as unread' : 'Mark as read'}
              </span>
            </span>
          </div>
          <div className='flex gap-4'>
            <div className="tooltip">
              <button type="button" className="tooltip-toggle ">
                {(bookmark) ?
                  <span className="icon-[tabler--bookmark-filled] size-6"></span> :
                  <span className="icon-[tabler--bookmark] size-6"></span>}
              </button>
              <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
                <span className='tooltip-body tooltip-primary'>Read it later</span>
              </span>
            </div>

            <div className="tooltip">
              <button type="button" className="tooltip-toggle ">
                {(pinned) ?
                  <span className="icon-[tabler--pinned-filled] size-6" ></span> :
                  <span className="icon-[tabler--pinned] size-6" ></span>}
              </button>
              <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
                <span className='tooltip-body tooltip-primary'>Pin to a board</span>
              </span>
            </div>

            <div className="tooltip">
              <button type="button" className="tooltip-toggle ">
                <span className="icon-[tabler--dots-vertical] size-6"></span>
              </button>
              <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
                <span className='tooltip-body tooltip-primary'>More actions</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
