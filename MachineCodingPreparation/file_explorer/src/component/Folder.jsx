import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span> 📁{explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, "true")}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e, "false")}>File+</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗄️"}</span>
              <input className="inputContainer__input" />
            </div>
          )}

          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <span className="file" style={{ display: "block" }}>
      🗄️{explorer.name}
    </span>
  );
};

export default Folder;
