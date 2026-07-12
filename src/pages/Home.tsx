import { useState } from "react";
import { appraiseDomain } from "../services/appraisal";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    try {
      const data = await appraiseDomain(domain);
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Domain Appraisal Studio
      </h1>

      <div className="flex gap-4">
        <input
          className="flex-1 rounded-xl p-4 text-black"
          placeholder="Enter domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 px-6 rounded-xl"
        >
          Evaluate
        </button>
      </div>

      {loading && (
        <div className="mt-8">Loading...</div>
      )}

      {result && (
        <div className="mt-8 rounded-2xl bg-slate-900 p-6">
          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
