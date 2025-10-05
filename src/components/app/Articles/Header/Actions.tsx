import ViewSelection from '@/components/app/Articles/Header/ViewSelection'
import SortSelection from '@/components/app/Articles/Header/SortSelection'
import MarkAllAsRead from '@/components/app/Articles/Header/MarkAllAsRead'
import RefresList from '@/components/app/Articles/Header/RefreshList'
import FolderCommands from '@/components/app/Articles/Header/FolderCommands'

export default function HeaderActions() {
  return (
    <div className='flex gap-4'>
      <MarkAllAsRead />
      <ViewSelection />
      <SortSelection />
      <RefresList />
      <FolderCommands />
    </div>
  )
}
