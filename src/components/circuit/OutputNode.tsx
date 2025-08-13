import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { cn } from '@/lib/utils';
import { Lightbulb } from 'lucide-react';

interface OutputNodeProps {
  data: {
    value: boolean;
    label?: string;
    isActive?: boolean;
  };
  selected?: boolean;
}

const OutputNode = memo(({ data, selected }: OutputNodeProps) => {
  const { value, label = 'OUTPUT', isActive } = data;

  return (
    <div
      className={cn(
        "relative bg-card border-2 rounded-lg p-3 transition-all duration-300",
        selected && "ring-2 ring-primary ring-offset-2",
        isActive && value && "bg-signal-high/20 border-signal-high",
        !isActive && "border-border"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs font-medium text-muted-foreground">
          {label}
        </div>
        
        <div className={cn(
          "relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          value ? "border-signal-high bg-signal-high/20" : "border-signal-low bg-signal-low/20"
        )}>
          <Lightbulb 
            className={cn(
              "h-6 w-6 transition-all duration-300",
              value ? "text-signal-high animate-signal-glow fill-current" : "text-signal-low"
            )}
          />
          {value && (
            <div className="absolute inset-0 bg-signal-high/30 rounded-full animate-ping" />
          )}
        </div>

        <div className="text-xs text-center">
          <div className={cn(
            "font-mono font-bold text-lg",
            value ? "text-signal-high" : "text-signal-low"
          )}>
            {value ? '1' : '0'}
          </div>
          <div className={cn(
            "font-medium",
            value ? "text-signal-high" : "text-signal-low"
          )}>
            {value ? 'HIGH' : 'LOW'}
          </div>
        </div>
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        id="input"
        style={{ left: '-6px' }}
        className={cn(
          "w-3 h-3 border-2 border-primary transition-all duration-300",
          value ? "bg-signal-high" : "bg-signal-low"
        )}
      />
    </div>
  );
});

OutputNode.displayName = 'OutputNode';

export default OutputNode;