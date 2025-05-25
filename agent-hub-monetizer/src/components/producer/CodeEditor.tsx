import React, { useState } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Code } from 'lucide-react';
import { useTheme } from 'next-themes';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  const { theme } = useTheme();
  const [isEditorReady, setIsEditorReady] = useState(false);

  const defaultCode = `import gradio as gr
import numpy as np

def classify_text(text):
    """
    A simple text classifier example.
    Replace this with your actual AI model logic.
    """
    # Your AI model logic here
    sentiment = "positive" if len(text) > 10 else "negative"
    confidence = np.random.random()
    
    return f"Sentiment: {sentiment} (Confidence: {confidence:.2f})"

# Create Gradio interface
iface = gr.Interface(
    fn=classify_text,
    inputs=gr.Textbox(placeholder="Enter text to classify..."),
    outputs=gr.Textbox(label="Classification Result"),
    title="Text Classifier",
    description="Enter text to get sentiment analysis"
)

if __name__ == "__main__":
    iface.launch()`;

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    setIsEditorReady(true);
    // Configure editor settings
    editor.updateOptions({
      fontSize: 14,
      lineNumbers: 'on',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      wordWrap: 'on'
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onChange(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Code className="w-5 h-5 mr-2" />
          Code Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Drop your Python file here
            </h3>
            <p className="text-muted-foreground mb-4">
              Supports .py files with Gradio interfaces
            </p>
            <Button variant="outline" asChild>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".py"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              Choose File
              </label>
            </Button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Editor
              height="400px"
              defaultLanguage="python"
              value={value || defaultCode}
              onChange={(val) => onChange(val || '')}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              onMount={handleEditorDidMount}
              loading={<div className="p-4 text-center">Loading editor...</div>}
              options={{
                readOnly: !isEditorReady
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;
