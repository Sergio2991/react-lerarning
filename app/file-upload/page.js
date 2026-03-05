import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC DRAG & DROP FILE UPLOAD (CLEAN + SIMPLE)
    "use client";
import { useState, useRef } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const dropRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={dropRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="
        border-2 border-dashed border-gray-300 rounded-xl p-10 text-center
        hover:border-blue-500 transition cursor-pointer bg-white
      "
    >
      <p className="text-gray-600">Drag & drop your file here</p>
      <p className="text-gray-400 text-sm mt-1">or click to browse</p>

      <input
        type="file"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="mt-4 text-blue-600 font-medium">{file.name}</p>
      )}
    </div>
  );
}`,
  `DRAG & DROP WITH FILE PREVIEW (IMAGES)
"use client";
import { useState } from "react";

export default function FileUploadPreview() {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const uploaded = e.dataTransfer.files[0];
    setFile(uploaded);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="
        border-2 border-dashed border-gray-300 rounded-xl p-10 text-center
        hover:border-blue-500 transition cursor-pointer bg-white
      "
    >
      {!file && (
        <>
          <p className="text-gray-600">Drag & drop an image</p>
          <p className="text-gray-400 text-sm mt-1">PNG, JPG, SVG…</p>
        </>
      )}

      {file && (
        <div className="flex flex-col items-center">
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-40 h-40 object-cover rounded-lg shadow mt-4"
          />
          <p className="mt-3 text-blue-600 font-medium">{file.name}</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}`,
  `MULTI FILE DRAG & DROP WITH REMOVE BUTTON (PREMIUM UI)
"use client";
import { useState } from "react";

export default function MultiFileUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const uploaded = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...uploaded]);
  };

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <div className="w-full max-w-lg">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="
          border-2 border-dashed border-gray-300 rounded-xl p-10 text-center
          hover:border-blue-500 transition cursor-pointer bg-white
        "
      >
        <p className="text-gray-600">Drag & drop files here</p>
        <p className="text-gray-400 text-sm mt-1">Upload multiple files</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <ul className="mt-6 space-y-3">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
            >
              <span className="text-gray-700">{file.name}</span>
              <button
                onClick={() => removeFile(file.name)}
                className="text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
`,
];

const SearchBar = () => {
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

export default SearchBar;
