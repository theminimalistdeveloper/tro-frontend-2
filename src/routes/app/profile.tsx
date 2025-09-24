import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/profile')({
  component: RouteComponent,
})

const stats = [
  {
    label: 'Following',
    value: '158',
  },
  {
    label: 'Followers',
    value: '2.3k',
  },
  {
    label: 'Articles',
    value: '1.5k',
  },
  {
    label: 'Likes',
    value: '4.2k',
  },
  {
    label: 'Comments',
    value: '321',
  },
  {
    label: 'Bookmarks',
    value: '764',
  }
];

function RouteComponent() {
  return <div>
    <div className='w-full max-w-3xl m-auto p-4 flex justify-between align-middle'>
      <div
        id='profile-container'
        className='flex flex-wrap border-b border-base-content/20 pb-4'
      >
        <div
          id='profile-banner'
          className='w-3/6 flex flex-wrap pb-4'
        >
          <div className='flex w-full mb-3 items-center'>
            <div className='avatar'>
              <div className='size-18 rounded-full'>
                <img
                  className='p-1 bg-base-200 rounded-full'
                  src='https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png'
                  alt='avatar' />
              </div>
            </div>
            <h3 className='text-lg font-bold ml-2'>Juan Dela Cruz</h3>
          </div>
          <div className=''>
            <p>My favorite hobbies are hiking, reading, and coding. I love exploring new technologies and building cool projects.</p>
            <button className='btn btn-primary mt-4'>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>

    <div
      id='profile-stats'
      className='m-auto max-w-3xl flex gap-3 p-4 justify-center text-center items-center'
    >
      <div className="stats max-sm:stats-vertical">
        {stats.map((stat) => (
          <div className="stat">
            <div className="stat-title">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
}
