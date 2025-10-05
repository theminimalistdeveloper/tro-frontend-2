export default function SectionTitle(
  { title, subtitle }:
    {
      title: string,
      subtitle?: string
    }
) {
  return (
    <div className="w-full max-w-3xl mx-auto py-4 ">
      <hgroup>
        <h2 className="text-2xl font-bold text-base-content">
          {title}
        </h2>
        {subtitle ?
          <h3 className="text-md text-base-content/70">
            {subtitle}
          </h3> : null
        }
      </hgroup>
    </div>
  )
}
