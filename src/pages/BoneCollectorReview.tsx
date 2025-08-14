import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BoneCollectorReview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lowe's 12ft Bone Collector Animatronic Review</h1>
        <p className="text-lg text-muted-foreground">
          In-depth review of Lowe's impressive 12ft Bone Collector Halloween animatronic.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BoneCollectorReview;