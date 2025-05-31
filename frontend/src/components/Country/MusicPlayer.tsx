import { observer } from 'mobx-react-lite';
import musicStore from '../../stores/MusicStore';
import { Button } from 'react-bootstrap';

const MusicPlayer = observer(() => (
  <div>
    <h4>Music Player</h4>
    <p>{musicStore.music}</p>
    <Button onClick={() => musicStore.play()} className="me-2">Play</Button>
    <Button onClick={() => musicStore.pause()}>Pause</Button>
  </div>
));

export default MusicPlayer; 