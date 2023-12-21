import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const Editor = dynamic(() => import('../CKEditor/Editor'), { ssr: false });
  const [editorLoaded, setEditorLoaded] = useState(false);
  const resultView = useRef(null);

  const onClick = (str) => {
    if (resultView.current) {
      resultView.current.innerHTML = `<h2>html결과 view입니다</h2>${str}`;
    }
  };
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>
      <Editor
        name="description"
        onClick={onClick}
        editorLoaded={editorLoaded}
      />
      <div ref={resultView} />
    </div>
  );
}
