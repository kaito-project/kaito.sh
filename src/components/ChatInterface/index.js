import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SAMPLE_MODELS = [
  'falcon-7b',
  'llama-2-7b-chat',
  'phi-3-mini-4k-instruct',
  'mistral-7b-instruct-v0.1'
];

const SAMPLE_MESSAGES = [
  "How do I deploy a Llama model with KAITO?",
  "What GPU requirements does Falcon-7B have?",
  "Show me a KAITO workspace configuration",
  "How do I scale my AI workload?"
];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm KAITO Assistant. Ask me about deploying AI models on Kubernetes!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('deploy') || lowerMessage.includes('llama')) {
      return `To deploy a Llama model with KAITO:

\`\`\`yaml
apiVersion: kaito.sh/v1beta1
kind: Workspace
metadata:
  name: workspace-llama-2-7b-chat
spec:
  resource:
    instanceType: "Standard_NC12s_v3"
    labelSelector:
      matchLabels:
        apps: llama-2-7b-chat
  inference:
    preset:
      name: llama-2-7b-chat
\`\`\`

Apply with: \`kubectl apply -f workspace.yaml\``;
    }
    
    if (lowerMessage.includes('gpu') || lowerMessage.includes('requirements')) {
      return `GPU requirements vary by model:
• **Falcon-7B**: 1x V100 (16GB) or A100
• **Llama-2-7B**: 1x V100 (16GB) or A100  
• **Phi-3-Mini**: 1x T4 (16GB) or better
• **Mistral-7B**: 1x V100 (16GB) or A100

KAITO automatically provisions the right GPU SKU for your chosen model!`;
    }
    
    if (lowerMessage.includes('scale') || lowerMessage.includes('scaling')) {
      return `KAITO supports horizontal scaling:

\`\`\`yaml
spec:
  resource:
    count: 3  # Scale to 3 replicas
    instanceType: "Standard_NC12s_v3"
\`\`\`

For load balancing, KAITO creates a Kubernetes service automatically.`;
    }
    
    return `Great question! KAITO simplifies AI model deployment on Kubernetes. Check our docs for:
• Installation guide
• Model presets
• Cloud provider setup
• Workspace configurations

What specific aspect would you like to explore?`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSampleClick = (message) => {
    setInputValue(message);
  };

  return (
    <section className={styles.chatSection}>
      <div className="container">
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h2>Try KAITO Assistant</h2>
            <p>Ask questions about deploying AI models on Kubernetes</p>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  styles.message,
                  message.sender === 'user' ? styles.userMessage : styles.botMessage
                )}
              >
                <div className={styles.messageContent}>
                  <pre className={styles.messageText}>{message.text}</pre>
                  <div className={styles.messageTime}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={clsx(styles.message, styles.botMessage)}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.sampleQuestions}>
            <p>Try these questions:</p>
            <div className={styles.sampleButtons}>
              {SAMPLE_MESSAGES.map((message, index) => (
                <button
                  key={index}
                  className={styles.sampleButton}
                  onClick={() => handleSampleClick(message)}
                >
                  {message}
                </button>
              ))}
            </div>
          </div>

          <form className={styles.chatInput} onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about KAITO..."
              className={styles.inputField}
            />
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}