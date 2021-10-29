import "./spinner.css";

export default function Spinner({
  width,
  borderWidth,
}: {
  width: string;
  borderWidth: string;
}) {
  return (
    <div
      className="spinner-loader"
      style={{ width: width, height: width, borderWidth: borderWidth }}
    ></div>
  );
}
