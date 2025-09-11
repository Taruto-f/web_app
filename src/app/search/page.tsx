export default function SearchPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Search</h1>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
}
