import { useLocation } from "react-router-dom";

export function usePageName() {
    const loc = useLocation();
    const currentPage = loc.pathname.split("/")[1] || "";
    return currentPage;
  }