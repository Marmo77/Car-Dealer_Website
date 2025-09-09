import React from "react";
import { Button } from "../ui/button";

const Paging = ({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  const getPageList = () => {
    const pages: (number | "ellipsis")[] = [];
    const maxButtons = 5; // center around the current page

    if (totalPages <= maxButtons + 2) {
      // small set, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const start = Math.max(2, page - 2);
    const end = Math.min(totalPages - 1, page + 2);

    // always show first page
    pages.push(1);

    if (start > 2) pages.push("ellipsis");

    for (let i = start; i <= end; i++) pages.push(i);

    if (end < totalPages - 1) pages.push("ellipsis");

    // always show last page
    pages.push(totalPages);

    return pages;
  };

  const pages = getPageList();

  return (
    <div className="w-full flex justify-center my-4">
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border shadow-sm bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-2"
          disabled={!canPrev}
          onClick={() => goTo(1)}
          aria-label="First page"
        >
          «
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-2"
          disabled={!canPrev}
          onClick={() => goTo(page - 1)}
          aria-label="Previous page"
        >
          ‹
        </Button>

        <div className="flex items-center gap-1">
          {pages.map((p, idx) =>
            p === "ellipsis" ? (
              <span
                key={`e-${idx}`}
                className="px-2 text-muted-foreground select-none"
              >
                …
              </span>
            ) : (
              <Button
                key={p}
                variant={p === page ? "default" : "outline"}
                size="sm"
                className={`h-8 px-3 ${
                  p === page ? "pointer-events-none" : ""
                }`}
                onClick={() => goTo(p)}
                aria-current={p === page ? "page" : undefined}
              >
                {p}
              </Button>
            )
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-8 px-2"
          disabled={!canNext}
          onClick={() => goTo(page + 1)}
          aria-label="Next page"
        >
          ›
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-2"
          disabled={!canNext}
          onClick={() => goTo(totalPages)}
          aria-label="Last page"
        >
          »
        </Button>
      </div>
    </div>
  );
};

export default Paging;
