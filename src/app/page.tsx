import { db } from "~/server/db";

// this is required so that every time there is a change in our database, the content updates on the site.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  // above defining the order of the images to be displayed on the page

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
