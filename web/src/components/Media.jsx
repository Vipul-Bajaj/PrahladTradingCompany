import media from '../data/media.json';
import dims from '../data/media-dims.json';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function mediaSrc(id) {
  const p = media[id];
  return p ? base + p : null;
}

// Renders an image stored in the repo, or the fallback when there isn't one.
// Width and height let the browser reserve the space before the image arrives.
export default function Media({ id, alt, className, fallback = null, loading = 'lazy', priority = false }) {
  const src = mediaSrc(id);
  if (!src) return fallback;
  const [width, height] = dims[id] || [];
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
