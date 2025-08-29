interface LoadingProps {
  text?: string;
  row?: boolean;
  size?: "small" | "medium" | "large";
}

const Loading = ({ text, row, size }: LoadingProps) => (
  <span
    className={`inline-flex flex-col gap-6 items-center justify-center py-8 ${
      row ? "flex-row" : "flex-col"
    }`}
  >
    <span
      className={`animate-spin rounded-full border-b-2 border-blue-500 ${
        size === "small"
          ? "h-4 w-4"
          : size === "medium"
          ? "h-8 w-8"
          : "h-12 w-12"
      }`}
    ></span>
    {text && (
      <span
        className={`ml-3 ${row ? "ml-0" : ""} ${
          size === "small"
            ? "text-sm"
            : size === "medium"
            ? "text-base"
            : "text-lg"
        }  text-gray-600`}
      >
        {text}
      </span>
    )}
  </span>
);

export default Loading;
