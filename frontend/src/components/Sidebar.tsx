import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Sidebar = ({ notes }) => {
  return (
    <div className="sidebar">
      {notes.map((note) => (
        <Card>
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{note.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Sidebar;
