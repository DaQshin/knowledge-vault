export function ContentInput() {
  return (
    <div className="pt-8 flex flex-col h-full gap-8 justify-center items-center">
      <input
        className="w-full text-6xl px-4 py-2 border appearance-none border-none outline-none placeholder-gray-200"
        placeholder="New Page"
      />

      <textarea className="flex-1 w-full resize-none overflow-auto outline-none" />
    </div>
  );
}
