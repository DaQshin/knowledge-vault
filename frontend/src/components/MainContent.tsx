import { Button } from "./Button";
import { ShareIcon } from "../assets/icons/ShareIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { Card } from "./Card";
import { CreateContentModal } from "./CreateContentModal";
import { useState } from "react";

export function MainContent() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          size="sm"
          text="Add Content"
          startIcon={<PlusIcon />}
          onClick={() => setModalOpen(true)}
        ></Button>

        <Button
          variant="secondary"
          size="md"
          text="Share"
          startIcon={<ShareIcon />}
        ></Button>
      </div>

      <div className="p-8 grid grid-cols-3 gap-4">
        <Card
          title="systems programming"
          link="https://www.youtube.com/embed/7wuaLanSqDs?si=2LQZSDOAIuEHREdO"
          type="yt"
        ></Card>

        <Card
          title="systems programming"
          link="https://www.youtube.com/embed/7wuaLanSqDs?si=2LQZSDOAIuEHREdO"
          type="yt"
        ></Card>

        <Card
          title="systems programming"
          link="https://www.youtube.com/embed/7wuaLanSqDs?si=2LQZSDOAIuEHREdO"
          type="yt"
        ></Card>

        <Card
          title="systems programming"
          link="https://www.youtube.com/embed/7wuaLanSqDs?si=2LQZSDOAIuEHREdO"
          type="yt"
        ></Card>

        <Card
          title="systems programming"
          link="https://www.youtube.com/embed/7wuaLanSqDs?si=2LQZSDOAIuEHREdO"
          type="yt"
        ></Card>
      </div>
    </div>
  );
}
