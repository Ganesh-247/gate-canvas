import { useState, useCallback, useRef, useEffect } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import GatePalette from './circuit/GatePalette';
import ControlPanel from './circuit/ControlPanel';
import TruthTablePanel from './circuit/TruthTablePanel';
import ExamplesPanel from './circuit/ExamplesPanel';
import LogicGateNode from './circuit/LogicGateNode';
import InputNode from './circuit/InputNode';
import OutputNode from './circuit/OutputNode';
import { useCircuitSimulation } from '@/hooks/useCircuitSimulation';
import { exampleCircuits } from '@/data/exampleCircuits';

const nodeTypes = {
  logicGate: LogicGateNode,
  input: InputNode,
  output: OutputNode,
};

const CircuitDesigner = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  
  const { simulateCircuit, nodeValues } = useCircuitSimulation(nodes, edges);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (!reactFlowInstance) return;

      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: type === 'input' ? 'input' : type === 'output' ? 'output' : 'logicGate',
        position,
        data: {
          gateType: type,
          value: false,
          label: type.toUpperCase(),
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(selectedNode === node.id ? null : node.id);
  }, [selectedNode]);

  const clearCircuit = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
    setIsSimulating(false);
  }, [setNodes, setEdges]);

  const loadExample = useCallback((exampleId: string) => {
    const example = exampleCircuits.find(e => e.id === exampleId);
    if (example) {
      setNodes(example.nodes);
      setEdges(example.edges);
      setSelectedNode(null);
      setIsSimulating(false);
    }
  }, [setNodes, setEdges]);

  const toggleSimulation = useCallback(() => {
    if (!isSimulating) {
      simulateCircuit();
    }
    setIsSimulating(!isSimulating);
  }, [isSimulating, simulateCircuit]);

  const updateInputValue = useCallback((nodeId: string, value: boolean) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, value } }
          : node
      )
    );
    if (isSimulating) {
      simulateCircuit();
    }
  }, [setNodes, isSimulating, simulateCircuit]);

  // Update node visual states based on simulation
  useEffect(() => {
    if (isSimulating && nodeValues) {
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          data: {
            ...node.data,
            value: nodeValues[node.id] || false,
            isActive: nodeValues[node.id] || false,
          },
        }))
      );

      setEdges((eds) =>
        eds.map((edge) => ({
          ...edge,
          className: nodeValues[edge.source] ? 'signal-active' : '',
        }))
      );
    }
  }, [nodeValues, isSimulating, setNodes, setEdges]);

  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
      {/* Gate Palette */}
      <div className="col-span-2">
        <GatePalette />
      </div>

      {/* Main Circuit Canvas */}
      <div className="col-span-7">
        <div className="h-full border border-border rounded-lg overflow-hidden bg-circuit-canvas">
          <ReactFlowProvider>
            <div className="h-full" ref={reactFlowWrapper}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                className="circuit-grid"
              >
                <Background />
                <Controls />
                <MiniMap 
                  nodeStrokeColor="#a1a1aa"
                  nodeColor="#3f3f46"
                  nodeBorderRadius={8}
                />
              </ReactFlow>
            </div>
          </ReactFlowProvider>
        </div>
      </div>

      {/* Right Panel */}
      <div className="col-span-3 space-y-4">
        <ControlPanel
          isSimulating={isSimulating}
          onToggleSimulation={toggleSimulation}
          onClear={clearCircuit}
          selectedNode={selectedNode}
          nodes={nodes}
          onUpdateInput={updateInputValue}
        />
        
        <TruthTablePanel
          selectedNode={selectedNode}
          nodes={nodes}
        />
        
        <ExamplesPanel onLoadExample={loadExample} />
      </div>
    </div>
  );
};

export default CircuitDesigner;