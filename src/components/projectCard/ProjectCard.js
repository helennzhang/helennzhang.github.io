import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-detail-div">
        <h2 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h2>
        <h4 className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.subtitle}
        </h4>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              class={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
