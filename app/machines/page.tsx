import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cog, Wind, Layers, Filter, Zap, RotateCcw } from "lucide-react"
import { MachineCarousel } from "@/components/machine-carousel"
export default function MachinesPage() {
  const machines = [
    {
      name: "BLENDOMAT (BDT)",
      icon: <Layers className="w-8 h-8" />,
      color: "blue",
      description:
        "Machine chargée de mélanger les balles de coton provenant de différentes sources et les dispose côte à côte dans une séquence précise en fonction du mélange désiré.",
      features: ["Mélange automatique", "Séquençage précis", "Optimisation du mélange"],
      images: ["/images/BDT.png", "/images/BDT2.jpg"],
    },
    {
      name: "AXIFLOW (AFC)",
      icon: <RotateCcw className="w-8 h-8" />,
      color: "green",
      description:
        "Machine capable de mélanger et de nettoyer le coton grâce à l'action conjointe de deux cylindres dentés tournant en synchronisation.",
      features: ["Cylindres synchronisés", "Nettoyage efficace", "Mélange homogène"],
      images: ["/images/AFC.jpg", "/images/AFC2.jpg"],
    },
    {
      name: "Ventilateur",
      icon: <Wind className="w-8 h-8" />,
      color: "purple",
      description:
        "Élément intermédiaire garantissant l'aspiration et le transfert du coton de la machine AXIFLOW vers la multimélangeuse. Contrôlé par un moteur asynchrone triphasé.",
      features: ["Aspiration continue", "Transfert automatique", "Moteur triphasé"],
      images: ["/images/ventilateur-1.jpg", "/images/ventilateur-2.png"],
    },
    {
      name: "Multimélangeuse (MPM)",
      icon: <Cog className="w-8 h-8" />,
      color: "orange",
      description:
        "Composée de 10 cheminées qui se remplissent successivement jusqu'à atteindre un niveau précis, puis se vident simultanément pour assurer l'uniformité optimale du mélange.",
      features: ["10 cheminées", "Remplissage séquentiel", "Vidange simultanée", "3 modes de fonctionnement"],
      images: ["/images/MPM.jpeg", "/images/MPM10.png"],
    },
    {
      name: "Nettoyeuse 4 Cylindres (CVT4)",
      icon: <Filter className="w-8 h-8" />,
      color: "red",
      description:
        "Machine de nettoyage du coton assurant un nettoyage optimal en traitant les fibres avec délicatesse. Comprend un condenseur et un silo pour l'aspiration et la demande de coton.",
      features: ["4 cylindres de nettoyage", "Condenseur intégré", "Silo de stockage", "Traitement délicat"],
      images: ["/images/CVT4.jpeg", "/images/cvt4-2.png"],
    },
    {
      name: "Dispositif d'Extraction (DX)",
      icon: <Zap className="w-8 h-8" />,
      color: "indigo",
      description:
        "Appareil dédié au mélange et au nettoyage, conçu pour rendre le coton très aéré afin de garantir son dépoussiérage optimal.",
      features: ["Aération maximale", "Dépoussiérage efficace", "3 moteurs séquentiels"],
      images: ["/images/dx-1.jpeg", "/images/dx-2.png"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 text-blue-600",
      green: "border-green-500 text-green-600",
      purple: "border-purple-500 text-purple-600",
      orange: "border-orange-500 text-orange-600",
      red: "border-red-500 text-red-600",
      indigo: "border-indigo-500 text-indigo-600",
    }
    return colors[color as keyof typeof colors] || "border-gray-500 text-gray-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Cog className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Machines de la Ligne de Battage</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            La ligne de battage de coton Trützschler constitue un système moderne de préparation de fibres, reconnu pour
            sa robustesse, sa précision et son intégration industrielle.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Présentation Générale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                La ligne de battage de coton est composée de plusieurs machines interconnectées, chacune jouant un rôle
                spécifique dans le traitement de la matière. L'automatisation vise à assurer une coordination fluide
                entre ces équipements pour garantir un rendement optimal et une qualité constante.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le processus transforme le coton brut en nappe homogène de fibres, en éliminant les impuretés, en
                ouvrant les balles, en aérant le coton et en le mélangeant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {machines.map((machine, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg border-2 ${getColorClasses(machine.color)}`}>{machine.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{machine.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{machine.description}</CardDescription>

                  <Separator className="my-4" />

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Caractéristiques principales :</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <MachineCarousel images={machine.images} machineName={machine.name} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carding Machine */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg border-2 border-teal-500 text-teal-600">
                  <Filter className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Machine Cardeuse</CardTitle>
                  <CardDescription>Étape finale de préparation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                La machine cardeuse démêle, nettoie et aligne les fibres de coton pour former un voile régulier. Elle
                représente l'étape finale de la ligne de battage avant le passage aux processus de filature.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Fonctions principales :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Démêlage des fibres</li>
                    <li>Nettoyage final</li>
                    <li>Alignement des fibres</li>
                    <li>Formation du voile</li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/CARDE.jpeg"
                    alt="Machine Cardeuse"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
