import gradio as gr
import numpy as np
from typing import Dict, Any, List
import time

def analyze_text(text: str) -> Dict[str, Any]:
    """
    A demo text analyzer that performs:
    1. Sentiment analysis
    2. Length check
    3. Complexity score
    4. Keyword detection
    """
    start_time = time.time()
    
    # Simulate AI processing
    sentiment = "POSITIVE" if len(text) > 10 else "NEGATIVE"
    complexity = min(len(set(text.split())) / max(len(text.split()), 1), 1)
    keywords = [word for word in text.split() if len(word) > 5]
    confidence = np.random.random()
    
    # Format the response
    formatted_output = f"""📊 Analysis Results:

Sentiment: {sentiment} (Confidence: {confidence:.2f})
Text Length: {len(text)} characters
Complexity Score: {complexity:.2f}
Keywords Found: {', '.join(keywords) if keywords else 'None'}"""

    # API response format
    response = {
        "data": [{
            "sentiment": sentiment,
            "confidence": float(f"{confidence:.2f}"),
            "length": len(text),
            "complexity_score": float(f"{complexity:.2f}"),
            "keywords": keywords,
            "formatted_output": formatted_output
        }],
        "status": "success",
        "duration": float(f"{time.time() - start_time:.3f}")
    }
    
    return response

def api_interface(text_list: List[str]) -> Dict[str, Any]:
    """API endpoint function that handles list input"""
    try:
        if not isinstance(text_list, list) or not text_list:
            raise ValueError("Input must be a non-empty list of strings")
            
        # For demo, we'll just analyze the first text
        result = analyze_text(text_list[0])
        return result
        
    except Exception as e:
        return {
            "error": {
                "message": str(e),
                "code": "INVALID_INPUT"
            },
            "status": "error"
        }

# Create Gradio interface with custom styling
css = """
.gradio-container {
    font-family: 'Arial', sans-serif;
}
.output-text {
    white-space: pre-wrap;
    font-family: monospace;
}
"""

# Wrapper for Gradio interface to show only formatted output
def gradio_wrapper(text: str) -> str:
    result = analyze_text(text)
    return result["data"][0]["formatted_output"]

demo = gr.Interface(
    fn=gradio_wrapper,
    inputs=[
        gr.Textbox(
            placeholder="Enter text to analyze...",
            label="Input Text",
            lines=5
        )
    ],
    outputs=[
        gr.Textbox(
            label="Analysis Results",
            lines=8
        )
    ],
    title="🤖 Smart Minions Text Analyzer",
    description="Enter any text to get detailed analysis including sentiment, complexity, and keyword detection",
    theme="default",
    css=css,
    examples=[
        ["This is a very positive and enthusiastic message about artificial intelligence!"],
        ["Bad day."],
        ["The quick brown fox jumps over the lazy dog and performs incredible acrobatics."]
    ]
)

# For FastAPI integration
def create_app():
    return demo

if __name__ == "__main__":
    demo.launch() 