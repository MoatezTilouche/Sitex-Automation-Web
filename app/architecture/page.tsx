import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cpu, Network, Monitor, Zap, Cable, Server } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Server className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Architecture du Système</h1>
          <p className="text-xl opacity-90">Structure matérielle et réseau PROFINET</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Cpu className="w-8 h-8 text-blue-600" />
                Présentation Générale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'architecture du système d'automatisation de la ligne de battage repose sur un automate Siemens
                S7-1500, associé à des modules d'entrées/sorties ET200SP. Ces équipements communiquent via le réseau
                PROFINET, un protocole Ethernet industriel rapide et fiable.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Avantages de cette configuration :</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Centraliser l'intelligence du contrôle dans le CPU S7-1500</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Décentraliser les E/S proches des machines grâce aux modules ET200SP
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Réduire les câblages complexes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Offrir une communication temps réel entre l'automate, les capteurs/actionneurs et l'interface
                        opérateur (HMI)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/HMI.png"
                    alt="Architecture système"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Components */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Composants Principaux</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="w-12 h-12 mb-4 text-blue-600" />
                <CardTitle>CPU S7-1500</CardTitle>
                <CardDescription>Automate programmable central</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Unité centrale de traitement Siemens (ex. 1511-1 PN ou 1516F-3 PN/DP) gérant toute la logique de
                  contrôle et de régulation.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Contrôle centralisé</Badge>
                  <Badge variant="secondary">Régulation PID</Badge>
                  <Badge variant="secondary">Communication PROFINET</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 mb-4 text-green-600" />
                <CardTitle>Modules ET200SP</CardTitle>
                <CardDescription>E/S déportées</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Modules d'entrées/sorties placés à proximité des machines pour les signaux analogiques et numériques.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">E/S décentralisées</Badge>
                  <Badge variant="secondary">Signaux analogiques</Badge>
                  <Badge variant="secondary">Signaux numériques</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="w-12 h-12 mb-4 text-purple-600" />
                <CardTitle>Panneau HMI</CardTitle>
                <CardDescription>Interface opérateur</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Interface homme-machine WinCC connectée au réseau PROFINET pour la supervision et le contrôle.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Supervision temps réel</Badge>
                  <Badge variant="secondary">Contrôle opérateur</Badge>
                  <Badge variant="secondary">Alarmes et diagnostics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Architecture */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Network className="w-8 h-8 text-green-600" />
                Réseau PROFINET
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Le réseau PROFINET relie tous les équipements (automate, modules ET200SP, IHM). Il permet un échange
                    de données rapide et en temps réel, essentiel pour la régulation PID et la synchronisation des
                    machines.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Caractéristiques :</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Cable className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Protocole Ethernet industriel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Communication temps réel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Network className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Adressage IP configuré dans TIA Portal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/prophinet.jpg"
                    alt="Schéma réseau PROFINET"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <Separator className="my-8" />

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Configuration réseau :</h4>
                <p className="text-blue-800">
                  Chaque équipement possède une adresse IP définie dans TIA Portal, facilitant l'identification et la
                  communication. La topologie en étoile ou en ligne permet une maintenance aisée et une extension future
                  du système.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Schéma de l'Architecture Matérielle</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <Image
              src="/images/HMI.png"
              alt="Schéma architecture complète"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-600 mt-4 text-sm">
              Schéma montrant le CPU S7-1500, les modules ET200SP, le réseau PROFINET, le panneau HMI et les connexions
              aux capteurs/actionneurs
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
