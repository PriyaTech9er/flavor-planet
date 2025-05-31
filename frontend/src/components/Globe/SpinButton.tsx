import { FaGlobe } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export default function SpinButton({ onSpin }: { onSpin: () => void }) {
  return (
    <Button variant="primary" onClick={onSpin} className="mb-3">
      <FaGlobe /> Spin the Globe
    </Button>
  );
} 