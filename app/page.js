import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Learning React</h1>
      <ul>
        <li>
          <Link href="/array-map-methods" className="text-blue-500 underline">
            Array Map Methods
          </Link>
        </li>
        <li>
          <Link href="/object-map-methods" className="text-blue-500 underline">
            Object Map Methods
          </Link>
        </li>
        <li>
          <Link href="/props" className="text-blue-500 underline">
            Props
          </Link>
        </li>
        <li>
          <Link href="/regex" className="text-blue-500 underline">
            Regex
          </Link>
        </li>
        <li>
          <Link href="/conditional-if" className="text-blue-500 underline">
            Conditional If
          </Link>
        </li>
        <li>
          <Link href="/filter-method" className="text-blue-500 underline">
            Filter Method
          </Link>
        </li>
        <li>
          <Link href="/concat-method" className="text-blue-500 underline">
            Concat Method
          </Link>
        </li>
        <li>
          <Link href="/reduce-method" className="text-blue-500 underline">
            Reduce Method
          </Link>
        </li>
        <li>
          <Link href="/includes-method" className="text-blue-500 underline">
            Includes Method
          </Link>
        </li>
        <li>
          <Link href="/find-method" className="text-blue-500 underline">
            Find Method
          </Link>
        </li>
        <li>
          <Link href="/push-pop-method" className="text-blue-500 underline">
            Push & Pop Methods
          </Link>
        </li>
        <li>
          <Link
            href="/shift-unshift-method"
            className="text-blue-500 underline"
          >
            Shift & Unshift Methods
          </Link>
        </li>
        <li>
          <Link href="/split-splice-method" className="text-blue-500 underline">
            Split & Splice Methods
          </Link>
        </li>
        <li>
          <Link href="/replace-method" className="text-blue-500 underline">
            Replace Method
          </Link>
        </li>
        <li>
          <Link href="/slice-method" className="text-blue-500 underline">
            Slice Method
          </Link>
        </li>
      </ul>
    </div>
  );
}
