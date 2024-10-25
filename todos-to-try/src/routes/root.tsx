import { useState } from "react";

export default function Root() {
  const [query, setQuery] = useState("");

  const links = [
    { name: "GithubCopilot", href: "/GithubCopilot" },
    { name: "Codeium", href: "/Codeium" },
    { name: "Tabnine", href: "/Tabnine" },
    { name: "ChatGPT", href: "/ChatGPT" },
    { name: "Copilot", href: "/Copilot" },
    { name: "Gemini", href: "/Gemini" },
    { name: "Claude", href: "/Claude" },
  ];

  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div id="sidebar" className="flex justify-center">
        <div className="container max-w-screen-md mt-5">
          <h1 className="text-blue-600 font-bold text-5xl">生成AIの比較</h1>
          <div className="mt-3">
            <form
              id="search-form"
              role="search"
              className="flex items-center space-x-2"
            >
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="絞り込み"
                type="search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
                className="ml-2"
              />
              <div className="sr-only" aria-live="polite"></div>
            </form>
          </div>
          <nav>
            <ul>
              {filteredLinks.map((link) => (
                <li key={link.name} className="mt-2">
                  <a
                    href={link.href}
                    className="block px-4 py-2 bg-blue-500 text-white rounded-md text-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
