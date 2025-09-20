import Header from "@/components/layout/Header";  

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className = "text-5xl font-bold text-white">
            Welcome to out Application!
          </h1>
          <p className = "mt-4 text-xl text-white">
            we're glad you're here. Explore and enjoy your experience.
          </p>
          <button className = "Mt-6 px-6 py-3 bg-white text-blue-500 rounded-fullfont-semibold hover:bg-gray-200 transition"> Get Started </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
