import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 text-white">
      <div className="flex-shrink flex-grow items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>
      </div>
    </div>
  );
}
