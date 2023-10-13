import Header from "@/common/header";
import HomePage from "@/common/home/home";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between">
        <Header />
      </main>
      <HomePage />
    </div>
  );
}
