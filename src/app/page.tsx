import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

// this is required so that every time there is a change in our database, the content updates on the site.
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  // above defining the order of the images to be displayed on the page

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
