export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary">LUCID</span>
            <span className="text-foreground"> EDITS</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lucid Edits. Crafted with passion.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
