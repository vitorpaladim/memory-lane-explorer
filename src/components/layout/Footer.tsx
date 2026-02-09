import { Link } from "react-router-dom";
import { Landmark, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Desc */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif text-lg font-bold">
              <Landmark className="h-6 w-6 text-accent" />
              Centro de Memórias
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Preservando e compartilhando a história da nossa cidade para as futuras gerações.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-semibold mb-4 text-accent">Navegação</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/linha-do-tempo" className="hover:text-accent transition-colors">Linha do Tempo</Link></li>
              <li><Link to="/biblioteca" className="hover:text-accent transition-colors">Biblioteca Digital</Link></li>
              <li><Link to="/atividades" className="hover:text-accent transition-colors">Atividades Parlamentares</Link></li>
              <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Praça Central, 100 — Centro</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> (11) 3456-7890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> contato@centrodememoria.gov.br</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif font-semibold mb-4 text-accent">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md bg-navy-light hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-md bg-navy-light hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-md bg-navy-light hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Centro de Memórias da Cidade. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade (LGPD)</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
