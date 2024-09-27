"use client"

import { useState } from "react"

const OpenAIComponent = () => {
  const [report, setReport] = useState(null);
  const fetchReport = async (data) => {
    const messages = [
      { 
        role: "system",
        content: "You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell. Use the examples provided between ### to set the style of your response.",
      },
      {
        role: "user",
        content: `Here is the stock data: AAPL.`,
      },
    ];

    try {
      const response = await fetch("https://slack-aggro-worker.andrewwoods88.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setReport(result.content);
    } catch (error) {
      setError(`There was an error fetching the report: ${error.message}`);
      console.error("Error fetching report:", error);
    }
  };


  return (
    <div>
      <h1>OpenAIComponent</h1>
      <button onClick={fetchReport}>Fetch Report</button>
      {report && <p>{report}</p>}
    </div>
  )
}

export default OpenAIComponent