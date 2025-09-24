import { Link } from '@tanstack/react-router'

const content = [
  {
    title: 'Technology',
    count: '3.2k',
    isOpen: false,
    feeds: [
      {
        name: 'The Verge',
        icon: 'https://imgs.search.brave.com/dYJWfOp9BcGy-b4MQouiAfT5D6r71pRllPhVTBaIlpA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzY2NThiMjBm/NmRhODhlYjJkYjlk/NGVkY2NhN2Q3ODYx/NmUxN2U5N2U0NTZi/N2U0Y2FjN2QwOTlh/ZDg5MTU1NC93d3cu/dGhldmVyZ2UuY29t/Lw',
        url: '/',
        count: '1.5k',
      },
      {
        name: 'The Verge',
        icon: 'https://imgs.search.brave.com/YyDgHsMErdUmVVuYz1s5Ui9Np6pNQHmQSltCAyhA9Pk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDQ2YjNlNDVl/NTA3ODNiYjA0NTVk/OWJmYjU2NTk3MGM0/ZDMwOTY3ODI4Zjg2/ZmQ4OGQ3OTZhMDcw/NWIyNWFmYi93d3cu/d2lyZWQuY29tLw',
        url: '/',
        count: '700',
      },
      {
        name: 'TechCrunch',
        icon: 'https://imgs.search.brave.com/OujtLAczRHiUDKH3q-naM-q6ltbtdJYDZHyz36Snkg4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI5Njk0Yzlk/YWM3ZWMwZjg1MTM1/NmIyMWEyNzBjZDZj/ZDQyNmFlNGU0NDRi/MDgyYjQwOGU0Y2Qy/ZWMwNWQ2ZC90ZWNo/Y3J1bmNoLmNvbS8',
        url: '/',
        count: '20',
      },
      {
        name: 'Ars Technica',
        icon: 'https://imgs.search.brave.com/pLBultCHv8ZgS8SMpjQu226957dhuNw-YHi1lvaeMMU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGJlOTQ4ZDZm/Zjg3MWQwY2NmYjI0/NzRmM2U0MTAzODQx/ZGU3YTFmMDljOGNj/ZmZkNTdlNDRhMjZm/ZGM4NDk3Ni9hcnN0/ZWNobmljYS5jb20v',
        url: '/',
        count: '1.2k',
      }
    ]
  },
  {
    title: 'Style',
    isOpen: false,
    feeds: [],
  },
  {
    id: 'cancel-arrow',
    title: 'Science',
    isOpen: false,
    feeds: [],
  }
];

export default function SidebarFolders() {
  return (
    <div className='accordion divide-neutral/20 divide-y'>
      <h2 className='text-lg font-bold p-4 flex justify-between align-middle'>
        <Link to='/app' className='hover:text-primary'>
          <span className='icon-[tabler--folders] size-6 mr-2 align-middle'></span>
          Folders
        </Link>
        <span className='badge badge-sm badge-primary'>4.3k</span>
      </h2>
      {content.map((section) => {
        return (
          <div className='accordion-item' id={section.id} key={section.title}>
            <div className='bg-base-content/20 flex justify-between'>
              <button
                className='accordion-toggle inline-flex items-center gap-x-4 text-start'
                aria-controls='payment-arrow-collapse'
                aria-expanded='false'
              >
                <span className='icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180' ></span>
                {section.title}
              </button>
              <Link
                to='/app/search' params={{ addSourceToFolder: section.id }}
                className='p-4 hover:text-white'
              >
                <span className='icon-[tabler--plus] size-5'></span>
                <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role='tooltip'>
                  <span className='tooltip-body tooltip-primary'>Add source to {section.title}</span>
                </span>
              </Link>
            </div>
            <div
              id='payment-arrow-collapse'
              className='accordion-content w-full overflow-hidden transition-[height] duration-300'
              aria-labelledby='payment-arrow'
              role='region'
            >
              <ul>
                {section.feeds.map((feed) => (
                  <li className='bg-base-content/10 flex p-2 border-b border-base-content/20'>
                    <Link className='flex flex-grow' to={feed.url}>
                      <img className='size-8 mr-3 mt-1 rounded-md' src={feed.icon} />
                      <span className='pt-2'>{feed.name}</span>
                    </Link>
                    <span className='badge badge-sm badge-primary mt-3'>{feed.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
