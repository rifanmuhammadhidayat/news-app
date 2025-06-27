import type { SmallArticle } from "../features/articles/types/types";

export const createMasonryColumns = (articles: SmallArticle[], numColumns: number = 3): SmallArticle[][] => {
  const columns: SmallArticle[][] = Array.from({ length: numColumns }, () => []);

  articles.forEach((article, index) => {
    const columnIndex = index % numColumns;
    columns[columnIndex].push(article);
  });

  return columns;
};

export default createMasonryColumns;