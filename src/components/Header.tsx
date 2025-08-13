import { Zap, Github, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Logic Designer
              </h1>
              <p className="text-sm text-muted-foreground">
                Interactive Circuit Simulator & Learning Platform
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  About
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Digital Logic Circuit Designer</DialogTitle>
                  <DialogDescription className="space-y-2">
                    <p>
                      An interactive web application for designing and simulating digital logic circuits.
                      Perfect for students, engineers, and anyone learning about digital electronics.
                    </p>
                    <p className="font-medium">Features:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Drag-and-drop logic gate creation</li>
                      <li>Real-time circuit simulation</li>
                      <li>Animated signal propagation</li>
                      <li>Interactive truth tables</li>
                      <li>Pre-built example circuits</li>
                      <li>Educational guides and explanations</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;