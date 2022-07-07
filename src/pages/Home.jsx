import Popular from "../components/Popular";
import HighestRated from "../components/HighestRated";
import Trending from "../components/Trending";

export default function Home(params) {
  return (
    <div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <HighestRated />
      <Trending />
    </div>
  );
}
