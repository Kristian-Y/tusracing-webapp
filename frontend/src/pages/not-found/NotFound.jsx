import { FaArrowRight } from "react-icons/fa";
import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTheme } from "../../theme-manager/ThemeContext";

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full h-screen relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.richardmille.com/wp-content/uploads/2016/12/25122440/vignetteMCL25.jpg?dpr=1&width=2000')",
      }}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 backdrop-blur-sm transition-colors duration-500 ${
          theme === "lightTheme" ? "bg-white/30" : "bg-black/60"
        }`}
      >
        <AnimatedSection direction="up" delay={100}>
          <h1
            className={`text-8xl md:text-9xl font-bold mb-6 w-full text-center ${
              theme === "lightTheme" ? "text-black" : "text-white"
            }`}
          >
            404
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={300}>
          <p
            className={`text-lg md:text-2xl mb-4 w-full text-center ${
              theme === "lightTheme" ? "text-black" : "text-white"
            }`}
          >
            Uh-oh! Looks like the page you're looking for doesn't exist.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={500}>
          <p
            className={`mb-8 max-w-xl w-full text-center ${
              theme === "lightTheme" ? "text-black/80" : "text-white/80"
            }`}
          >
            Don't worry, though! You can always go back to the homepage or
            check out other pages.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={700}>
          <a
            href="/"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
              theme === "lightTheme"
                ? "bg-blue-600 text-white hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,200,0.7)]"
                : "bg-blue-500 text-white hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,200,0.7)]"
            }`}
          >
            Return to home <FaArrowRight />
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFound;