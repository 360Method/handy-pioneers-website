import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* 301-style redirects: all old paths → home */}
      <Route path="/about" component={Home} />
      <Route path="/services" component={Home} />
      <Route path="/services/:slug" component={Home} />
      <Route path="/gallery" component={Home} />
      <Route path="/customer-reviews" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/service-areas" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
