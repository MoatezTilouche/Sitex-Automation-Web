import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Cog, Monitor, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Factory className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Automatisation et Supervision</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">Ligne de Battage de Coton - SITEX</h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ce projet a pour objectif de concevoir et de mettre en œuvre une solution d'automatisation pour la ligne
              de battage de coton de l'entreprise SITEX. Il repose sur l'utilisation d'un automate Siemens S7-1500,
              associé à un système d'entrées/sorties déportées ET200SP, afin d'assurer un pilotage précis, une
              régulation PID efficace de la vitesse des moteurs, et une supervision intuitive via WinCC (HMI).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/machines">Découvrir les Machines</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">À Propos de SITEX</Link>
            </Button>
          </div>

          {/* Image placeholder for cotton beating line */}
          <div className="relative w-full max-w-4xl mx-auto">
            <Image
              src="/images/ligne.jpg"
              alt="Ligne de battage de coton SITEX"
              width={800}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Caractéristiques Principales</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Cog className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Automate Siemens S7-1500</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contrôle centralisé avec modules ET200SP pour une automatisation complète
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Monitor className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Supervision WinCC</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interface HMI intuitive pour le pilotage et la surveillance en temps réel
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Simulation PLCSIM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Tests et validation avec PLCSIM Advanced sans matériel réel</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
