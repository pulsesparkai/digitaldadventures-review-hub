import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LowesHalloweenHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's Halloween Decorations Hub</h1>
        <p className="text-lg text-muted-foreground">
          Your complete guide to Lowe's Halloween decorations and seasonal items.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LowesHalloweenHub;