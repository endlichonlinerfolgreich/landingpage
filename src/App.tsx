import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Shield, 
  CheckCircle, 
  Target,
  Users,
  BarChart3,
  Settings,
  Award,
  Mail,
  Phone,
  Calendar
} from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  type: 'radio' | 'text';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Wie hoch ist Ihr aktueller Jahresumsatz?",
    options: ["Unter 500.000€", "500.000€ - 1 Mio€", "1-5 Mio€", "Über 5 Mio€"],
    type: 'radio'
  },
  {
    id: 2,
    question: "Welche IT-Herausforderungen beschäftigen Sie am meisten?",
    options: ["Langsame Systeme", "Manuelle Prozesse", "Datenverluste", "Sicherheitslücken"],
    type: 'radio'
  },
  {
    id: 3,
    question: "Wie viel Zeit verlieren Sie täglich durch ineffiziente IT-Prozesse?",
    options: ["Unter 1 Stunde", "1-3 Stunden", "3-6 Stunden", "Über 6 Stunden"],
    type: 'radio'
  },
  {
    id: 4,
    question: "Was ist Ihr größtes Geschäftsziel für 2025?",
    options: ["", "", "", ""],
    type: 'text'
  }
];

export default function ITOptimierungLanding() {
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuizStep = () => {
    if (currentQuizStep < quizQuestions.length - 1) {
      setCurrentQuizStep(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const quizProgress = ((currentQuizStep + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950/10 via-background to-green-950/10">
        <div className="absolute inset-0 bg-[url('/it-optimization-hero.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        
        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm mb-8">
              <TrendingUp size={16} />
              <span>IT-Optimierung für Unternehmer</span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 bg-clip-text text-transparent">
                30% mehr Umsatz
              </span>
              <br />
              <span className="text-foreground">in 90 Tagen</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl mb-12 leading-relaxed">
              Ich mache IT- und Geschäftsprozesse so effizient, dass Unternehmer innerhalb von 90 Tagen bis zu 30% mehr Umsatz erzielen – 
              <strong className="text-foreground"> ohne einen Cent mehr für Werbung auszugeben.</strong>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg"
                onClick={() => setShowQuiz(true)}
              >
                <span>Kostenloses Potenzial-Assessment</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="backdrop-blur-sm px-8 py-4 text-lg"
                onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Erfolgsgeschichte ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-muted-foreground">Durchschnittliche Umsatzsteigerung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90</div>
              <p className="text-muted-foreground">Tage bis zum Ergebnis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">0€</div>
              <p className="text-muted-foreground">Zusätzliche Werbekosten</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
                Bewiesene Erfolgsgeschichte
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Wie ich bei einem Zahnarzt-Zubehör-Lieferanten 30% Umsatzsteigerung erreicht habe
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/revenue-dashboard.png" 
                  alt="Umsatz-Dashboard mit 30% Steigerung" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <CheckCircle size={20} />
                      Das Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-600">
                      Manuelle Bestellprozesse, veraltete Lagerverwaltung und ineffiziente Kundenkommunikation 
                      kosteten täglich wertvolle Arbeitszeit und Umsatz.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Settings size={20} />
                      Die Lösung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600">
                      Automatisierung der Bestellabwicklung, Integration moderner Lagersysteme und 
                      Optimierung der Kundenbetreuung durch intelligente IT-Lösungen.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <TrendingUp size={20} />
                      Das Ergebnis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-600 font-semibold">
                      30% Umsatzsteigerung in nur 90 Tagen durch optimierte IT-Prozesse – 
                      ohne zusätzliche Werbeausgaben!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
                Warum IT-Optimierung Ihren Umsatz steigert
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Effiziente Systeme schaffen mehr Zeit für das, was wirklich zählt: Ihr Geschäft
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>Mehr Zeit für Kunden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatisierte Prozesse sparen täglich Stunden, die Sie in Kundenbetreuung und Akquise investieren können.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                  <CardTitle>Bessere Entscheidungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Echtzeitdaten und Analytics geben Ihnen den Überblick, den Sie für strategische Entscheidungen brauchen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>Zufriedenere Kunden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Schnellere Bearbeitung und weniger Fehler führen zu glücklicheren Kunden und mehr Weiterempfehlungen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-orange-600" size={24} />
                  </div>
                  <CardTitle>Weniger Risiken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sichere Systeme und automatische Backups schützen vor kostspieligen Ausfällen und Datenverlusten.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-red-600" size={24} />
                  </div>
                  <CardTitle>Skalierbarkeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimierte IT wächst mit Ihrem Unternehmen mit – ohne proportional steigende Komplexität.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-teal-600" size={24} />
                  </div>
                  <CardTitle>Wettbewerbsvorteil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Während Konkurrenten noch manuell arbeiten, sind Sie bereits einen Schritt voraus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      {showQuiz && !quizCompleted && (
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>IT-Potenzial Assessment</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowQuiz(false)}
                >
                  ✕
                </Button>
              </div>
              <Progress value={quizProgress} className="mt-4" />
              <p className="text-sm text-muted-foreground">
                Frage {currentQuizStep + 1} von {quizQuestions.length}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {quizQuestions[currentQuizStep].question}
                </h3>
                
                {quizQuestions[currentQuizStep].type === 'radio' ? (
                  <RadioGroup
                    value={quizAnswers[quizQuestions[currentQuizStep].id] || ''}
                    onValueChange={(value) => handleQuizAnswer(quizQuestions[currentQuizStep].id, value)}
                  >
                    {quizQuestions[currentQuizStep].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Textarea
                    placeholder="Beschreiben Sie Ihr Hauptziel..."
                    value={quizAnswers[quizQuestions[currentQuizStep].id] || ''}
                    onChange={(e) => handleQuizAnswer(quizQuestions[currentQuizStep].id, e.target.value)}
                  />
                )}
              </div>
              
              <Button 
                onClick={nextQuizStep}
                disabled={!quizAnswers[quizQuestions[currentQuizStep].id]}
                className="w-full"
              >
                {currentQuizStep < quizQuestions.length - 1 ? 'Weiter' : 'Assessment abschließen'}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quiz Results & Contact */}
      {quizCompleted && (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
                  Ihr IT-Potenzial ist analysiert!
                </h2>
                <p className="text-xl text-muted-foreground">
                  Lassen Sie uns in einem kostenlosen Beratungsgespräch Ihre konkreten Möglichkeiten besprechen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Ihr nächster Schritt</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Kostenlose Erstberatung</h4>
                      <p className="text-green-700 text-sm">
                        30 Minuten Gespräch über Ihre IT-Herausforderungen und Potenziale
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600" size={16} />
                        <span className="text-sm">Analyse Ihrer aktuellen IT-Landschaft</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600" size={16} />
                        <span className="text-sm">Konkrete Optimierungsvorschläge</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600" size={16} />
                        <span className="text-sm">Potenzial-Einschätzung für Ihr Unternehmen</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Kontakt aufnehmen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Unternehmen *</Label>
                          <Input
                            id="company"
                            value={contactForm.company}
                            onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                            placeholder="Firmenname"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="ihre@email.de"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+49 123 456789"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Nachricht</Label>
                        <Textarea
                          id="message"
                          value={contactForm.message}
                          onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                          placeholder="Was sind Ihre größten IT-Herausforderungen?"
                        />
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        <Calendar className="mr-2" size={16} />
                        Beratungstermin vereinbaren
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section for non-quiz users */}
      {!showQuiz && !quizCompleted && (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold mb-4 md:text-4xl">
                Bereit für 30% mehr Umsatz?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch und entdecken Sie das Potenzial Ihrer IT.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4"
                  onClick={() => setShowQuiz(true)}
                >
                  <Calendar className="mr-2" />
                  Kostenloses Assessment starten
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4"
                >
                  <Phone className="mr-2" />
                  Direkt anrufen
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Ihr IT-Optimierungs-Experte
            </h3>
            <p className="text-muted-foreground mb-6">
              Spezialisiert auf IT-Optimierung und Geschäftsprozesse für mehr Umsatz – 
              ohne zusätzliche Werbekosten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>kontakt@it-optimierung.de</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+49 123 456 789</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              <p>&copy; 2025 IT-Optimierung. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}