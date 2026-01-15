export default function MethodHeader({ title, subtitle, description }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h2 className="text-4xl font-bold text-blue-500 mt-2">{subtitle}</h2>
      <div className="text-slate-500 text-center mt-4 font-mono max-w-2xl">
        <p>{description}</p>
      </div>
    </div>
  );
}