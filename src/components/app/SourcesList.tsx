const sources = [
  {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org',
    description: 'Comprehensive documentation for web technologies including HTML, CSS, JavaScript, and Web APIs',
  },
  {
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    icon: 'https://www.google.com/s2/favicons?domain=stackoverflow.com',
    description: 'Programming Q&A community where developers ask questions and share solutions',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/',
    icon: 'https://www.google.com/s2/favicons?domain=github.com',
    description: 'Code hosting platform for version control and collaboration on software projects',
  },
  {
    title: 'React Documentation',
    url: 'https://react.dev/',
    icon: 'https://www.google.com/s2/favicons?domain=react.dev',
    description: 'Official React documentation with guides, API reference, and best practices',
  },
  {
    title: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/',
    icon: 'https://www.google.com/s2/favicons?domain=typescriptlang.org',
    description: 'Complete guide to TypeScript language features, syntax, and advanced concepts',
  },
  {
    title: 'CSS-Tricks',
    url: 'https://css-tricks.com/',
    icon: 'https://www.google.com/s2/favicons?domain=css-tricks.com',
    description: 'Web design and development blog with CSS tutorials, tips, and tricks',
  },
  {
    title: 'Dev.to',
    url: 'https://dev.to/',
    icon: 'https://www.google.com/s2/favicons?domain=dev.to',
    description: 'Developer community platform for sharing articles, tutorials, and discussions',
  },
  {
    title: 'Vercel',
    url: 'https://vercel.com/',
    icon: 'https://www.google.com/s2/favicons?domain=vercel.com',
    description: 'Cloud platform for frontend deployment and hosting with seamless Git integration',
  },
  {
    title: 'Netlify',
    url: 'https://www.netlify.com/',
    icon: 'https://www.google.com/s2/favicons?domain=netlify.com',
    description: 'Web development platform offering hosting, serverless functions, and continuous deployment',
  },
  {
    title: 'Can I Use',
    url: 'https://caniuse.com/',
    icon: 'https://www.google.com/s2/favicons?domain=caniuse.com',
    description: 'Browser compatibility tables for HTML5, CSS3, and JavaScript features',
  },
  {
    title: 'CodePen',
    url: 'https://codepen.io/',
    icon: 'https://www.google.com/s2/favicons?domain=codepen.io',
    description: 'Online code editor and social development environment for front-end experimentation',
  },
]

export default function SourcesList() {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <article className='flex w-full gap-2 last:border-b-0 border-b py-4 border-base-content/20'>
          <div className='w-1/6 top-2 right-2'>
            <img
              src={source.icon}
              alt={`${source.title} logo`}
              className='w-20 h-20 border mr-2'
            />
          </div>

          <div className='w-4/6 px-2'>
            <h3 className='text-2xl font-bold'>
              <a href={source.url} className='hover:text-white'>
                {source.title}
              </a>
            </h3>

            <a href={source.url} className='text-sm hover:text-white'>
              {source.url}
            </a>

            <div className='py-4'>
              <p>{source.description}</p>
            </div>
          </div>

          <div className='w-1/6 flex flex-col gap-2 text-center'>
            <button type='button' className='btn btn-sm btn-primary'>
              Add Source
            </button>

            <p className='flex flex-col border-b border-base-content/20 pb-2'>
              <span className='font-bold text-2xl'>1.2k</span>
              <span className='text-sm'>followers</span>
            </p>

            <p className='flex flex-col'>
              <span className='font-bold text-2xl'>5</span>
              <span className='text-sm'>articles per week</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
} 
