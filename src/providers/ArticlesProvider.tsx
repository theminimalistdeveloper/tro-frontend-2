import React, { useState, useContext, createContext } from 'react'

import { viewList, sortList } from '@/components/app/Articles/types'

interface ArticlesState {
  currentView: viewList;
  sortBy: sortList;
}

interface ArticlesContextType {
  state: ArticlesState;
  setState: React.Dispatch<React.SetStateAction<ArticlesState>>;
}

const initState: ArticlesState = { currentView: 'cards', sortBy: 'desc' }

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined)

const ArticlesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ArticlesState>(initState)

  return (
    <ArticlesContext.Provider value={{ state, setState }} >
      {children}
    </ArticlesContext.Provider >
  )
}

const useArticles = () => {
  const context = useContext(ArticlesContext)
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticlesProvider')
  }
  return context
}

export { ArticlesProvider, useArticles }

