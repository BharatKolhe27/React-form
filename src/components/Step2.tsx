import type{ FormData } from "../App";
import { useState } from "react";

type Props = {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  next: () => void;
  back: () => void;
};

export default function Step2({ form, setForm, next, back }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!form.email.includes("@") || !form.city || !form.country) {
      setError("Fill all fields correctly");
      return;
    }
    setError("");
    next();
  };

  return (
    <>
      <h2>Step 2 - Details</h2>

      <div className="grid">
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, phone: e.target.value }))
          }
        />

        <input
          placeholder="City"
          value={form.city}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, city: e.target.value }))
          }
        />

        <input
          placeholder="Country"
          value={form.country}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, country: e.target.value }))
          }
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="btn-group">
        <button className="btn secondary" onClick={back}>Back</button>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </>
  );
}