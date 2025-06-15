import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, User, Settings, Shield, Eye, Navigation, AlertTriangle, Clock } from "lucide-react"

export default function HMIGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Monitor className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guide d'Utilisation IHM</h1>
          <p className="text-xl opacity-90">Interface de supervision et contrôle WinCC</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Guide Pratique pour Techniciens</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ce guide sert de référence pratique pour les techniciens afin de surveiller et piloter la ligne de
                battage de coton via l'interface HMI (écran tactile) développée sous WinCC, sans avoir besoin de
                connaissances avancées.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="monitoring">Supervision</TabsTrigger>
              <TabsTrigger value="alarms">Alarmes</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <User className="w-6 h-6 text-blue-600" />
                    1. Connexion à l'IHM (Login)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Procédure de connexion :</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>À l'allumage de l'IHM, l'écran d'accueil s'affiche</li>
                        <li>Cliquer sur le bouton de connexion</li>
                        <li>Entrer nom d'utilisateur et mot de passe (fourni par le superviseur)</li>
                        <li>Sélectionner le niveau d'accès approprié</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Niveaux d'accès disponibles :</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-l-4 border-l-green-500">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                              <Eye className="w-5 h-5 text-green-600" />
                              <CardTitle className="text-base">Opérateur</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Supervision basique</li>
                              <li>• Contrôle standard</li>
                              <li>• Lecture des états</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-500">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                              <Settings className="w-5 h-5 text-orange-600" />
                              <CardTitle className="text-base">Maintenance</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Accès aux alarmes</li>
                              <li>• Diagnostics avancés</li>
                              <li>• Commandes étendues</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-red-500">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                              <Shield className="w-5 h-5 text-red-600" />
                              <CardTitle className="text-base">Administrateur</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Configuration système</li>
                              <li>• Paramètres avancés</li>
                              <li>• Gestion utilisateurs</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="navigation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Navigation className="w-6 h-6 text-green-600" />
                    2. Navigation entre les Vues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-green-900">Navigation simple</h3>
                      <p className="text-green-800">
                        La navigation se fait via un menu à onglets (barre latérale ou en haut de l'écran). Chaque écran
                        est clairement identifié par une icône et un titre.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Comment naviguer :</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Appuyez simplement sur l'onglet correspondant</li>
                        <li>L'écran se charge automatiquement</li>
                        <li>Utilisez les boutons de retour si nécessaire</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Écrans disponibles :</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <Badge variant="outline" className="p-3 justify-start">
                          Vue d'ensemble générale
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          Contrôle machines individuelles
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          Historique et tendances
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          Alarmes et diagnostics
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Eye className="w-6 h-6 text-purple-600" />
                    3. Lecture des Informations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Signalisation par couleurs :</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-l-red-500">
                          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                          <div>
                            <span className="font-semibold text-red-900">Rouge</span>
                            <p className="text-red-800 text-sm">Arrêt ou défaut</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                          <div>
                            <span className="font-semibold text-green-900">Vert</span>
                            <p className="text-green-800 text-sm">En marche</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Textes d'état :</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <Badge variant="secondary" className="p-3 justify-center">
                          "Machine prête"
                        </Badge>
                        <Badge variant="secondary" className="p-3 justify-center">
                          "En marche"
                        </Badge>
                        <Badge variant="secondary" className="p-3 justify-center">
                          "En défaut"
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Informations affichées :</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>État de chaque machine en temps réel</li>
                        <li>Vitesses et paramètres de fonctionnement</li>
                        <li>Niveaux de remplissage (silos, cheminées)</li>
                        <li>Pressions et débits</li>
                        <li>Températures si applicables</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alarms" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    4. Consultation et Gestion des Alarmes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800">
                        Un écran spécifique "Alarmes" regroupe toutes les erreurs détectées sur la ligne de battage. Cet
                        écran est accessible depuis le menu principal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Informations d'alarme :</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-l-4 border-l-orange-500">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-orange-600" />
                              Type de défaut
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">Description précise du problème détecté</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-blue-500">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Settings className="w-4 h-4 text-blue-600" />
                              Machine concernée
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">Identification de l'équipement en défaut</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Clock className="w-4 h-4 text-purple-600" />
                              Horodatage
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">Date et heure d'apparition de l'alarme</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Types d'alarmes courantes :</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <span className="text-red-800">Arrêt d'urgence activé</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-orange-600" />
                          <span className="text-orange-800">Porte ouverte sur machine</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          <span className="text-yellow-800">Niveau bas dans silo</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-purple-600" />
                          <span className="text-purple-800">Défaut moteur</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Procédure de gestion :</h4>
                      <ol className="list-decimal list-inside text-blue-800 space-y-1">
                        <li>Identifier l'alarme dans la liste</li>
                        <li>Noter les détails (machine, type, heure)</li>
                        <li>Effectuer les actions correctives nécessaires</li>
                        <li>Acquitter l'alarme une fois le problème résolu</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
