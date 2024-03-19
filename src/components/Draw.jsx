import React, { useEffect } from 'react';

const Draw = ({ submittedData }) => {
  useEffect(() => {
    const containerReport = document.querySelector('.container-report .report');
    if (containerReport) {
      containerReport.innerHTML = "";

      // Draw up
      for (let i = 0; i < submittedData; i++) {
        const box = document.createElement("div");
        box.className = "up";
        containerReport.appendChild(box);

        for (let j = 0; j <= i; j++) {
          const dot2 = document.createElement("div");
          dot2.textContent = "*";
          box.appendChild(dot2);
        }
      }

      // Draw down
      for (let i = 0; i < submittedData; i++) {
        const box = document.createElement("div");
        box.className = "down";
        containerReport.appendChild(box);

        for (let j = submittedData - 1; j > i; j--) {
          const dot3 = document.createElement("div");
          dot3.textContent = "*";
          box.appendChild(dot3);
        }
      }
    }
  }, [submittedData]);
  
};

export default Draw;