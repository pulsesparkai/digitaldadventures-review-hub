import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HauntedMansionCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's Haunted Mansion Collection</h1>
        <p className="text-lg text-muted-foreground">
          Explore Lowe's spooky Haunted Mansion Halloween decoration collection.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HauntedMansionCollection;