import React from 'react';
import image from '../assets/5dbeda04-c471-4ff3-8c01-8e92fe1079ae.png'; 

export const Home: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LEARN ACADEMY</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Curso Populares</a>
          <a href="#" className="hover:text-gray-300">Avaliações</a>
          <a href="#" className="hover:text-gray-300">Register</a>
          <button className="bg-white text-gray-900 px-4 py-1 rounded">Login</button>
        </nav>
      </header>

      {/* Main Section */}
      <section className="bg-gray-900 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Learn Fast With Us</h2>
        <button className="bg-purple-600 text-white px-20 py-2 rounded-full mt-4">Get Started</button>
      </section>

      {/* About Section */}
<section className="py-20 bg-white text-left ml-10 px-4 flex items-center justify-between">
  <div className="max-w-xl">
    <h3 className="text-3xl font-semibold mb-4">About us</h3>
    <p className="text-gray-700 mb-8">
      Somos uma plataforma dedicada a oferecer cursos práticos
      e inovadores de fácil acesso nas áreas de programação, inteligência 
      artificial e muito mais. Nós queremos capacitar estudantes e profissionais 
      com as habilidades mais atuais e demandadas no mercado, através de uma 
      experiência de aprendizado acessível e envolvente.
    </p>
    <button type="button" className="text-purple-800 hover:text-white border border-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800">
      Learn More
    </button>
  </div>
  <img
    src={image}
    className="w-1/2 max-w-xs ml-10"
    alt="Programming"
  />
</section>

      {/* Cursos Populares */}
      <section className="bg-gray-900 text-white py-20">
        <div className="text-center">
          <h3 className="text-x">Começa a Aprender</h3>
          <p className="text-5xl font-semibold">Cursos Populares</p>
        </div>
        <div className="text-center mt-2 mb-5">
        <button className="bg-purple-600 text-white px-20 py-2 rounded-full mt-4">Get Started</button>
        </div>
        <div className="flex justify-center space-x-8">
          <img src="https://img.icons8.com/ios-filled/100/javascript.png" alt="JavaScript" />
          <img src="https://img.icons8.com/ios-filled/100/react-native.png" alt="React" />
          <img src="https://img.icons8.com/ios-filled/100/swift.png" alt="Swift" />
          <img src="https://img.icons8.com/ios-filled/100/typescript.png" alt="TypeScript" />
        </div> 
      </section>

      {/* Avaliações */}
      <section className="py-20 bg-white text-center px-4">
        <h3 className="text-3xl font-semibold mb-8">Avaliações</h3>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-6 rounded shadow-md w-80">
            <p className="text-gray-700 mb-4">Estou extremamente satisfeito com o excelente atendimento que recebi. A equipe fez de tudo para atender às minhas necessidades e superou minhas expectativas. Recomendo fortemente seus serviços!</p>
            <h4 className="font-semibold">Jéssica Tavares</h4>
            <p className="text-gray-500 text-sm">Product Manager</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md w-80">
            <p className="text-gray-700 mb-4">Agradeço a atenção que oferecem, permitindo-me ver as minhas dificuldades e melhorar minha aprendizagem.</p>
            <h4 className="font-semibold">Maria Rodrigues</h4>
            <p className="text-gray-500 text-sm">Product Designer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md w-80">
            <p className="text-gray-700 mb-4">A velocidade e eficiência do atendimento aos utilizadores são impressionantes. Eu fiz o curso de IA e estou muito satisfeito.</p>
            <h4 className="font-semibold">João Pedro</h4>
            <p className="text-gray-500 text-sm">Web Development</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
