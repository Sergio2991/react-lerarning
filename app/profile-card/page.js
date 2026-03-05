import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BAISIC
    export default function ProfileCardBasic() {
  return (
    <div className="w-64 bg-white rounded-xl shadow p-5 text-center">
      <img
        src="https://via.placeholder.com/120"
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h3 className="mt-4 text-xl font-semibold text-gray-800">
        Jane Doe
      </h3>

      <p className="text-sm text-gray-500">Frontend Developer</p>

      <p className="mt-3 text-sm text-gray-600">
        Passionate about building beautiful interfaces.
      </p>
    </div>
  );
}`,
  `INTERMIDIATE WITH SOCIAL LINKS STATS & HOVER
export default function ProfileCardMedium() {
  return (
    <div className="w-72 bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
      <img
        src="https://via.placeholder.com/120"
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h3 className="mt-4 text-xl font-semibold text-gray-800">
        Jane Doe
      </h3>

      <p className="text-sm text-gray-500">UI/UX Designer</p>

      <p className="mt-3 text-sm text-gray-600">
        Designing intuitive digital experiences.
      </p>

      <div className="flex justify-center gap-4 mt-4 text-gray-500">
        <a href="#" className="hover:text-blue-600">🐦</a>
        <a href="#" className="hover:text-blue-600">💼</a>
        <a href="#" className="hover:text-blue-600">📸</a>
      </div>

      <div className="flex justify-around mt-5 text-sm">
        <div>
          <p className="font-bold text-gray-800">1.2k</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold text-gray-800">340</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
}`,
  `ADAVNCED WITH BANNER, BUTTONS, TAGS, HOVER ZOOM
export default function ProfileCardMedium() {
  return (
    <div className="w-72 bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
      <img
        src="https://via.placeholder.com/120"
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h3 className="mt-4 text-xl font-semibold text-gray-800">
        Jane Doe
      </h3>

      <p className="text-sm text-gray-500">UI/UX Designer</p>

      <p className="mt-3 text-sm text-gray-600">
        Designing intuitive digital experiences.
      </p>

      <div className="flex justify-center gap-4 mt-4 text-gray-500">
        <a href="#" className="hover:text-blue-600">🐦</a>
        <a href="#" className="hover:text-blue-600">💼</a>
        <a href="#" className="hover:text-blue-600">📸</a>
      </div>

      <div className="flex justify-around mt-5 text-sm">
        <div>
          <p className="font-bold text-gray-800">1.2k</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold text-gray-800">340</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
}`,
];

const ProfileCard = () => {
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

export default ProfileCard;
