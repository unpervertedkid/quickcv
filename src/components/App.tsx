import Navbar from "./Navbar";
import ModesBtn, { editorMode } from "./Modeswitcher";
import Editor from "./editor/Editor";
import Viewer from "./viewer/Viewer";

function App() {
  return (
    <div font-sans mx="2 md:5" xl:mx-auto xl:px-5 class="max-w-[1820px]">
      <Navbar />
      <ModesBtn />
      <div id="svgWrapper" rounded-none md:grid justify-center>
        {editorMode() ? <Editor /> : <Viewer />}
      </div>
    </div>
  );
}

export default App;
