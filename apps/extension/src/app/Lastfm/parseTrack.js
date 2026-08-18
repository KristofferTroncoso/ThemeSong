const SUFFIX_PATTERNS = [
  /\s*[\(\[]\s*official\s*(music\s*)?video\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*official\s*audio\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*official\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*lyrics?\s*(video)?\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*audio\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*hd\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*4k\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*visualizer\s*[\)\]]\s*$/i,
  /\s*[\(\[]\s*mv\s*[\)\]]\s*$/i,
];

function stripSuffixes(s) {
  let out = s;
  let changed = true;
  while (changed) {
    changed = false;
    for (const re of SUFFIX_PATTERNS) {
      const next = out.replace(re, "");
      if (next !== out) {
        out = next;
        changed = true;
      }
    }
  }
  return out.trim();
}

function splitOnDash(s) {
  const match = s.match(/^(.+?)\s+[-–—]\s+(.+)$/);
  if (!match) return null;
  return { left: match[1].trim(), right: match[2].trim() };
}

export function parseTrack(metadata) {
  if (!metadata) return null;
  const rawTitle = (metadata.title || "").trim();
  const rawArtist = (metadata.artist || "").trim();
  const album = (metadata.album || "").trim() || undefined;

  if (!rawTitle) return null;

  let artist = rawArtist;
  let title = rawTitle;

  const artistLooksBad =
    !artist ||
    artist.toLowerCase() === rawTitle.toLowerCase() ||
    /- topic$/i.test(artist);

  if (artistLooksBad) {
    const split = splitOnDash(rawTitle);
    if (!split) return null;
    artist = split.left;
    title = split.right;
  }

  title = stripSuffixes(title);
  artist = artist.trim();
  title = title.trim();

  if (!artist || !title) return null;

  return { artist, title, album };
}
