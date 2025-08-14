import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GiantInflatablesRoundup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's Giant Halloween Inflatables</h1>
        <p className="text-lg text-muted-foreground">
          Complete roundup of Lowe's giant Halloween inflatable decorations for your yard.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default GiantInflatablesRoundup;