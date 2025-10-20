// Hosted version.
import { useEffect, useState } from "react";
import { DelftExhibition } from "../DelftExhibition";

import "../styles/index.css";
import "../styles/lib.css";
import { LocaleString } from "react-iiif-vault";

const search = new URLSearchParams(window.location.search);

function ExhibitionPage() {
  const [manifest, setManifest] = useState<any | null>(null);
  const [collection, setCollection] = useState<any | null>(null);

  const manifestId = search.get("manifest");
  // const cutCorners = search.get("cut-corners");
  const fullTitleBar = search.get("full-title-bar");

  const options = {
    // cutCorners: !(cutCorners === "false"),
    fullTitleBar: !(fullTitleBar === "false"),
  };

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}collection.json`)
      .then((r) => r.json())
      .then((col) => {
        setCollection(col);
      });
  }, []);

  useEffect(() => {
    if (manifestId) {
      fetch(manifestId)
        .then((response) => response.json())
        .then(setManifest);
    }
  }, [manifestId]);

  if (!collection) {
    return null;
  }

  if (!manifest) {
    return (
      <div>
        <ul className="my-8 w-full text-center">
          {collection.items.map((item: any) => (
            <li key={item.id} className="pb-4 text-2xl">
              <a href={`?manifest=${item.id}`} className="hover:underline">
                <LocaleString>{item.label}</LocaleString>
              </a>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="min-h-[90vh] w-full max-w-screen-xl px-5 py-10 lg:px-10">
          <DelftExhibition manifest={manifest} options={options} language="en" viewObjectLinks={[]} />
      </div>
    </div>
  );
}
export default ExhibitionPage;
