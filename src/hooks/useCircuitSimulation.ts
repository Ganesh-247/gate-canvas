import { useState, useCallback } from 'react';
import { Node, Edge } from '@xyflow/react';

export const useCircuitSimulation = (nodes: Node[], edges: Edge[]) => {
  const [nodeValues, setNodeValues] = useState<Record<string, boolean>>({});

  const simulateCircuit = useCallback(() => {
    const values: Record<string, boolean> = {};
    
    // Initialize input node values
    nodes.forEach(node => {
      if (node.type === 'input') {
        values[node.id] = Boolean(node.data.value) || false;
      }
    });

    // Create adjacency list for the circuit
    const connections: Record<string, string[]> = {};
    const inputs: Record<string, string[]> = {};
    
    edges.forEach(edge => {
      if (!connections[edge.source]) connections[edge.source] = [];
      connections[edge.source].push(edge.target);
      
      if (!inputs[edge.target]) inputs[edge.target] = [];
      inputs[edge.target].push(edge.source);
    });

    // Evaluate logic gates (simple topological sort simulation)
    let changed = true;
    let iterations = 0;
    const maxIterations = 100; // Prevent infinite loops

    while (changed && iterations < maxIterations) {
      changed = false;
      iterations++;

      nodes.forEach(node => {
        if (node.type === 'logicGate') {
          const gateInputs = inputs[node.id] || [];
          const gateType = node.data.gateType;
          
          // Only evaluate if all inputs are available
          const inputValues = gateInputs.map(inputId => values[inputId]);
          if (inputValues.some(val => val === undefined)) return;

          let result = false;
          
          switch (gateType) {
            case 'and':
              result = inputValues.every(val => val === true);
              break;
            case 'or':
              result = inputValues.some(val => val === true);
              break;
            case 'not':
              result = !inputValues[0];
              break;
            case 'nand':
              result = !inputValues.every(val => val === true);
              break;
            case 'nor':
              result = !inputValues.some(val => val === true);
              break;
            case 'xor':
              result = inputValues.filter(val => val === true).length === 1;
              break;
            default:
              result = false;
          }

          if (values[node.id] !== result) {
            values[node.id] = result;
            changed = true;
          }
        }
      });
    }

    // Set output node values
    nodes.forEach(node => {
      if (node.type === 'output') {
        const outputInputs = inputs[node.id] || [];
        if (outputInputs.length > 0) {
          values[node.id] = values[outputInputs[0]] || false;
        }
      }
    });

    setNodeValues(values);
  }, [nodes, edges]);

  return { simulateCircuit, nodeValues };
};