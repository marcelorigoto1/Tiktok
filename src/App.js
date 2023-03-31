import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="BooBoo"
          description="Gatinho Voando!"
          music="Música Alta"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Marcelo"
          description="Outro Gatinha, mas esse não voa"
          music="Clap"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
