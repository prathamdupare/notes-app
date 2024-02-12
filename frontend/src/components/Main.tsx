import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import NoteSection from "./NoteSection";
import { useState } from "react";

const Main = () => {
  const [notes, setNotes] = useState([]);
  // const data = { title: "Title", description: "Desc", note: "This is a note" };
  //
  const onAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: "id",
      title: "Untitled",
      description: "This is the description",
      note: "This is a new Note",
    };

    setNotes([newNote, ...notes]);
  };
  return (
    <Router>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20}>
          <Sidebar notes={notes} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className=" ">
          <NoteSection
            title="title"
            description="desc"
            note="note"
            onAddNote={onAddNote}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </Router>
  );
};

export default Main;
