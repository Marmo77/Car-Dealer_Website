export const useHandleScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return handleScrollTop;
};
