import { useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "მდე",
  afterLabel = "შემდეგ",
  title,
  description,
}) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef(null);

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
        <img src={beforeImage} alt="სადემონსტრაციო ფოტო მკურნალობამდე" draggable="false" />
        <div className="after-image-wrapper">
          <img src={afterImage} alt="სადემონსტრაციო ფოტო მკურნალობის შემდეგ" draggable="false" />
        </div>
        <span className="comparison-label before">{beforeLabel}</span>
        <span className="comparison-label after">{afterLabel}</span>
        <span className="comparison-divider" aria-hidden="true" />
        <button
          className="comparison-handle"
          type="button"
          aria-label="შედარების სლაიდერის გადაადგილება"
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
