// @refresh reload

import { attachDevtoolsOverlay } from '@solid-devtools/overlay'
import { mount, StartClient } from '@solidjs/start/client'
import 'solid-devtools'

attachDevtoolsOverlay()

/**
 * Client entry for Solid-Start.
 */
mount(() => <StartClient />, document.getElementById('app')!)
