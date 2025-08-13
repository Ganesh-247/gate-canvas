import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Node } from "@xyflow/react";

interface TruthTablePanelProps {
  selectedNode: string | null;
  nodes: Node[];
}

const getTruthTable = (gateType: string) => {
  const tables: Record<string, { inputs: string[], outputs: string[][], description: string }> = {
    and: {
      inputs: ['A', 'B'],
      outputs: [
        ['0', '0', '0'],
        ['0', '1', '0'],
        ['1', '0', '0'],
        ['1', '1', '1']
      ],
      description: 'Output is HIGH only when ALL inputs are HIGH'
    },
    or: {
      inputs: ['A', 'B'],
      outputs: [
        ['0', '0', '0'],
        ['0', '1', '1'],
        ['1', '0', '1'],
        ['1', '1', '1']
      ],
      description: 'Output is HIGH when ANY input is HIGH'
    },
    not: {
      inputs: ['A'],
      outputs: [
        ['0', '1'],
        ['1', '0']
      ],
      description: 'Output is the INVERSE of the input'
    },
    nand: {
      inputs: ['A', 'B'],
      outputs: [
        ['0', '0', '1'],
        ['0', '1', '1'],
        ['1', '0', '1'],
        ['1', '1', '0']
      ],
      description: 'Output is LOW only when ALL inputs are HIGH (NOT AND)'
    },
    nor: {
      inputs: ['A', 'B'],
      outputs: [
        ['0', '0', '1'],
        ['0', '1', '0'],
        ['1', '0', '0'],
        ['1', '1', '0']
      ],
      description: 'Output is HIGH only when ALL inputs are LOW (NOT OR)'
    },
    xor: {
      inputs: ['A', 'B'],
      outputs: [
        ['0', '0', '0'],
        ['0', '1', '1'],
        ['1', '0', '1'],
        ['1', '1', '0']
      ],
      description: 'Output is HIGH when inputs are DIFFERENT'
    }
  };
  
  return tables[gateType];
};

const TruthTablePanel = ({ selectedNode, nodes }: TruthTablePanelProps) => {
  const selectedNodeData = nodes.find(n => n.id === selectedNode);
  const gateType = selectedNodeData?.data?.gateType as string;
  
  if (!gateType || !['and', 'or', 'not', 'nand', 'nor', 'xor'].includes(gateType)) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Truth Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground text-sm py-4">
            Select a logic gate to view its truth table
          </div>
        </CardContent>
      </Card>
    );
  }

  const truthTable = getTruthTable(gateType);
  
  if (!truthTable) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          Truth Table
          <Badge variant="outline" className="text-xs">
            {(gateType as string).toUpperCase()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">
          {truthTable.description}
        </p>
        
        <div className="overflow-hidden border border-border rounded-lg">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted">
                {truthTable.inputs.map((input) => (
                  <th key={input} className="p-2 text-center font-medium border-r border-border">
                    {input}
                  </th>
                ))}
                <th className="p-2 text-center font-medium">Output</th>
              </tr>
            </thead>
            <tbody>
              {truthTable.outputs.map((row, index) => (
                <tr key={index} className="border-t border-border">
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex} 
                      className={`p-2 text-center font-mono ${
                        cellIndex < row.length - 1 
                          ? 'border-r border-border' 
                          : 'font-bold'
                      } ${
                        cell === '1' ? 'text-signal-high' : 'text-signal-low'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-medium">Key Concepts:</h4>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-signal-high rounded-full"></span>
              <span>1 = HIGH = True = ON</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-signal-low rounded-full"></span>
              <span>0 = LOW = False = OFF</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TruthTablePanel;