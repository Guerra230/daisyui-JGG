"use client";

import { useId, useState, type ReactNode } from "react";

export interface FacultyTabContent {
  id: string;
  label: string;
  content: ReactNode;
}

export interface FacultyProfileTabsProps {
  tabs: FacultyTabContent[];
}

export default function FacultyProfileTabs({ tabs }: FacultyProfileTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const baseId = useId();
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!activeTab) return null;

  return (
    <div>
      <div role="tablist" className="tabs tabs-box tabs-sm rounded-xl" aria-label="Información del docente">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={tab.id === activeTab.id}
            aria-controls={`${baseId}-panel-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
            className={`tab flex-1 ${tab.id === activeTab.id ? "tab-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeTab.id}`}
        aria-labelledby={`${baseId}-tab-${activeTab.id}`}
        className="pt-4 text-sm text-base-content/80"
      >
        {activeTab.content}
      </div>
    </div>
  );
}
