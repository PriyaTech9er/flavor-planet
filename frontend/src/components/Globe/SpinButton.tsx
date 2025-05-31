import { FaGlobe } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MutableRefObject } from 'react';

interface SpinButtonProps {
  onSpin: () => void;
  globeRef: MutableRefObject<any>;
}

export default function SpinButton({ onSpin, globeRef }: SpinButtonProps) {
  const handleSpin = () => {
    if (globeRef.current && typeof globeRef.current.spin === 'function') {
      globeRef.current.spin();
    }
    onSpin();
  };

  return (
    <Button variant="primary" onClick={handleSpin} className="mb-3">
      <FaGlobe /> Explore a Country
    </Button>
  );
} 