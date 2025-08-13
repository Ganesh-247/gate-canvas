import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { exampleCircuits } from "@/data/exampleCircuits";
import { BookOpen } from "lucide-react";

interface ExamplesPanelProps {
  onLoadExample: (exampleId: string) => void;
}

const ExamplesPanel = ({ onLoadExample }: ExamplesPanelProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Example Circuits
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {exampleCircuits.map((example) => (
          <div key={example.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">{example.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {example.description}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {example.difficulty}
              </Badge>
            </div>
            
            <Button
              onClick={() => onLoadExample(example.id)}
              variant="outline"
              size="sm"
              className="w-full text-xs"
            >
              Load Circuit
            </Button>
            
            {example.learningPoints && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Learn:</span> {example.learningPoints}
              </div>
            )}
          </div>
        ))}
        
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            💡 Start with basic gates, then try complex circuits like the Half Adder
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamplesPanel;