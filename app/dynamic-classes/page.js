import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function ShowMultipleExamples() {
  const examples = [
    `<button
  className={\`px-4 py-2 rounded $\{isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}\`}
  onClick={() => setIsDark(!isDark)}
>
  Toggle Theme
</button>`,
    `<div className="flex space-x-4">
  {['Home', 'About', 'Contact'].map(tab => (
    <button
      key={tab}
      className={\`px-3 py-1 rounded $\{activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>`,
    `<input
  type="text"
  value={email}
  onChange={e => setEmail(e.target.value)}
  className={\`border px-2 py-1 rounded $\{
    email.includes('@') ? 'border-green-500' : 'border-red-500'
  }\`}
/>`,
    `<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className={\`p-4 rounded transition-all duration-300 $\{
    hovered ? 'bg-yellow-200' : 'bg-white'
  }\`}
>
  Hover me!
</div>`,
    `const Card = ({ featured }) => (
  <div className={\`p-4 border rounded $\{featured ? 'border-blue-500 shadow-lg' : 'border-gray-300'}\`}>
    {featured ? '🌟 Featured' : 'Regular'} Card
  </div>
)`,
    `(npm install clsx : install it for a leaner logic)

import clsx from 'clsx'

<button
  className={clsx('px-4 py-2 rounded', {
    'bg-green-500 text-white': success,
    'bg-red-500 text-white': error,
    'bg-gray-300': !success && !error,
  })}
>
  Submit
</button>
`,
    `<div className={\`p-4 $\{isMobile ? 'text-sm' : 'text-lg'}\`}>
  {isMobile ? 'Mobile View' : 'Desktop View'}
</div>`,
    `{items.map((item, index) => (
  <div
    key={item.id}
    className={\`p-2 $\{index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}\`}
  >
    {item.name}
  </div>
))}`,
    `<button
  disabled={loading}
  className={\`px-4 py-2 rounded $\{
    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
  }\`}
>
  {loading ? 'Loading...' : 'Submit'}
</button>`,
    `const [selectedTags, setSelectedTags] = useState(['react'])

{['react', 'nextjs', 'tailwind'].map(tag => (
  <span
    key={tag}
    onClick={() =>
      setSelectedTags(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
      )
    }
    className={\`px-2 py-1 border rounded cursor-pointer $\{
      selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-white'
    }\`}
  >
    {tag}
  </span>
))}`,
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
}
