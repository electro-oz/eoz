import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold">Welcome to EOz</h1>
        <p className="mt-4">Your Smart Home Solution</p>
      </main>
    </div>
  );
}
