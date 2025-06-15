import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Square, AlertTriangle, Settings, Clock, Repeat } from "lucide-react"

export default function OperationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Play className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fonctionnement</h1>
          <p className="text-xl opacity-90">Cycles de fonctionnement automatisé de la ligne de battage</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Cycle de Fonctionnement Automatisé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le cycle de fonctionnement automatisé décrit l'enchaînement logique et chronologique des étapes que suit
                la ligne de battage de coton, depuis le démarrage jusqu'à l'arrêt. Chaque machine est commandée selon un
                ordre précis, coordonné automatiquement par l'automate, afin d'assurer un flux continu et synchronisé de
                la matière à travers les différents postes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Machine Cycles */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="blendomat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="blendomat">BLENDOMAT</TabsTrigger>
              <TabsTrigger value="axiflow">AXIFLOW</TabsTrigger>
              <TabsTrigger value="ventilateur">Ventilateur</TabsTrigger>
              <TabsTrigger value="mpm">MPM</TabsTrigger>
              <TabsTrigger value="condenseur">Condenseur</TabsTrigger>
              <TabsTrigger value="cvt4">CVT4 & DX</TabsTrigger>
            </TabsList>

            <TabsContent value="blendomat" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Play className="w-6 h-6 text-blue-600" />
                    Cycle Machine BLENDOMAT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Conditions de démarrage :</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Appuyer sur le bouton de mise en marche</li>
                        <li>
                          Choisir le mode de fonctionnement de la machine multimélangeuse (remplissage ou automatique)
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Conditions d'arrêt :</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <span className="text-red-800">Dysfonctionnement machine</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                          <Square className="w-5 h-5 text-orange-600" />
                          <span className="text-orange-800">Mode vidange MPM</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          <span className="text-yellow-800">Ouverture de porte</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="axiflow" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Repeat className="w-6 h-6 text-green-600" />
                    Cycle Machine AXIFLOW
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Fonctionnement des moteurs :</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-l-blue-500">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Moteur MT1</CardTitle>
                            <Badge variant="secondary">Étoile-Triangle</Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">
                              Facilite le mouvement du coton à travers deux cylindres qui éliminent les impuretés
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Moteur MT2</CardTitle>
                            <Badge variant="secondary">Fonctionnement intermittent</Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700">Activation directe : 5 secondes ON, 3 secondes OFF</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Conditions d'arrêt :</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive">Bouton d'arrêt</Badge>
                        <Badge variant="destructive">Incendie</Badge>
                        <Badge variant="destructive">Arrêt d'urgence</Badge>
                        <Badge variant="destructive">Ouverture de porte</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ventilateur" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Play className="w-6 h-6 text-purple-600" />
                    Cycle Ventilateur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-purple-900">Fonction principale</h3>
                      <p className="text-purple-800">
                        Élément intermédiaire facilitant le transfert de matière d'AXIFLOW vers MPM grâce à l'aspiration
                        par turbine
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Séquence de fonctionnement :</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Appui sur bouton marche</li>
                        <li>Démarrage moteur électrique</li>
                        <li>Activation turbine ventilateur</li>
                        <li>Aspiration et transfert continus</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mpm" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Settings className="w-6 h-6 text-orange-600" />
                    Cycle Machine MPM (Multimélangeuse)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800">
                        <strong>10 cheminées</strong> se remplissent successivement jusqu'à un niveau précis, puis se
                        vident simultanément pour assurer l'uniformité optimale du mélange
                      </p>
                    </div>

                    <Tabs defaultValue="remplissage" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="remplissage">Mode Remplissage</TabsTrigger>
                        <TabsTrigger value="vidange">Mode Vidange</TabsTrigger>
                        <TabsTrigger value="automatique">Mode Automatique</TabsTrigger>
                      </TabsList>

                      <TabsContent value="remplissage" className="mt-4">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Séquence de remplissage :</h4>
                          <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li>Activation sélecteur mode remplissage</li>
                            <li>Démarrage des deux moteurs d'alimentation</li>
                            <li>Ouverture clapet V1 - début remplissage cheminée 1</li>
                            <li>Détection pression par pressostat Pr</li>
                            <li>Fermeture V1, ouverture V2 - passage cheminée suivante</li>
                            <li>Répétition jusqu'aux 10 cheminées (compteur)</li>
                          </ol>
                        </div>
                      </TabsContent>

                      <TabsContent value="vidange" className="mt-4">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Séquence de vidange :</h4>
                          <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li>Activation sélecteur mode vidange</li>
                            <li>Démarrage moteurs d'alimentation</li>
                            <li>Détection niveau haut par capteur S-haut</li>
                            <li>Activation rouleaux détachement MT3 et MT4</li>
                            <li>Activation cylindres base cheminées</li>
                            <li>Libération matière dans canal</li>
                          </ol>
                        </div>
                      </TabsContent>

                      <TabsContent value="automatique" className="mt-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">Mode Automatique</h4>
                          <p className="text-green-800">
                            Fusion des actions de remplissage et vidange simultanément. La machine MPM remplit et vide
                            en même temps, garantissant le fonctionnement continu des machines précédentes et suivantes.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="condenseur" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Play className="w-6 h-6 text-indigo-600" />
                    Cycle Condenseur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-l-blue-500">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Moteur MT1</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">Aspiration du coton provenant du MPM</p>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-green-500">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Moteur MT2</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">Transfert du coton vers le silo</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Capteurs du silo :</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-blue-800">
                            <strong>Photocellule 1 :</strong> Active les rouleaux détacheurs pour demande matière
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <span className="text-red-800">
                            <strong>Photocellule 2 :</strong> Sécurité en cas de rupture de coton
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cvt4" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-red-600" />
                      Cycle Machine CVT4
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-red-800">
                          <strong>Fonction :</strong> Séparation du coton de ses impuretés avec surveillance par deux
                          capteurs pressostat (matières et déchets)
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Entrées analogiques :</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Badge variant="outline" className="p-3 justify-start">
                            Pressostat matières
                          </Badge>
                          <Badge variant="outline" className="p-3 justify-start">
                            Pressostat déchets
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Play className="w-6 h-6 text-teal-600" />
                      Cycle Machine DX
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <p className="text-teal-800">
                          <strong>Fonction :</strong> Mélange et nettoyage pour rendre le coton très aéré et garantir
                          son dépoussiérage
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Séquence des moteurs :</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">1</span>
                            <span className="text-blue-800">
                              <strong>MT1 :</strong> Aspiration matériaux depuis CVT4
                            </span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">2</span>
                            <span className="text-green-800">
                              <strong>MT2 :</strong> Aération du coton (va-et-vient)
                            </span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">3</span>
                            <span className="text-purple-800">
                              <strong>MT3 :</strong> Acheminement vers étape suivante
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Global Mode */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Clock className="w-8 h-8 text-green-600" />
                Mode Global
              </CardTitle>
              <CardDescription>Fonctionnement automatique de toute la ligne</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800 text-lg leading-relaxed">
                    En mode global, les machines de la ligne de battage opèrent successivement sans intervention
                    humaine, grâce à l'utilisation d'un chronomètre. Cette coordination automatique assure un flux
                    continu et optimisé.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Démarrage :</h3>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Play className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-800">Bouton marche global</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Arrêt :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                        <Square className="w-4 h-4 text-red-600" />
                        <span className="text-red-800 text-sm">Arrêt d'urgence</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-800 text-sm">Détection incendie</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
