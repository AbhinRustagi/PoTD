import Thumbnail, { ThumbnailProps } from "./Thumbnail";

interface MonthProps {
  month: string;
  year: number;
  thumbnails: ThumbnailProps[];
}

export default function Month(props: MonthProps) {
  return (
    <div className="rounded-xl p-5 bg-slate-800">
      <h2 className="font-bold mb-5 text-lg md:text-2xl">
        {props.month}, {props.year}
      </h2>
      <div className="grid grid-cols-7 grid-rows-5 gap-1 md:gap-3">
        {props.thumbnails.map((thumbnail, index) => (
          <Thumbnail key={index} {...thumbnail} />
        ))}
      </div>
    </div>
  );
}
