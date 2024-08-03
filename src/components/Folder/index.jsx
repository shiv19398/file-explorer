import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (!explorer.isFolder) {
    return <div className="file"> 🗄 {explorer.name}</div>;
  } else {
    return (
      <div style={{marginTop:'5'}} className="folder-container">
        <div onClick={() => setExpand(!expand)} className="folder">
          {/* window + (semi-colon); to get these icons*/}
          <div> 📁{explorer.name}</div>
        </div>

        {/* displaying the children */}
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.name}/>
          ))}
        </div>
      </div>
    );
  }
};

export default Folder;
