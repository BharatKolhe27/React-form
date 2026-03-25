import type{ FormData } from "../App";

type Props = {
  form: FormData;
  next: () => void;
  back: () => void;
};

export default function Review({ form, next, back }: Props) {
  return (
    <>
      <h2>Review</h2>

      <p><b>Name:</b> {form.firstName} {form.lastName}</p>
      <p><b>Email:</b> {form.email}</p>
      <p><b>Phone:</b> {form.phone}</p>
      <p><b>City:</b> {form.city}</p>
      <p><b>Country:</b> {form.country}</p>

      <div className="btn-group">
        <button className="btn secondary" onClick={back}>Back</button>
        <button className="btn success" onClick={next}>Submit</button>
      </div>
    </>
  );
}