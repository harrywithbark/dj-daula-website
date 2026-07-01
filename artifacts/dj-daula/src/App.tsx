import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Preloader from "@/components/Preloader";
import MobileStickyCta from "@/components/MobileStickyCta";
import PageTransition from "@/components/PageTransition";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import EventsPage from "@/pages/events";
import EventDetailPage from "@/pages/event-detail";
import GalleryPage from "@/pages/gallery";
import MusicPage from "@/pages/music";
import PackagesPage from "@/pages/packages";
import ContactPage from "@/pages/contact";
import FaqPage from "@/pages/faq";
import ServicesPage from "@/pages/services";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/event/:id" component={EventDetailPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/packages" component={PackagesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/services" component={ServicesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Preloader />
          <PageTransition>
            <Router />
          </PageTransition>
          <MobileStickyCta />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
