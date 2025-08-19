"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>文字数カウンタ</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        style={{ width: "100%", fontSize: "16px", padding: "8px" }}
        placeholder="ここに文字を入力してください"
      />
      <p>文字数: {text.length}</p>
    </main>
  );
}
