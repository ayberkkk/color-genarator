import RandomColor from "./components/RandomColor";
import Header from "./components/Header";
import ScrollUpButton from "./components/Scrollup";
import SaveBar from "./components/SaveBar";

export default function Home() {
  const handleRefreshClick = () => {};
  return (
    <>
      <Header onRefreshClick={handleRefreshClick} />
      <main className="container mx-auto ">
        <SaveBar />
        <RandomColor />
        <ScrollUpButton />
      </main>
    </>
  );
}
