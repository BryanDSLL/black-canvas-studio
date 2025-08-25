import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-cyan-400">Black Canvas Studio</h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 px-3 py-2">Home</a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2">Artistas</a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2">Portfólio</a>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2">Contato</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <a href="#" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Agendar Horário
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Studio Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Sua História na</span>{' '}
            <span className="text-cyan-400">Pele</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Arte que <span className="text-cyan-400">Permanece</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Estúdio de tatuagem especializado em fine line, realismo e criações autorais. 
            Transformamos suas ideias em arte que dura para sempre.
          </p>
          <a 
            href="#" 
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Conhecer nosso Portfólio
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-white">Trabalhos</span>{' '}
            <span className="text-cyan-400">Recentes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Blackwork Tattoo" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Blackwork</h3>
                <p className="text-gray-300">Por Marina Silva</p>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Realistic Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Realismo</h3>
                <p className="text-gray-300">Por Carlos Mendes</p>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Fine Line Art" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Fine Line</h3>
                <p className="text-gray-300">Por Ana Costa</p>
              </div>
            </div>

            {/* Portfolio Card 4 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Geometric Design" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Geométrico</h3>
                <p className="text-gray-300">Por Roberto Alves</p>
              </div>
            </div>

            {/* Portfolio Card 5 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Watercolor Style" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Aquarela</h3>
                <p className="text-gray-300">Por Lucia Santos</p>
              </div>
            </div>

            {/* Portfolio Card 6 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Tribal Art" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Tribal</h3>
                <p className="text-gray-300">Por Diego Ferreira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-white">Nossos</span>{' '}
            <span className="text-cyan-400">Artistas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artist 1 */}
            <div className="bg-gray-800 rounded-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Marina Silva" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Marina Silva</h3>
              <p className="text-cyan-400 mb-4">Especialista em Blackwork e Dotwork</p>
              <p className="text-gray-300 mb-6">5 anos de experiência em designs minimalistas e geométricos</p>
              <a 
                href="#" 
                className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Ver Trabalhos
              </a>
            </div>

            {/* Artist 2 */}
            <div className="bg-gray-800 rounded-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Carlos Mendes" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Carlos Mendes</h3>
              <p className="text-cyan-400 mb-4">Especialista em Realismo e Retratos</p>
              <p className="text-gray-300 mb-6">8 anos criando tatuagens hiper-realistas e retratos detalhados</p>
              <a 
                href="#" 
                className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Ver Trabalhos
              </a>
            </div>

            {/* Artist 3 */}
            <div className="bg-gray-800 rounded-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Ana Costa" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Ana Costa</h3>
              <p className="text-cyan-400 mb-4">Especialista em Fine Line e Delicadas</p>
              <p className="text-gray-300 mb-6">6 anos dedicados a tatuagens delicadas e traços finos</p>
              <a 
                href="#" 
                className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Ver Trabalhos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pronto para Criar sua Próxima Tatuagem?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto">
            Agende uma consulta gratuita com um de nossos artistas para discutir suas ideias 
            e criar um design exclusivo que conte sua história.
          </p>
          <a 
            href="#" 
            className="inline-block bg-gray-900 hover:bg-gray-800 text-cyan-400 px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Fazer Orçamento Online
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Black Canvas Studio</h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.16-1.507-.7-2.448-2.78-2.448-4.958 0-3.778 2.745-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2025 Black Canvas Studio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}