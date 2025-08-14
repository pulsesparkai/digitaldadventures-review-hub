import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KrakenReview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's Kraken Halloween Yard Decoration</h1>
        <p className="text-lg text-muted-foreground">
          Detailed review of the impressive Lowe's Kraken Halloween yard decoration.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default KrakenReview;