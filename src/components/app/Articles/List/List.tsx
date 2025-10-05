import React, { useState, useEffect } from 'react'
import { viewList, ViewItem } from '@/components/app/Articles/types'

type ViewConfig = {
  containerClasses: string;
  component: () => Promise<any>;
}

const viewRegistry: Record<viewList, ViewConfig> = {
  cards: {
    containerClasses: 'flex flex-wrap w-full gap-3',
    component: () => import('@/components/app/Articles/List/Views/Cards/Item'),
  },
  list: {
    containerClasses: 'flex flex-col w-full max-w-3xl m-auto gap-3',
    component: () => import('@/components/app/Articles/List/Views/List/Item'),
  },
  small: {
    containerClasses: 'flex flex-wrap w-full max-w-3xl m-auto gap-3',
    component: () => import('@/components/app/Articles/List/Views/Small/Item'),
  },
}

async function loadViewComponent(viewName: viewList) {
  const module = await viewRegistry[viewName].component();
  return module.default || module;
}

interface ListProps {
  view: viewList;
  items: ViewItem[];
}

export default function List({ view, items }: ListProps) {
  const [ItemComponent, setItemComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComponent() {
      try {
        setLoading(true);
        const component = await loadViewComponent(view);
        setItemComponent(() => component);
      } catch (error) {
        console.error(`Failed to load view component: ${view}`, error);
      } finally {
        setLoading(false);
      }
    }

    loadComponent();
  }, [view]);

  if (loading || !ItemComponent) {
    return (
      <div className={viewRegistry[view].containerClasses}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={viewRegistry[view].containerClasses}>
      {items.map((item) => (
        <ItemComponent
          key={item.key}
          title={item.title}
          description={item.description}
          source={item.source}
          pinned={item.pinned}
          read={item.read}
          bookmark={item.bookmark}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
