import { db } from "~/server/db";

// this is required so that every time there is a change in our database, the content updates on the site.
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/f90a7f8e-10da-4c6d-8cab-ce6c1f92dbea-l6vmp7.jpg",
  "https://utfs.io/f/7a06787a-9925-4a53-a531-1fd7c57f0c9e-t94uo.jpg",
  "https://utfs.io/f/0fa7cd49-2550-41b0-af94-b519c62da5d2-twcbo7.jpg",
  "https://utfs.io/f/a49789b5-64de-4f14-88ec-c5bf07e737b5-s4ehhm.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
