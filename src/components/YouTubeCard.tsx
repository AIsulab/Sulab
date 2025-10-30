export interface YouTubeVideo {
  id: string;
  title: string;
  channelTitle: string;
  viewCount: number;
  publishedAt: string;
  thumbnailUrl: string;
  url: string;
}

const numberFormatter = new Intl.NumberFormat("ko-KR", {
  notation: "compact",
  compactDisplay: "short",
});

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

interface YouTubeCardProps {
  video: YouTubeVideo;
}

export const YouTubeCard = ({ video }: YouTubeCardProps) => {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-100 shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900">
            {video.title}
          </h3>
          <p className="text-sm font-medium text-slate-500">{video.channelTitle}</p>
        </div>
        <div className="mt-auto flex items-center gap-3 text-xs font-semibold text-slate-500">
          <span>{numberFormatter.format(video.viewCount)} 조회수</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{dateFormatter.format(new Date(video.publishedAt))}</span>
        </div>
      </div>
    </a>
  );
};

export default YouTubeCard;
