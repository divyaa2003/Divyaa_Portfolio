import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-portfolio-purple fill-current" />
            <span>by Divyaa Varshini G</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Divyaa Varshini G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;