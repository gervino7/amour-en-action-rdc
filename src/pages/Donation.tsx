import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationForm from "@/components/DonationForm";

const Donation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Soutenez notre mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque don compte et nous aide à améliorer la vie de ceux qui en ont le plus besoin. 
              Ensemble, nous pouvons faire la différence.
            </p>
          </div>
          <DonationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;