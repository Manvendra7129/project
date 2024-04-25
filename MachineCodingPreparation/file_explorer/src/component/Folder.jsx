import React from "react";

const Folder = ({ explorer }) => {
  if (explorer.isFolder) {
    // Add a check for explorer.item
    return (
      <div style={{ marginTop: 5 }}>
        <div>
          <span> 📁{explorer.name}</span>
        </div>
        <div>
          {explorer.items.map((exp) => {
            return <span key={exp.id}>{exp.name}</span>; // Add a unique key
          })}
        </div>
      </div>
    );
  }
  return <span> 🗄️{explorer.name}</span>;
};

export default Folder;
