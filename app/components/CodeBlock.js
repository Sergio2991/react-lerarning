export default function CodeBlock({ code }) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg border-x-4 border-blue-500 overflow-x-auto text-gray-800">
      <code className="whitespace-pre">{code}</code>
    </pre>
  );
}
