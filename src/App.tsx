import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { CertificatesPage } from './components/pages/CertificatesPage';
import { PodcastPage } from './components/pages/PodcastPage';
import { ShopPage } from './components/pages/ShopPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ContactPage } from './components/pages/ContactPage';
import { TrainingServicesPage } from './components/pages/TrainingServicesPage';
import { BehaviourConsultationPage } from './components/pages/BehaviourConsultationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'certificates':
        return <CertificatesPage />;
      case 'podcast':
        return <PodcastPage />;
      case 'shop':
        return <ShopPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'training-services':
        return <TrainingServicesPage onPageChange={setCurrentPage} />;
      case 'behaviour-consultation':
        return <BehaviourConsultationPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background dog-bone-pattern">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}