import { commands } from '@/bindings'
import { createSignal } from 'solid-js'

/**
 * Index Page for the application.
 */
export default function IndexPage() {
  const [
    text,
    setText,
  ] = createSignal('')
  return (
    <main>
      <div class=":uno: prose">
        <h1>Hello, world!</h1>
        <p>This is a sample page for Solid-Start and Tauri.</p>
      </div>
      <button
        class=":uno: btn btn-default-variant"
        type="button"
        onClick={() => {
          commands.sayHello('Zeithrold')
            .then((result) => {
              setText(result)
            })
            .catch((error) => {
              setText(`Error: ${error}`)
            })
        }}
      >
        Say Hello to Zeithrold
      </button>
      <span>{text()}</span>
    </main>
  )
}
