import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const Props = () => {
  const examples = [
    `PASSING TEXT CONENT AS PROP
// components/Button.js
export default function Button({ label }) {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">{label}</button>;
}

// Usage
<Button label="Click Me" />`,
    `// components/Alert.jsx
export default function Alert({ type, message }) {
  const color = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  return <div className={'$/{color} text-white p-4 rounded'}>{message}</div>; //Just on this line use backtick instead of single quote. In this example ive used single quote as VScode was seeing it as interpolation.
}

// usage
<Alert type="error" message="Something went wrong!" />`,
    `// components/Card.jsx
export default function Card({ children }) {
  return <div className="border p-6 rounded shadow">{children}</div>;
}

// usage
<Card>
  <h2 className="text-xl font-bold">Welcome</h2>
  <p>This is a card component.</p>
</Card>`,
    `// components/ProfileImage.jsx
export default function ProfileImage({ src, alt }) {
  return <img className="w-16 h-16 rounded-full" src={src} alt={alt} />;
}

// usage
<ProfileImage src="/avatar.jpg" alt="User Avatar" />`,
    `LIST RENDERING WITH PROPS
// components/ItemList.jsx
export default function ItemList({ items }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// usage
<ItemList items={['Apples', 'Bananas', 'Cherries']} />`,
    `FORM INPUT WITH PROPS
// components/InputField.jsx
export default function InputField({ label, type, name }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">{label}</label>
      <input type={type} name={name} className="mt-1 block w-full border p-2 rounded" />
    </div>
  );
}

// usage
<InputField label="Email" type="email" name="userEmail" />`,
    `TOGGLE COMPONENT WITH BOOLEAN PROPS
    // components/Toggle.jsx
export default function Toggle({ isOn }) {
  return (
    <div className={'w-12 h-6 rounded-full $\{isOn ? 'bg-green-500' : 'bg-gray-300'}'}> //Use backtick here instead of single quote. In this example ive used single quote as VScode was seeing it as interpolation.
      <div className={'w-6 h-6 bg-white rounded-full transform $\{isOn ? 'translate-x-6' : ''}'}></div> //Use backtick here instead of single quote. In this example ive used single quote as VScode was seeing it as interpolation.
    </div>
  );
}

// usage
<Toggle isOn={true} />`,
    `NAVLINK WITH DYNAMIC ROUTES PROPS
// components/NavLink.jsx
import Link from 'next/link';

export default function NavLink({ href, label }) {
  return (
    <Link href={href}>
      <a className="text-blue-600 hover:underline">{label}</a>
    </Link>
  );
}

// usage
<NavLink href="/about" label="About Us" />`,
    `BADGE WITH CUSTOMIZABLE COLOR
// components/Badge.jsx
export default function Badge({ text, color = 'blue' }) {
  return <span className={\`bg-$\{color}-100 text-$\{color}-800 px-2 py-1 rounded\`}>{text}</span>;
}

// usage
<Badge text="New" color="green" />`,
    `TAILWIND doesn't support dynamic class names like the one used in the Badge component above.
     You would need to predefine the possible color classes or use a library like clsx to conditionally apply classes.`,
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
};

export default Props;
