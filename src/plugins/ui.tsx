import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'
import {
  uiComponents,
  uiRegistry,
  type UiComponentName,
  type UiComponentsMap,
} from '@/components/ui'

const UiContext = createContext<UiComponentsMap | null>(null)

type UiProviderProps = {
  children: ReactNode
}

export function UiProvider({ children }: UiProviderProps) {
  return (
    <UiContext.Provider value={uiRegistry}>{children}</UiContext.Provider>
  )
}

export function useUi(): UiComponentsMap {
  const context = useContext(UiContext)

  if (!context) {
    throw new Error('useUi must be used within UiProvider')
  }

  return context
}

export function getUiComponent<T extends UiComponentName>(
  name: T,
): UiComponentsMap[T] {
  return uiRegistry[name]
}

type UiPlugin = {
  components: typeof uiComponents
  install: (children: ReactNode) => ReactNode
}

const uiPlugin: UiPlugin = {
  components: uiComponents,
  install(children) {
    return <UiProvider>{children}</UiProvider>
  },
}

export default uiPlugin
