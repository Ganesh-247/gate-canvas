# Digital Logic Circuit Designer

An interactive web application for learning and simulating digital logic circuits in real-time. Build, test, and understand logic gates through visual programming and live simulation.

![Digital Logic Circuit Designer](https://img.shields.io/badge/Built%20with-React%20%26%20TypeScript-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## 🚀 Live Demo

[View Live Application](https://your-deployment-url.com) *(Replace with actual deployment URL)*

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Educational Content](#educational-content)
- [Circuit Examples](#circuit-examples)
- [Real-World Applications](#real-world-applications)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Interactive Circuit Design
- **Drag & Drop Interface**: Intuitive gate palette with logic gates (AND, OR, NOT, XOR, NAND, NOR)
- **Visual Canvas**: Interactive circuit building with React Flow
- **Real-time Simulation**: Live signal propagation with animated wire states
- **Interactive Components**: Clickable input switches and visual output indicators

### Educational Features
- **Learning Guide**: Comprehensive explanations of logic gates and their applications
- **Truth Tables**: Interactive truth tables for each gate type
- **Example Circuits**: Pre-built circuits including Half Adder, SR Latch, and basic gates
- **Visual Feedback**: Animated signals showing HIGH (glowing) and LOW (dim) states

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Modern UI**: Clean interface built with Tailwind CSS and shadcn/ui components
- **Smooth Animations**: Micro-interactions and signal animations for enhanced learning

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Components**: shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens
- **Circuit Visualization**: React Flow for interactive diagrams
- **State Management**: React hooks (useState, useCallback, useEffect)
- **Build Tool**: Vite for fast development and building
- **Icons**: Lucide React icons

## 🎯 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-logic-circuit-designer.git
   cd digital-logic-circuit-designer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
npm run preview
```

## 📖 Usage Guide

### Building Your First Circuit

1. **Select a Gate**: Drag a logic gate from the palette on the left
2. **Place on Canvas**: Drop it onto the main circuit area
3. **Add Inputs**: Drag input nodes and position them
4. **Add Outputs**: Drag output nodes to see results
5. **Connect Components**: Click and drag between connection points
6. **Test Circuit**: Click "Start Simulation" and toggle input values

### Circuit Simulation

- **Toggle Inputs**: Click input switches to change between 0 and 1
- **View Outputs**: Watch output indicators light up in real-time
- **Signal Animation**: See signals flow through wires with visual effects
- **Truth Tables**: Check the truth table panel for gate logic verification

### Example Circuits

Load pre-built examples to understand common digital logic patterns:

- **Basic AND Gate**: Learn fundamental AND logic
- **Half Adder**: Understand binary addition with XOR and AND gates
- **SR Latch**: Explore memory circuits and feedback loops

## 📚 Educational Content

### Logic Gates Explained

#### AND Gate
- **Function**: Output is HIGH only when ALL inputs are HIGH
- **Symbol**: & or ∧
- **Use Cases**: Security systems, conditional logic, multiplication in binary

#### OR Gate
- **Function**: Output is HIGH when ANY input is HIGH
- **Symbol**: ≥1 or ∨
- **Use Cases**: Alarm systems, emergency switches, addition conditions

#### NOT Gate (Inverter)
- **Function**: Inverts the input signal
- **Symbol**: ¬ or triangle with circle
- **Use Cases**: Signal inversion, creating complement signals

#### XOR Gate (Exclusive OR)
- **Function**: Output is HIGH when inputs are different
- **Symbol**: ⊕ or =1
- **Use Cases**: Binary addition, parity checking, encryption

#### NAND Gate
- **Function**: Inverted AND - Output is LOW only when ALL inputs are HIGH
- **Symbol**: & with circle
- **Use Cases**: Universal gate (can create any logic function), memory cells

#### NOR Gate
- **Function**: Inverted OR - Output is LOW when ANY input is HIGH
- **Symbol**: ≥1 with circle
- **Use Cases**: Universal gate, SR latches, logic minimization

## 🌍 Real-World Applications

### Computer Processors
- **Arithmetic Logic Units (ALU)**: Perform mathematical operations
- **Control Units**: Manage instruction execution
- **Cache Memory**: Fast data storage using latches and flip-flops

### Digital Electronics
- **Calculators**: Binary arithmetic operations
- **Digital Clocks**: Timing circuits and counters
- **Traffic Light Controllers**: Sequential logic systems

### Communication Systems
- **Error Detection**: Parity checking with XOR gates
- **Data Encoding**: Signal conditioning and formatting
- **Network Routers**: Packet forwarding logic

### Embedded Systems
- **Microcontrollers**: I/O control and processing
- **Sensor Networks**: Data acquisition and processing
- **Automotive ECUs**: Engine control and safety systems

### Security Systems
- **Access Control**: Key card readers and authentication
- **Alarm Systems**: Sensor monitoring and alert generation
- **Encryption Hardware**: Cryptographic operations

## 📁 Project Structure

```
src/
├── components/
│   ├── CircuitDesigner.tsx       # Main circuit building interface
│   ├── EducationalGuide.tsx      # Learning content and tutorials
│   ├── Header.tsx                # Application header
│   ├── circuit/
│   │   ├── GatePalette.tsx       # Draggable gate components
│   │   ├── LogicGateNode.tsx     # Individual logic gate rendering
│   │   ├── InputNode.tsx         # Input switch component
│   │   ├── OutputNode.tsx        # Output indicator component
│   │   ├── ControlPanel.tsx      # Simulation controls
│   │   ├── TruthTablePanel.tsx   # Interactive truth tables
│   │   └── ExamplesPanel.tsx     # Pre-built circuit examples
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── hooks/
│   └── useCircuitSimulation.ts   # Circuit simulation logic
├── data/
│   └── exampleCircuits.ts        # Predefined circuit configurations
├── pages/
│   ├── Index.tsx                 # Main application page
│   └── NotFound.tsx             # 404 error page
└── lib/
    └── utils.ts                  # Utility functions
```

## 🎨 Design System

The application uses a cohesive design system with:

- **Semantic Color Tokens**: Defined in `index.css` and `tailwind.config.ts`
- **Signal States**: Visual representation of HIGH/LOW logic states
- **Animations**: Smooth transitions and signal flow effects
- **Responsive Layout**: Grid-based layout that adapts to all screen sizes

## 🧪 Testing Your Knowledge

### Beginner Projects
1. Build a simple AND gate circuit
2. Create an OR gate with three inputs
3. Combine NOT gates with other gates

### Intermediate Projects
1. Design a Half Adder circuit
2. Build a 2-to-1 Multiplexer
3. Create a Parity Checker

### Advanced Projects
1. Construct a Full Adder
2. Design an SR Latch with feedback
3. Build a 4-bit Binary Counter

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Flow team for the excellent diagramming library
- shadcn for the beautiful UI component library
- The open-source community for inspiration and support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/digital-logic-circuit-designer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/digital-logic-circuit-designer/discussions)
- **Email**: your-email@example.com

---

**Made with ❤️ for digital logic education**