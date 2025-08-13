import { useState } from "react";
import CircuitDesigner from "@/components/CircuitDesigner";
import EducationalGuide from "@/components/EducationalGuide";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BookOpen, Cpu } from "lucide-react";

const Index = () => {
  const [activeView, setActiveView] = useState<'designer' | 'guide'>('designer');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeView === 'designer' ? 'default' : 'outline'}
            onClick={() => setActiveView('designer')}
            className="flex items-center gap-2"
          >
            <Cpu className="h-4 w-4" />
            Circuit Designer
          </Button>
          <Button
            variant={activeView === 'guide' ? 'default' : 'outline'}
            onClick={() => setActiveView('guide')}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Learning Guide
          </Button>
        </div>

        {activeView === 'designer' ? <CircuitDesigner /> : <EducationalGuide />}
      </div>
    </div>
  );
};

export default Index;