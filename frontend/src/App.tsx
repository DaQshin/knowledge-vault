import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        endIcon={<ShareIcon size="lg" />}
        variant="primary"
        size="sm"
        text="Share"
      />
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="secondary"
        size="sm"
        text="Add Content"
      />
    </>
  );
}

export default App;
