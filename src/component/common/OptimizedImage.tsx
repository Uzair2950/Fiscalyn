import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string;
  width: number;
  height: number;
  priority?: boolean;
}

const buildUnsplashSrcSet = (
  src: string,
  sourceWidth: number,
  sourceHeight: number,
): string | undefined => {
  if (!src.startsWith("https://images.unsplash.com/")) return undefined;

  return [480, 768, 1200]
    .filter((width, index, widths) => width < sourceWidth || index === widths.length - 1)
    .map((width) => {
      const url = new URL(src);
      url.searchParams.set("w", String(width));
      url.searchParams.set("h", String(Math.round((width * sourceHeight) / sourceWidth)));
      url.searchParams.set("fit", "crop");
      url.searchParams.set("q", "78");
      url.searchParams.set("fm", "webp");
      return `${url.toString()} ${width}w`;
    })
    .join(", ");
};

const OptimizedImage = ({
  src,
  width,
  height,
  priority = false,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) => {
  const srcSet = buildUnsplashSrcSet(src, width, height);
  const fetchPriorityAttributes = priority ? { fetchpriority: "high" } : {};

  return (
    <img
      {...props}
      {...fetchPriorityAttributes}
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};

export default OptimizedImage;
