import Link from "next/link"
import { Factory, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">SITEX</span>
            </div>
            <p className="text-gray-400 text-sm">
              Société Industrielle des Textiles - Automatisation et supervision de ligne de battage de coton
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-gray-400 hover:text-white transition-colors">
                  Machines
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="text-gray-400 hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Système</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/operation" className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnement
                </Link>
              </li>
              <li>
                <Link href="/hmi-guide" className="text-gray-400 hover:text-white transition-colors">
                  Guide IHM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Cité Taffela Souuse, Tunisie
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                sitex@sitex.com.tn
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +216 73 281 777 
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SITEX - Société Industrielle des Textiles. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
