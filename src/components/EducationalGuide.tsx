import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  Zap, 
  Building2, 
  Smartphone, 
  Car, 
  Brain,
  Calculator,
  Monitor,
  Gamepad2,
  Wifi
} from "lucide-react";

const EducationalGuide = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="h-6 w-6 text-primary" />
            Digital Logic Circuit Guide
          </CardTitle>
          <p className="text-muted-foreground">
            Learn about digital logic gates, their applications, and real-world examples
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="basics" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Logic Basics</TabsTrigger>
          <TabsTrigger value="gates">Gate Types</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="examples">Real Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is Digital Logic?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Digital logic is the foundation of all digital electronics. It works with binary signals - 
                either HIGH (1) or LOW (0) - to process information and make decisions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-signal-high rounded-full"></span>
                    HIGH (1) State
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Voltage present (typically 3.3V or 5V)</li>
                    <li>• Represents TRUE</li>
                    <li>• Switch ON</li>
                    <li>• Light ON</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-signal-low rounded-full"></span>
                    LOW (0) State
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No voltage (0V)</li>
                    <li>• Represents FALSE</li>
                    <li>• Switch OFF</li>
                    <li>• Light OFF</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Learn Digital Logic?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <Cpu className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Foundation of processors and memory</p>
                </div>
                <div className="text-center p-4">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Electronics</h4>
                  <p className="text-sm text-muted-foreground">Building blocks of digital circuits</p>
                </div>
                <div className="text-center p-4">
                  <Brain className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">Logical thinking and analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gates" className="space-y-4">
          {[
            {
              name: 'AND Gate',
              symbol: '&',
              description: 'Output is HIGH only when ALL inputs are HIGH',
              analogy: 'Like a series of switches - all must be ON for the light to turn ON',
              truthTable: [['0','0','0'], ['0','1','0'], ['1','0','0'], ['1','1','1']],
              applications: ['Security systems', 'Enable/disable circuits', 'Conditional logic']
            },
            {
              name: 'OR Gate',
              symbol: '≥1',
              description: 'Output is HIGH when ANY input is HIGH',
              analogy: 'Like parallel switches - any one switch can turn the light ON',
              truthTable: [['0','0','0'], ['0','1','1'], ['1','0','1'], ['1','1','1']],
              applications: ['Alarm systems', 'Multiple input detection', 'Selection circuits']
            },
            {
              name: 'NOT Gate',
              symbol: '1',
              description: 'Inverts the input - HIGH becomes LOW, LOW becomes HIGH',
              analogy: 'Like an inverting switch - press to turn OFF, release to turn ON',
              truthTable: [['0','1'], ['1','0']],
              applications: ['Signal inversion', 'Creating opposite signals', 'Boolean complement']
            },
            {
              name: 'XOR Gate',
              symbol: '=1',
              description: 'Output is HIGH when inputs are DIFFERENT',
              analogy: 'Like a stairway light with switches at top and bottom',
              truthTable: [['0','0','0'], ['0','1','1'], ['1','0','1'], ['1','1','0']],
              applications: ['Data encryption', 'Parity checking', 'Binary addition']
            }
          ].map((gate) => (
            <Card key={gate.name}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <Badge variant="outline" className="font-mono text-lg px-3 py-1">
                    {gate.symbol}
                  </Badge>
                  {gate.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{gate.description}</p>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm"><strong>Real-world analogy:</strong> {gate.analogy}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Truth Table</h5>
                    <div className="border rounded overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            {gate.truthTable[0].length === 3 ? (
                              <>
                                <th className="p-2">A</th>
                                <th className="p-2">B</th>
                                <th className="p-2">Out</th>
                              </>
                            ) : (
                              <>
                                <th className="p-2">A</th>
                                <th className="p-2">Out</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {gate.truthTable.map((row, i) => (
                            <tr key={i} className="border-t">
                              {row.map((cell, j) => (
                                <td key={j} className={`p-2 text-center font-mono ${
                                  cell === '1' ? 'text-signal-high font-bold' : 'text-signal-low'
                                }`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Common Applications</h5>
                    <ul className="space-y-1 text-sm">
                      {gate.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Computer Processors',
                icon: Cpu,
                description: 'CPUs use billions of logic gates to perform calculations and execute instructions',
                examples: ['Arithmetic Logic Unit (ALU)', 'Control units', 'Cache memory']
              },
              {
                title: 'Memory Systems',
                icon: Monitor,
                description: 'RAM, ROM, and storage devices use logic gates to store and retrieve data',
                examples: ['Flip-flops for memory cells', 'Address decoders', 'Data selectors']
              },
              {
                title: 'Digital Displays',
                icon: Monitor,
                description: 'LED displays and screens use logic to control pixels and segments',
                examples: ['7-segment displays', 'Matrix displays', 'Graphics processing']
              },
              {
                title: 'Communication',
                icon: Wifi,
                description: 'Digital communication relies on logic for encoding and error detection',
                examples: ['Modems', 'Network routers', 'Error correction codes']
              }
            ].map((app) => (
              <Card key={app.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <app.icon className="h-5 w-5 text-primary" />
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Examples:</h5>
                    <ul className="space-y-1">
                      {app.examples.map((example, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-6">
            {[
              {
                title: 'Smartphone',
                icon: Smartphone,
                description: 'Your smartphone contains billions of logic gates working together',
                circuits: [
                  'Camera sensor processing (image filters)',
                  'Touch screen controllers (coordinate detection)',
                  'Battery management (charging logic)',
                  'Audio processing (sound amplification)',
                  'Network communication (signal processing)'
                ]
              },
              {
                title: 'Smart Car',
                icon: Car,
                description: 'Modern vehicles use digital logic for safety and efficiency',
                circuits: [
                  'Anti-lock Braking System (wheel speed sensors)',
                  'Engine Control Unit (fuel injection timing)',
                  'Airbag deployment (crash sensor logic)',
                  'GPS Navigation (coordinate calculations)',
                  'Parking sensors (distance measurement)'
                ]
              },
              {
                title: 'Gaming Console',
                icon: Gamepad2,
                description: 'Game consoles rely heavily on digital logic for real-time processing',
                circuits: [
                  'Graphics Processing (3D rendering)',
                  'Controller input (button press detection)',
                  'Audio synthesis (sound generation)',
                  'Network communication (online gaming)',
                  'Memory management (game loading)'
                ]
              },
              {
                title: 'Smart Building',
                icon: Building2,
                description: 'Buildings use logic systems for automation and energy efficiency',
                circuits: [
                  'HVAC control (temperature regulation)',
                  'Security systems (access control)',
                  'Lighting automation (motion detection)',
                  'Fire safety (smoke detection logic)',
                  'Elevator control (floor selection)'
                ]
              },
              {
                title: 'Calculator',
                icon: Calculator,
                description: 'Even simple calculators demonstrate fundamental digital logic concepts',
                circuits: [
                  'Binary arithmetic (addition, subtraction)',
                  'Display control (7-segment drivers)',
                  'Button scanning (input detection)',
                  'Number conversion (decimal to binary)',
                  'Memory functions (storage logic)'
                ]
              }
            ].map((example) => (
              <Card key={example.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <example.icon className="h-6 w-6 text-primary" />
                    {example.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold mb-3">Digital Logic Applications:</h5>
                  <div className="grid gap-2">
                    {example.circuits.map((circuit, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <Badge variant="outline" className="mt-0.5 text-xs">
                          {i + 1}
                        </Badge>
                        <span className="text-sm">{circuit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Try Building These Circuits!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2">🚦 Traffic Light Controller</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use AND/OR gates to control when lights change based on sensors and timers
                  </p>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2">🔐 Security Keypad</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Combine multiple inputs to create a digital lock system
                  </p>
                  <Badge variant="secondary">Advanced</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducationalGuide;