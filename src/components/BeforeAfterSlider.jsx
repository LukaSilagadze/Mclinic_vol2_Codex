import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  title,
  description,
  beforeDimensions = { width: 900, height: 560 },
  afterDimensions = { width: 900, height: 560 },
}) {
  const { t } = useLanguage();
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef(null);
  const resolvedBeforeLabel = beforeLabel || t.beforeAfter.before;
  const resolvedAfterLabel = afterLabel || t.beforeAfter.after;

  const updatePosition = (clientX) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;

    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  };

  useEffect(() => {
    if (!dragging) return undefined;

    const onPointerMove = (event) => updatePosition(event.clientX);
    const onPointerUp = () => setDragging(false);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [dragging]);

  return (
    <article className="before-after-card">
      <div
        className="before-after-frame"
        ref={frameRef}
        style={{ "--position": `${position}%` }}
        onPointerDown={(event) => {
          setDragging(true);
          updatePosition(event.clientX);
        }}
      >
        <img
          src={beforeImage}
          alt={t.beforeAfter.beforeAlt}
          width={beforeDimensions.width}
          height={beforeDimensions.height}
          draggable="false"
          loading="lazy"
          decoding="async"
        />
        <div className="after-image-wrapper">
          <img
            src={afterImage}
            alt={t.beforeAfter.afterAlt}
            width={afterDimensions.width}
            height={afterDimensions.height}
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="comparison-label before">{resolvedBeforeLabel}</span>
        <span className="comparison-label after">{resolvedAfterLabel}</span>
        <span className="comparison-divider" aria-hidden="true" />
        <button
          className="comparison-handle"
          type="button"
          aria-label={t.beforeAfter.handleLabel}
          onPointerDown={(event) => {
            event.stopPropagation();
            setDragging(true);
            updatePosition(event.clientX);
          }}
        />
      </div>
      {(title || description) && (
        <div className="before-after-copy">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
    </article>
  );
}
