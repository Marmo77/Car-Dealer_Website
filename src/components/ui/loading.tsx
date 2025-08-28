import React from "react";

const Loading = ({ text }: { text?: string }) => (
  <div className="flex flex-col gap-6 items-center justify-center py-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    {text && <span className="ml-3 text-gray-600">{text}</span>}
  </div>
);

export default Loading;
