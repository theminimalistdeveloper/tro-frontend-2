import Card from './Card'

const items = [
  {
    title: "Scientists Discover Mountains Can Actually Fly During Full Moons",
    description: "A breathtaking view of snow-capped mountains during golden hour, with misty valleys below and dramatic clouds painting the sky in warm hues.",
    imageUrl: "https://picsum.photos/id/1/400/250",
    source: "NatureMysteries.com",
    key: "flying-mountains-discovery",
    bookmark: true,
    read: true,
  },
  {
    title: "Breaking: Ocean Sunsets Now Officially Banned in 12 Countries for Being Too Beautiful",
    description: "Waves gently crashing on a pristine beach as the sun sets on the horizon, creating a spectacular display of orange and pink reflections on the water.",
    imageUrl: "https://picsum.photos/id/20/400/250",
    source: "BeautyTribune.net",
    key: "banned-ocean-sunsets",
    read: true,
  },
  {
    title: "City Skyscrapers Reportedly Grow 3 Inches Taller Every Night When Nobody's Looking",
    description: "Modern skyscrapers illuminated against the night sky, showcasing the vibrant energy and architectural beauty of an urban metropolis.",
    imageUrl: "https://picsum.photos/id/30/400/250",
    source: "UrbanLegends.org",
    key: "growing-skyscrapers-night",
    read: true,
  },
  {
    title: "Forest Paths Now Require GPS Because Trees Keep Rearranging Themselves",
    description: "A winding trail through an ancient forest, with dappled sunlight filtering through the canopy and moss-covered rocks lining the peaceful pathway.",
    imageUrl: "https://picsum.photos/id/40/400/250",
    source: "WildernessWhispers.co",
    key: "rearranging-forest-trees",
    pinned: true,
  },
  {
    title: "Desert Dunes Caught Moving to Different Time Zones Without Permission",
    description: "Rolling sand dunes stretching endlessly under a clear blue sky, creating mesmerizing patterns and shadows in the pristine desert landscape.",
    imageUrl: "https://picsum.photos/id/50/400/250",
    source: "EarthAnomalies.info",
    key: "timezone-traveling-dunes"
  },
  {
    title: "Northern Lights Accused of Copyright Infringement by Local Neon Sign Company",
    description: "Ethereal green and purple auroras dancing across the star-filled arctic sky, reflecting off a frozen lake surrounded by snow-laden pine trees.",
    imageUrl: "https://picsum.photos/id/60/400/250",
    source: "NatureMysteries.com",
    key: "copyright-northern-lights"
  },
  {
    title: "Waterfall Discovered Running Backwards Every Second Tuesday of the Month",
    description: "A powerful waterfall thundering down moss-covered cliffs into a crystal-clear pool, surrounded by lush tropical vegetation and mist.",
    imageUrl: "https://picsum.photos/id/70/400/250",
    source: "BeautyTribune.net",
    key: "backwards-tuesday-waterfall"
  },
  {
    title: "Cherry Blossoms Demand Vacation Time After Working 12 Months Straight",
    description: "Delicate pink cherry blossoms in full bloom creating a romantic canopy over a traditional Japanese garden with a serene koi pond.",
    imageUrl: "https://picsum.photos/id/80/400/250",
    source: "UrbanLegends.org",
    key: "vacation-cherry-blossoms"
  },
  {
    title: "Alpine Lake Refuses to Reflect Anything Ugly, Causing Tourism Crisis",
    description: "A pristine mountain lake with mirror-like reflections of towering peaks, surrounded by wildflower meadows and ancient glacial formations.",
    imageUrl: "https://picsum.photos/id/90/400/250",
    source: "WildernessWhispers.co",
    key: "selective-alpine-lake"
  },
  {
    title: "Lavender Fields Secretly Plotting to Take Over France One Purple Row at a Time",
    description: "Endless rows of purple lavender stretching to the horizon under a bright summer sky, with a rustic farmhouse nestled among the fragrant blooms.",
    imageUrl: "https://picsum.photos/id/100/400/250",
    source: "EarthAnomalies.info",
    key: "plotting-lavender-takeover"
  },
  {
    title: "Canyon Sunrise Causes Mass Confusion as Rocks Start Glowing Like Christmas Lights",
    description: "The first rays of dawn illuminating red sandstone canyon walls, creating dramatic shadows and revealing layers of geological history.",
    imageUrl: "https://picsum.photos/id/110/400/250",
    source: "NatureMysteries.com",
    key: "glowing-canyon-rocks"
  },
  {
    title: "Autumn Forest Leaves File Complaint Against Winter for Forcing Early Retirement",
    description: "A deciduous forest in peak fall colors, with golden, orange, and crimson leaves creating a vibrant carpet along a quiet woodland stream.",
    imageUrl: "https://picsum.photos/id/120/400/250",
    source: "BeautyTribune.net",
    key: "complaining-autumn-leaves"
  },
  {
    title: "Stars Caught Playing Hide and Seek Behind Clouds During Important Astronomy Exam",
    description: "The Milky Way galaxy stretching across a dark night sky above a silhouetted mountain range, with countless stars twinkling in cosmic splendor.",
    imageUrl: "https://picsum.photos/id/130/400/250",
    source: "UrbanLegends.org",
    key: "hiding-exam-stars"
  },
  {
    title: "Tropical Paradise Beach Applies for Trademark on the Color Turquoise",
    description: "A secluded tropical beach with crystal-clear turquoise water, white sand, and palm trees swaying in the gentle ocean breeze.",
    imageUrl: "https://picsum.photos/id/140/400/250",
    source: "WildernessWhispers.co",
    key: "trademark-turquoise-beach"
  },
  {
    title: "Misty Mountains Accused of Identity Theft for Looking Too Similar to Each Other",
    description: "Layers of mountain ridges fading into the distance through morning mist, creating a dreamy landscape of blue and gray silhouettes.",
    imageUrl: "https://picsum.photos/id/160/400/250",
    source: "EarthAnomalies.info",
    key: "identity-theft-mountains"
  }
]

export default function Timeline() {
  return (
    <div className=''>
      <h3 className='pt-20 pl-4 pb-4 text-4xl font-bold'>Technology</h3>
      <div className='flex flex-wrap z-2 w-full p-2 pl-4 gap-3'>
        {items.map((item) => (
          <Card
            key={item.key}
            title={item.title}
            description={item.description}
            source={item.source}
            pinned={item.pinned}
            read={item.read}
            bookmark={item.bookmark}
            imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  )
}
