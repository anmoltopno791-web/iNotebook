import React, { useEffect } from "react";

const Alert = (props) => {
  const { message, type = "info", onClose } = props;

  useEffect(() => {
    if (!message) return undefined;

    const timeout = setTimeout(onClose, 4500);
    return () => clearTimeout(timeout);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`app-alert app-alert--${type}`} role="alert">
      <span>{message}</span>
      <button type="button" onClick={onClose} aria-label="Dismiss message">
        &times;
      </button>
    </div>
  );
};

export default Alert;
