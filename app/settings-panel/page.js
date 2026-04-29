import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SETTINGS PANEL WITH LABELS & INPUTS
  
  "use client";
import { useState } from "react";

export default function SettingsPanelBasic() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <div className="max-w-md space-y-6 p-6 border rounded-lg">
      <h2 className="text-xl font-semibold">Settings</h2>

      {/* Email Notifications */}
      <div className="flex items-center justify-between">
        <span>Email Notifications</span>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={(e) => setEmailNotifications(e.target.checked)}
        />
      </div>

      {/* Theme */}
      <div className="flex items-center justify-between">
        <span>Theme</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}
  
USAGE

<SettingsPanelBasic />
`,
  `INTERMEDIATE SETTINGS PANEL WITH SECTION TITLES, TOGGLE SWITH UI, BETTER LAYOUT, ACCOUNT SECTION, PREFERENCES SECTION

"use client";
import { useState } from "react";

export default function SettingsPanelIntermediate() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className="max-w-lg space-y-10 p-6 border rounded-xl bg-white">
      <h2 className="text-2xl font-semibold">Settings</h2>

      {/* Account */}
      <section className="space-y-4">
        <h3 className="text-lg font-medium">Account</h3>

        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <button
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={\`w-12 h-6 rounded-full transition $\{
              emailNotifications ? "bg-blue-600" : "bg-gray-300"
            } relative\`}
          >
            <span
              className={\`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition $\{
                emailNotifications ? "translate-x-6" : ""
              }\`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span>Push Notifications</span>
          <button
            onClick={() => setPushNotifications(!pushNotifications)}
            className={\`w-12 h-6 rounded-full transition $\{
              pushNotifications ? "bg-blue-600" : "bg-gray-300"
            } relative\`}
          >
            <span
              className={\`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition $\{
                pushNotifications ? "translate-x-6" : ""
              }\`}
            />
          </button>
        </div>
      </section>

      {/* Preferences */}
      <section className="space-y-4">
        <h3 className="text-lg font-medium">Preferences</h3>

        <div className="flex items-center justify-between">
          <span>Theme</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </section>
    </div>
  );
}
  
USAGE
<SettingsPanelIntermediate />
`,
  `ADVANCED SETTINGS PANEL WITH FRAMER MOTION ANIMATIONS, ICONS, DESCRIPTION TEXT, MULTI-SECTION LAYOUT, DANGER ZONE, SAVE BUTTON, DARK MODE SUPPORT

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BellIcon,
  MoonIcon,
  UserIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function SettingsPanelAdvanced({ onSave }) {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    theme: "light",
  });

  const update = (field, value) =>
    setSettings((prev) => ({ ...prev, [field]: value }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl space-y-10 p-8 border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700"
    >
      <h2 className="text-2xl font-semibold">Settings</h2>

      {/* Notifications */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <h3 className="text-lg font-medium">Notifications</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive updates via email
              </p>
            </div>

            <button
              onClick={() =>
                update("emailNotifications", !settings.emailNotifications)
              }
              className={\`w-12 h-6 rounded-full transition relative $\{
                settings.emailNotifications ? "bg-blue-600" : "bg-gray-300"
              }\`}
            >
              <span
                className={\`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition $\{
                  settings.emailNotifications ? "translate-x-6" : ""
                }\`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Alerts sent to your device
              </p>
            </div>

            <button
              onClick={() =>
                update("pushNotifications", !settings.pushNotifications)
              }
              className={\`w-12 h-6 rounded-full transition relative $\{
                settings.pushNotifications ? "bg-blue-600" : "bg-gray-300"
              }\`}
            >
              <span
                className={\`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition $\{
                  settings.pushNotifications ? "translate-x-6" : ""
                }\`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <MoonIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <h3 className="text-lg font-medium">Appearance</h3>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Theme</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose your preferred theme
            </p>
          </div>

          <select
            value={settings.theme}
            onChange={(e) => update("theme", e.target.value)}
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
          <h3 className="text-lg font-medium text-red-600">Danger Zone</h3>
        </div>

        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </section>

      {/* Save */}
      <button
        onClick={() => onSave?.(settings)}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Save Changes
      </button>
    </motion.div>
  );
}

USAGE
<SettingsPanelAdvanced
  onSave={(settings) => console.log("Saved:", settings)}
/>
`,
  `INDEX.JS
export { default as SettingsPanelBasic } from "./Basic";
export { default as SettingsPanelIntermediate } from "./Intermediate";
export { default as SettingsPanelAdvanced } from "./Advanced";
`,
];

const SettingsPanel = () => {
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

export default SettingsPanel;
