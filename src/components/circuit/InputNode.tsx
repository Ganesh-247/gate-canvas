import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InputNodeProps {
  data: {
    value: boolean;
    label?: string;
    isActive?: boolean;
  };
  id: string;
  selected?: boolean;
}

const InputNode = memo(({ data, id, selected }: InputNodeProps) => {
  const { value, label = 'INPUT', isActive } = data;

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
        
        <Button
          variant={value ? "default" : "outline"}
          size="sm"
          className={cn(
            "w-12 h-12 rounded-full text-lg font-bold transition-all duration-300",
            value && "bg-signal-high hover:bg-signal-high/80 text-black animate-signal-glow",
            !value && "bg-signal-low hover:bg-signal-low/80 text-white"
          )}
          onClick={() => {
            // This will be handled by the parent component
            const event = new CustomEvent('input-toggle', {
              detail: { nodeId: id, value: !value }
            });
            window.dispatchEvent(event);
          }}
        >
          {value ? '1' : '0'}
        </Button>

        <div className="text-xs text-center">
          <div className="text-muted-foreground">Click to toggle</div>
          <div className={cn(
            "font-mono font-bold",
            value ? "text-signal-high" : "text-signal-low"
          )}>
            {value ? 'HIGH' : 'LOW'}
          </div>
        </div>
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ right: '-6px' }}
        className={cn(
          "w-3 h-3 border-2 border-primary transition-all duration-300",
          value ? "bg-signal-high" : "bg-signal-low"
        )}
      />
    </div>
  );
});

InputNode.displayName = 'InputNode';

export default InputNode;