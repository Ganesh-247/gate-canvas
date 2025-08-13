import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Trash2, RotateCcw } from "lucide-react";
import { Node } from "@xyflow/react";
import { useEffect } from "react";

interface ControlPanelProps {
  isSimulating: boolean;
  onToggleSimulation: () => void;
  onClear: () => void;
  selectedNode: string | null;
  nodes: Node[];
  onUpdateInput: (nodeId: string, value: boolean) => void;
}

const ControlPanel = ({
  isSimulating,
  onToggleSimulation,
  onClear,
  selectedNode,
  nodes,
  onUpdateInput
}: ControlPanelProps) => {
  const selectedNodeData = nodes.find(n => n.id === selectedNode);
  const inputNodes = nodes.filter(n => n.type === 'input');

  // Listen for input toggle events
  useEffect(() => {
    const handleInputToggle = (event: any) => {
      const { nodeId, value } = event.detail;
      onUpdateInput(nodeId, value);
    };

    window.addEventListener('input-toggle', handleInputToggle);
    return () => window.removeEventListener('input-toggle', handleInputToggle);
  }, [onUpdateInput]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          Simulation Controls
          {isSimulating && (
            <Badge variant="default" className="animate-pulse">
              RUNNING
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={onToggleSimulation}
            variant={isSimulating ? "destructive" : "default"}
            size="sm"
            className="flex-1"
          >
            {isSimulating ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Stop
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Simulate
              </>
            )}
          </Button>
          
          <Button
            onClick={onClear}
            variant="outline"
            size="sm"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        {inputNodes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">Input Controls</h4>
            <div className="space-y-2">
              {inputNodes.map((node) => (
                <div key={node.id} className="flex items-center justify-between p-2 border border-border rounded">
                  <span className="text-xs font-mono">{String(node.id)}</span>
                  <Button
                    size="sm"
                    variant={node.data.value ? "default" : "outline"}
                    onClick={() => onUpdateInput(node.id, !node.data.value)}
                  >
                    {node.data.value ? '1' : '0'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedNodeData && (
          <div className="space-y-2 p-3 border border-border rounded-lg bg-muted/30">
            <h4 className="text-xs font-medium text-muted-foreground">Selected Node</h4>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs">ID:</span>
                <Badge variant="outline" className="font-mono text-xs">
                  {selectedNodeData.id}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Type:</span>
                <Badge variant="secondary" className="text-xs">
                  {String(selectedNodeData.data.gateType || selectedNodeData.type)}
                </Badge>
              </div>
              {selectedNodeData.data.value !== undefined && (
                <div className="flex justify-between items-center">
                  <span className="text-xs">Value:</span>
                  <Badge 
                    variant={selectedNodeData.data.value ? "default" : "outline"}
                    className="text-xs"
                  >
                    {selectedNodeData.data.value ? 'HIGH (1)' : 'LOW (0)'}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Click nodes to select and view details</p>
          <p>• Toggle input switches to change values</p>
          <p>• Use simulation to see real-time results</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;