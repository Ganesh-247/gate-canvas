import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DragEvent } from "react";

const gates = [
  { type: 'and', label: 'AND', symbol: '&', description: 'Output HIGH when all inputs are HIGH' },
  { type: 'or', label: 'OR', symbol: '≥1', description: 'Output HIGH when any input is HIGH' },
  { type: 'not', label: 'NOT', symbol: '1', description: 'Inverts the input signal' },
  { type: 'nand', label: 'NAND', symbol: '&', description: 'Output LOW only when all inputs are HIGH' },
  { type: 'nor', label: 'NOR', symbol: '≥1', description: 'Output LOW when any input is HIGH' },
  { type: 'xor', label: 'XOR', symbol: '=1', description: 'Output HIGH when inputs are different' },
  { type: 'input', label: 'INPUT', symbol: '1', description: 'Signal input source' },
  { type: 'output', label: 'OUTPUT', symbol: 'Q', description: 'Signal output display' },
];

const GatePalette = () => {
  const onDragStart = (event: DragEvent<HTMLDivElement>, gateType: string) => {
    event.dataTransfer.setData('application/reactflow', gateType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Logic Gates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        {gates.map((gate) => (
          <div
            key={gate.type}
            className="group cursor-grab active:cursor-grabbing"
            draggable
            onDragStart={(event) => onDragStart(event, gate.type)}
          >
            <div className="p-3 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{gate.label}</span>
                <Badge variant="outline" className="text-xs font-mono">
                  {gate.symbol}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {gate.description}
              </p>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            💡 Drag gates onto the canvas to start building your circuit
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GatePalette;