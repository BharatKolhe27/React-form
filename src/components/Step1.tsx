import type{ FormData } from "../App";
import { useState } from "react";

type Props = {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  next: () => void;
};

export default function Step1({ form, setForm, next }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!form.firstName || !form.lastName) {
      setError("All fields required");
      return;
    }
    setError("");
    next();
  };

  return (
    <>
      <h2>Step 1 - Basic Info</h2>
<div className="grid">
  <div className="field">
    <label>First Name</label>
    <input
      className="input"
      name="firstName"
      value={form.firstName}
      onChange={(e) =>
        setForm((prev) => ({ ...prev, firstName: e.target.value }))
      }
    />
  </div>

  <div className="field">
    <label>Last Name</label>
    <input
      className="input"
      name="lastName"
      value={form.lastName}
      onChange={(e) =>
        setForm((prev) => ({ ...prev, lastName: e.target.value }))
      }
    />
  </div>
</div>

      {error && <p className="error">{error}</p>}

      <button className="btn" onClick={handleNext}>Next</button>
    </>
  );
}