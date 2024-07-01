import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [newPrompt, setNewPrompt] = useState({ title: "", content: "" });

  const handleAddPrompt = () => {
    setPrompts([...prompts, newPrompt]);
    setNewPrompt({ title: "", content: "" });
  };

  const handleDeletePrompt = (index) => {
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  const handleEditPrompt = (index, updatedPrompt) => {
    const updatedPrompts = prompts.map((prompt, i) =>
      i === index ? updatedPrompt : prompt
    );
    setPrompts(updatedPrompts);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Manage Prompts</h1>
      <div className="space-y-2">
        <Input
          placeholder="Title"
          value={newPrompt.title}
          onChange={(e) => setNewPrompt({ ...newPrompt, title: e.target.value })}
        />
        <Input
          placeholder="Content"
          value={newPrompt.content}
          onChange={(e) => setNewPrompt({ ...newPrompt, content: e.target.value })}
        />
        <Button onClick={handleAddPrompt}>Add Prompt</Button>
      </div>
      <div className="space-y-4">
        {prompts.map((prompt, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{prompt.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{prompt.content}</p>
              <div className="flex space-x-2 mt-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    handleEditPrompt(index, {
                      ...prompt,
                      title: prompt.title + " (edited)",
                    })
                  }
                >
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDeletePrompt(index)}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Prompts;