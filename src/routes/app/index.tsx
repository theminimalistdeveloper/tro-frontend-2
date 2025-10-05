import { createFileRoute } from '@tanstack/react-router'
import { useArticles } from '@/providers/ArticlesProvider'
import List from '@/components/app/Articles/List/List'
import Header from '@/components/app/Header/Header'
import Actions from '@/components/app/Articles/Header/Actions'
import SectionTitle from '@/components/app/SectionTitle'
import content from '@/_content.ts'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { state } = useArticles()
  return <div>
    <Header actions=<Actions /> />
    <SectionTitle title='Home' />
    <List items={content} view={state.currentView} />
  </div>
}
