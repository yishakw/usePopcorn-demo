import { toBeRequired } from "@testing-library/jest-dom/matchers";
import { useState } from "react";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = { lineHeight: "1", margin: "0" };
  const handleRating = (i) => {
    setRating(i + 1);
  };
  function onHoverIn(i) {
    setTempRating(i + 1);
  }
  function onHoverOut() {
    setTempRating(0);
  }
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "3px" }}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRating={() => handleRating(i)}
            rating={rating}
            i={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating ? tempRating : rating}</p>
    </div>
  );
}
function Star({
  onRating,
  rating,
  i,
  full,
  onHoverIn,
  onHoverOut,
  size,
  color,
}) {
  //   const [tempRati, setHovered] = useState(false);

  const startStyle = {
    width: size,
    height: size,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={startStyle}
      onClick={() => onRating()}
      onMouseEnter={() => onHoverIn(i)}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
export default StarRating;