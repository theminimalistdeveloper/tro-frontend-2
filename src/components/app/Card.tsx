import { Link } from '@tanstack/react-router'

export default function Card(
  { key, title, source, description, imageUrl }:
    { key: string, title: string, source: string, description: string, imageUrl: string }
) {
  return (
    <div className='card w-100 ' key={key}>
      <figure><img src={imageUrl} /></figure>
      <div className='card-body'>
        <h5 className='card-title'>
          <Link to='/' className='hover:text-white'>
            {title}
          </Link>
        </h5>
        <div className='flex justify-between'>
          <Link to='/' className='text-sm hover:text-white'>{source}</Link>
          <span className='text-sm'>2h ago</span>
        </div>
        <p className='my-2'>{description}</p>
        <div className='card-actions border-t border-base-400 pt-2 flex justify-between'>
          <div>
            <button className='icon-[tabler--x] size-7' />
          </div>
          <div className='flex gap-4'>
            <button className='icon-[tabler--bookmark] size-6' />
            <button className='icon-[tabler--pinned] size-6' />
            <button className='icon-[tabler--dots-vertical] size-6' />
          </div>
        </div>
      </div>
    </div>
  )
}
