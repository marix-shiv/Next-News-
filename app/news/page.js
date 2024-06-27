
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function news() {
  return (
    <>
      <h1>news</h1>
      <NewsList news = {DUMMY_NEWS}/>
    </>
  );
}
