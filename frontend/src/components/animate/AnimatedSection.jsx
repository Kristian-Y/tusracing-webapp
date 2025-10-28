import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Define translate classes before using them
  const translateClass = {
    up: "translate-y-[60px]",
    down: "translate-y-[-60px]",
    left: "translate-x-[-100px]",
    right: "translate-x-[100px]",
  };

  return (
    <section
      ref={ref}
      className={`transition-transform duration-1000 ease-in-out transform ${inView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
          : `opacity-0 ${translateClass[direction]} scale-95 rotate-1`
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>

  );
};

export default AnimatedSection;
