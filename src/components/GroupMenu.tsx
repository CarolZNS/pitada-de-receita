import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function GroupMenu() {
  return (
    <div>
      <Button>Receitas Recentes</Button>
      <Button variant="secondary">Receitas Recentes</Button>
      <Button variant="outline" className="border-sky-500">Receitas Recentes</Button>
      <ul>
        <li>
          <Card>Card Test empty</Card>
        </li>
        <li>
          <Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Card>
        </li>
      </ul>
    </div>
  );
}
