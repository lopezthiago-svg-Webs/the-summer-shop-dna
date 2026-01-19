import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 7 days from now (resets on page load for demo)
    const getTargetDate = () => {
      const stored = localStorage.getItem("comboOfferEndDate");
      if (stored) {
        const storedDate = new Date(stored);
        if (storedDate > new Date()) {
          return storedDate;
        }
      }
      // Set new target: 3 days from now
      const newTarget = new Date();
      newTarget.setDate(newTarget.getDate() + 3);
      newTarget.setHours(23, 59, 59, 999);
      localStorage.setItem("comboOfferEndDate", newTarget.toISOString());
      return newTarget;
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
          <span className="font-outfit font-extrabold text-2xl md:text-3xl text-white tabular-nums">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-xl bg-white/10 animate-ping opacity-20" />
      </div>
      <span className="text-white/70 text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-md rounded-2xl p-4 md:p-5 mb-4 border border-white/20 animate-pulse-scale">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
        <span className="font-outfit font-bold text-white text-sm md:text-base uppercase tracking-wide">
          ¡Oferta por tiempo limitado!
        </span>
        <Flame className="w-5 h-5 text-yellow-300 animate-bounce" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Countdown */}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <Clock className="w-5 h-5 text-white/80 hidden sm:block" />
        <div className="flex gap-2 md:gap-4">
          <TimeBlock value={timeLeft.days} label="Días" />
          <div className="flex items-center text-white/60 text-2xl font-bold self-start mt-4">:</div>
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <div className="flex items-center text-white/60 text-2xl font-bold self-start mt-4">:</div>
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <div className="flex items-center text-white/60 text-2xl font-bold self-start mt-4 hidden sm:flex">:</div>
          <div className="hidden sm:block">
            <TimeBlock value={timeLeft.seconds} label="Seg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
