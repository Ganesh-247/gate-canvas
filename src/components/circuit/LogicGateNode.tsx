import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { cn } from '@/lib/utils';

interface LogicGateNodeProps {
  data: {
    gateType: string;
    value?: boolean;
    isActive?: boolean;
  };
  selected?: boolean;
}

const LogicGateNode = memo(({ data, selected }: LogicGateNodeProps) => {
  const { gateType, value, isActive } = data;

  const getGateSymbol = () => {
    switch (gateType) {
      case 'and': return '&';
      case 'or': return '≥1';
      case 'not': return '1';
      case 'nand': return '&';
      case 'nor': return '≥1';
      case 'xor': return '=1';
      default: return '?';
    }
  };

  const getGateInputs = () => {
    return gateType === 'not' ? 1 : 2;
  };

  const isInverting = gateType === 'not' || gateType === 'nand' || gateType === 'nor';

  return (
    <div
      className={cn(
        "relative bg-circuit-gate-default border-2 rounded-lg p-4 min-w-[80px] min-h-[60px] transition-all duration-300",
        "flex items-center justify-center font-mono text-lg font-bold",
        isActive && "bg-circuit-gate-active text-primary-foreground animate-gate-bounce",
        selected && "ring-2 ring-primary ring-offset-2",
        isActive && "signal-glow"
      )}
    >
      {/* Input handles */}
      {Array.from({ length: getGateInputs() }).map((_, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`input-${index}`}
          style={{
            top: getGateInputs() === 1 ? '50%' : `${30 + index * 40}%`,
            left: '-6px',
          }}
          className="w-3 h-3 bg-circuit-wire-inactive border-2 border-primary"
        />
      ))}

      {/* Gate symbol */}
      <div className="relative">
        {getGateSymbol()}
        {isInverting && (
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-circuit-gate-default border border-foreground rounded-full" />
        )}
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ right: '-6px' }}
        className="w-3 h-3 bg-circuit-wire-inactive border-2 border-primary"
      />

      {/* Gate type label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background px-1 rounded">
        {gateType.toUpperCase()}
      </div>
    </div>
  );
});

LogicGateNode.displayName = 'LogicGateNode';

export default LogicGateNode;