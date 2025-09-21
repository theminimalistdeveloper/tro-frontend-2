import { createFileRoute } from '@tanstack/react-router'
import CardsView from '../../components/app/CardsView'
import ListView from '../../components/app/ListView'
import SmallView from '../../components/app/SmallView'
import ArticleModal from '../../components/app/ArticleModal'
import FolderFormModal from '../../components/app/FolderFormModal'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ListView />
    <ArticleModal />
    <FolderFormModal />
  </div>
}
