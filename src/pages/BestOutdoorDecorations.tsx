import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BestOutdoorDecorations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's Best Outdoor Halloween Decorations 2025</h1>
        <p className="text-lg text-muted-foreground">
          The ultimate guide to the best outdoor Halloween decorations available at Lowe's in 2025.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BestOutdoorDecorations;