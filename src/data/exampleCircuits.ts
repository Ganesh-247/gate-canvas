import { Node, Edge } from '@xyflow/react';

export interface ExampleCircuit {
  id: string;
  name: string;
  description: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  learningPoints: string;
  nodes: Node[];
  edges: Edge[];
}

export const exampleCircuits: ExampleCircuit[] = [
  {
    id: 'basic-and',
    name: 'Basic AND Gate',
    description: 'Simple AND gate with two inputs',
    difficulty: 'Basic',
    learningPoints: 'Understanding basic AND logic operation',
    nodes: [
      {
        id: 'input-1',
        type: 'input',
        position: { x: 50, y: 50 },
        data: { value: false, label: 'A' },
      },
      {
        id: 'input-2',
        type: 'input',
        position: { x: 50, y: 150 },
        data: { value: false, label: 'B' },
      },
      {
        id: 'and-gate',
        type: 'logicGate',
        position: { x: 250, y: 100 },
        data: { gateType: 'and', label: 'AND' },
      },
      {
        id: 'output-1',
        type: 'output',
        position: { x: 450, y: 100 },
        data: { value: false, label: 'Q' },
      },
    ],
    edges: [
      { id: 'e1', source: 'input-1', target: 'and-gate', sourceHandle: 'output', targetHandle: 'input-0' },
      { id: 'e2', source: 'input-2', target: 'and-gate', sourceHandle: 'output', targetHandle: 'input-1' },
      { id: 'e3', source: 'and-gate', target: 'output-1', sourceHandle: 'output', targetHandle: 'input' },
    ],
  },
  {
    id: 'half-adder',
    name: 'Half Adder',
    description: 'Adds two binary digits, produces sum and carry',
    difficulty: 'Intermediate',
    learningPoints: 'Binary addition, XOR and AND gate combination',
    nodes: [
      {
        id: 'input-a',
        type: 'input',
        position: { x: 50, y: 50 },
        data: { value: false, label: 'A' },
      },
      {
        id: 'input-b',
        type: 'input',
        position: { x: 50, y: 200 },
        data: { value: false, label: 'B' },
      },
      {
        id: 'xor-gate',
        type: 'logicGate',
        position: { x: 250, y: 80 },
        data: { gateType: 'xor', label: 'XOR' },
      },
      {
        id: 'and-gate',
        type: 'logicGate',
        position: { x: 250, y: 180 },
        data: { gateType: 'and', label: 'AND' },
      },
      {
        id: 'output-sum',
        type: 'output',
        position: { x: 450, y: 80 },
        data: { value: false, label: 'SUM' },
      },
      {
        id: 'output-carry',
        type: 'output',
        position: { x: 450, y: 180 },
        data: { value: false, label: 'CARRY' },
      },
    ],
    edges: [
      { id: 'e1', source: 'input-a', target: 'xor-gate', sourceHandle: 'output', targetHandle: 'input-0' },
      { id: 'e2', source: 'input-b', target: 'xor-gate', sourceHandle: 'output', targetHandle: 'input-1' },
      { id: 'e3', source: 'input-a', target: 'and-gate', sourceHandle: 'output', targetHandle: 'input-0' },
      { id: 'e4', source: 'input-b', target: 'and-gate', sourceHandle: 'output', targetHandle: 'input-1' },
      { id: 'e5', source: 'xor-gate', target: 'output-sum', sourceHandle: 'output', targetHandle: 'input' },
      { id: 'e6', source: 'and-gate', target: 'output-carry', sourceHandle: 'output', targetHandle: 'input' },
    ],
  },
  {
    id: 'sr-latch',
    name: 'SR Latch',
    description: 'Set-Reset latch using NOR gates',
    difficulty: 'Advanced',
    learningPoints: 'Memory circuits, feedback loops, bistable states',
    nodes: [
      {
        id: 'input-s',
        type: 'input',
        position: { x: 50, y: 50 },
        data: { value: false, label: 'S (Set)' },
      },
      {
        id: 'input-r',
        type: 'input',
        position: { x: 50, y: 200 },
        data: { value: false, label: 'R (Reset)' },
      },
      {
        id: 'nor-1',
        type: 'logicGate',
        position: { x: 250, y: 80 },
        data: { gateType: 'nor', label: 'NOR' },
      },
      {
        id: 'nor-2',
        type: 'logicGate',
        position: { x: 250, y: 180 },
        data: { gateType: 'nor', label: 'NOR' },
      },
      {
        id: 'output-q',
        type: 'output',
        position: { x: 450, y: 80 },
        data: { value: false, label: 'Q' },
      },
      {
        id: 'output-qn',
        type: 'output',
        position: { x: 450, y: 180 },
        data: { value: false, label: 'Q̄' },
      },
    ],
    edges: [
      { id: 'e1', source: 'input-s', target: 'nor-1', sourceHandle: 'output', targetHandle: 'input-0' },
      { id: 'e2', source: 'input-r', target: 'nor-2', sourceHandle: 'output', targetHandle: 'input-0' },
      { id: 'e3', source: 'nor-1', target: 'output-q', sourceHandle: 'output', targetHandle: 'input' },
      { id: 'e4', source: 'nor-2', target: 'output-qn', sourceHandle: 'output', targetHandle: 'input' },
      // Feedback connections
      { id: 'e5', source: 'nor-2', target: 'nor-1', sourceHandle: 'output', targetHandle: 'input-1' },
      { id: 'e6', source: 'nor-1', target: 'nor-2', sourceHandle: 'output', targetHandle: 'input-1' },
    ],
  },
];