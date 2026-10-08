import media from '../data/media.json';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function mediaSrc(id) {
  const p = media[id];
  return p ? base + p : null;
}

// Renders a downloaded image, or the fallback when the asset couldn't be fetched.
export default function Media({ id, alt, className, fallback = null, loading = 'lazy' }) {
  const src = mediaSrc(id);
  if (!src) return fallback;
  return <img src={src} alt={alt} className={className} loading={loading} decoding="async" />;
}
