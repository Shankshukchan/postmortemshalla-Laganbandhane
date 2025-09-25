import React from 'react';
import { useLocation } from 'react-router-dom';

const Editor = () => {
  const location = useLocation();
  const template = location.state?.template;

  if (!template) {
    return <div>No template data found.</div>;
  }

  return (
    <div className="editor-page">
      <h2>Editor for: {template.title}</h2>
      <p>{template.description}</p>
      {/* Add your editor UI here */}
    </div>
  );
};

export default Editor;
