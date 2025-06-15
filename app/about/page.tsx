import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Target, Eye, Award, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Factory className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de SITEX</h1>
          <p className="text-xl opacity-90">Société Industrielle des Textiles</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre Entreprise</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SITEX (Société Industrielle des Textiles) est une entreprise textile tunisienne spécialisée dans la
                production de tissus à base de coton. Elle est implantée à Cité Taffela Sousse, une zone industrielle reconnue
                pour son savoir-faire textile.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SITEX dispose de plusieurs lignes de production automatisées, dont la ligne de battage de coton, qui
                constitue une étape clé dans la préparation de la matière première. Cette ligne assure la séparation et
                la régulation du coton brut en vue de son traitement ultérieur.
              </p>
              <Badge variant="secondary" className="text-sm">
                Cité Taffela Sousse, Tunisie
              </Badge>
            </div>
            <div>
              <Image
                src="/images/logo.jpg"
                alt="Usine SITEX"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Target className="w-8 h-8 mb-2 text-blue-600" />
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Produire des textiles de haute qualité en alliant performance industrielle et respect de
                  l'environnement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <Eye className="w-8 h-8 mb-2 text-green-600" />
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Être un leader national et régional dans la fabrication textile automatisée et durable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos Engagements</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <CardTitle>Qualité Certifiée ISO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Standards de qualité internationaux pour tous nos produits textiles</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
                <CardTitle>Sécurité & Hygiène</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Respect strict des normes de sécurité et d'hygiène industrielle</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Innovation Continue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Développement constant en automatisation industrielle</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
