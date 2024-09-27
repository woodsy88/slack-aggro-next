import OpenAIComponent from './components/OpenAIComponent'

// https://slack-aggro-worker.andrewwoods88.workers.dev/
export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Transformers.js Demo</h1>
      <div className="grid grid-cols-2 gap-4">
        <OpenAIComponent />
      </div>
    </div>
  )
}