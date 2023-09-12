import RandomColor from "./components/RandomColor";
import Header from "./components/Header";

export default function Home() {
  const handleRefreshClick = () => {
    alert("Renkler yenilendi!");
  };
  return (
    <>
      <Header onRefreshClick={handleRefreshClick} />
      <main className="container mx-auto ">
        <RandomColor />
      </main>
    </>
  );
}
