import { useState } from "react";

/**
 * Thumbnail priority:
 *   1. A real screenshot of the live site (via WordPress's free mShots
 *      service — no API key needed), if `url` is provided.
 *   2. GitHub's auto-generated repo social preview, if `owner`/`repo` given.
 *   3. A plain color gradient, as a last resort.
 *
 * Falls through automatically if a given source fails to load.
 */
export default function ProjectThumb({
  url,
  owner,
  repo,
  hue,
  className = "",
  children,
}) {
  const initialStage = url ? "live" : owner && repo ? "github" : "gradient";
  const [stage, setStage] = useState(initialStage);

  const fallback = () => {
    setStage((s) => {
      if (s === "live") return owner && repo ? "github" : "gradient";
      return "gradient";
    });
  };

  const src =
    stage === "live"
      ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`
      : stage === "github"
      ? `https://opengraph.githubassets.com/1/${owner}/${repo}`
      : null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={
        stage === "gradient"
          ? { background: `linear-gradient(160deg, ${hue}55, var(--c-panel-alt))` }
          : { background: "var(--c-panel-alt)" }
      }
    >
      {src && (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={fallback}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      {children}
    </div>
  );
}