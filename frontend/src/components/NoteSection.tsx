import { useState } from "react";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

const NoteSection = ({ title, description, note, onAddNote }) => {
  return (
    <div className="p-3">
      <form action="">
        <Input placeholder="Title" defaultValue={title} />
        <Label>Description</Label>
        <Textarea
          placeholder="Write your description here"
          defaultValue={description}
        />
        <Label>Note</Label>
        <Textarea placeholder="What's on your mind?" defaultValue={note} />

        <Button
          type="submit"
          onClick={onAddNote}
          className="my-3"
          variant="outline"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NoteSection;
