/* This example requires Tailwind CSS v2.0+ */
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'

export default function Button() {
  return (
    <span className="relative z-0 inline-flex shadow-sm  gap-2">
      <button
        type="button"
        className="relative inline-flex items-center px-2.5 py-1.5 rounded-md border border-gray-300 bg-red text-sm font-medium text-white hover:bg-gray-50 "
      >
        <span className="sr-only">Previous</span>
        <MinusIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-2.5 py-1.5 rounded-md border border-gray-300 bg-orange text-sm font-medium text-white hover:bg-gray-50 ">
        <span className="sr-only">Next</span>
        <PlusIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
  )
}
