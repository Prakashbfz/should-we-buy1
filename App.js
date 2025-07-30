import React, { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const analyzeProduct = async () => {
    if (!url.includes("amazon")) {
      setResult({ error: "Please enter a valid Amazon product URL." });
      return;
    }
    setResult({
      rating: "4.2/5",
      totalReviews: 9843,
      pros: ["Great display", "Good battery", "Clean UI"],
      cons: ["Camera could be better", "No charger included"],
      verdict: "✅ Recommended for most users looking for a good mid-range phone."
    });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", maxWidth: 600, margin: "auto" }}>
      <h1>Should We Buy 🤖</h1>
      <p>Paste an Amazon product link below:</p>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.amazon.in/..."
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
      <button onClick={analyzeProduct} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Analyze
      </button>
      {result && (
        <div style={{ marginTop: "2rem" }}>
          {result.error ? (
            <p style={{ color: "red" }}>{result.error}</p>
          ) : (
            <>
              <h2>Rating: {result.rating}</h2>
              <p>Total Reviews: {result.totalReviews}</p>
              <h3>👍 Pros:</h3>
              <ul>{result.pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
              <h3>👎 Cons:</h3>
              <ul>{result.cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
              <h2>{result.verdict}</h2>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
