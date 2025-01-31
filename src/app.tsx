import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'

// UnoCSS and UnaCSS
import 'virtual:uno.css'
import '@una-ui/preset/una.css'

/**
 * App entry for Solid-Start.
 */
export default function App() {
  return (
    <Router
      root={props => <Suspense>{props.children}</Suspense>}
    >
      <FileRoutes />
    </Router>
  )
}
