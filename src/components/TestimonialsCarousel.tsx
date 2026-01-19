import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    location: "San Pedro",
    rating: 5,
    text: "¡Excelente calidad! La conservadora 42L mantuvo todo frío durante todo el día en la playa. Super recomendado.",
    product: "Conservadora 42L"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "San Nicolás",
    rating: 5,
    text: "El combo verano fue la mejor compra. Llegó súper rápido y todo en perfecto estado. 10 puntos.",
    product: "Super Combo Verano"
  },
  {
    id: 3,
    name: "Laura Fernández",
    location: "San Pedro",
    rating: 5,
    text: "La pava eléctrica es espectacular, calienta el agua en segundos. Ideal para el mate.",
    product: "Pava Mate Eléctrica"
  },
  {
    id: 4,
    name: "Diego Martínez",
    location: "San Nicolás",
    rating: 5,
    text: "Muy buena atención por WhatsApp, respondieron todas mis dudas. El envío fue gratis y llegó al día siguiente.",
    product: "Conservadora 22L"
  },
  {
    id: 5,
    name: "Ana López",
    location: "San Pedro",
    rating: 5,
    text: "Las botellas térmicas son de primera calidad. El agua sigue fría después de 24 horas!",
    product: "Botella Térmica 2L"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-outfit font-semibold text-sm mb-4">
            <Star className="w-4 h-4 fill-primary" />
            Clientes Felices
          </span>
          <h2 className="font-outfit font-bold text-2xl md:text-4xl text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-background border border-border rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 text-primary/10" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-secondary fill-secondary"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-outfit font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          📍 {testimonial.location} • {testimonial.product}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
