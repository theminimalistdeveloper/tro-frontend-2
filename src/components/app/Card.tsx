export default function Card(
  { key, title, source, description, imageUrl }:
    { key: string, title: string, source: string, description: string, imageUrl: string }
) {
  const isBookmarked = false;
  const isRead = false;
  const isSaved = false;
  return (
    <div className="card w-100 bg-base-300" key={key}>
      <figure><img src={imageUrl} /></figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5">{title}</h5>
        <p>{source}</p>
        <p className="mb-4">{description}</p>
        <div className="card-actions border-t border-base-100 pt-2 flex justify-between">
          <div>
            <button className='icon-[tabler--x] size-7' />
          </div>
          <div className='flex gap-4'>
            <button className='icon-[tabler--bookmark] size-7' />
            <button className='icon-[tabler--pinned] size-7' />
            <button className='icon-[tabler--dots-vertical] size-7' />
          </div>
        </div>
      </div>
    </div>
  )
}
