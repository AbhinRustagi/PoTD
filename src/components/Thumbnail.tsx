import Image from "next/image";

export interface ThumbnailProps {
  src: string;
  alt: string;
  caption: string;
}

export default function Thumbnail(props: ThumbnailProps) {
  return (
    <div className="overflow-hidden rounded-lg aspect-square cursor-pointer hover:border-solid hover:border hover:border-orange-200 transition-all bg-slate-700">
      <Image className="object-cover" src={props.src} alt={props.alt} />
    </div>
  );
}
