import gradio as gr
import numpy as np
from typing import Any, Dict, List

def predict(text: str) -> str:
    """
    Your AI model logic goes here.
    This is a simple example that you should replace with your own model.
    """
    # Example: Simple sentiment analysis
    positive_words = ["good", "great", "awesome", "excellent", "happy", "love"]
    negative_words = ["bad", "terrible", "awful", "horrible", "sad", "hate"]
    
    words = text.lower().split()
    positive_count = sum(1 for word in words if word in positive_words)
    negative_count = sum(1 for word in words if word in negative_words)
    
    if positive_count > negative_count:
        sentiment = "POSITIVE"
    elif negative_count > positive_count:
        sentiment = "NEGATIVE"
    else:
        sentiment = "NEUTRAL"
    
    confidence = np.random.uniform(0.7, 1.0)  # Replace with actual confidence
    
    return f"Sentiment: {sentiment} (Confidence: {confidence:.2f})"

# Create Gradio interface
demo = gr.Interface(
    fn=predict,
    inputs=gr.Textbox(
        placeholder="Enter text to analyze...",
        label="Input Text",
        lines=5
    ),
    outputs=gr.Textbox(
        label="Analysis Result",
        lines=2
    ),
    title="My AI Agent",
    description="A simple sentiment analysis model. Replace with your own AI model!",
    examples=[
        ["This is a great day and I'm feeling awesome!"],
        ["This is terrible, I'm having a bad day."],
        ["The weather is quite normal today."]
    ]
)

if __name__ == "__main__":
    demo.launch() 