"use client";

import { useState } from "react";

export interface TagOption {
  id: string;
  name: string;
  isSelected: boolean;
}

export interface TagFilterGroupProps {
  title: string;
  tags: TagOption[];
  inputName?: string;
  onTagToggle?: (tagId: string) => void;
}

export default function TagFilterGroup({ title, tags, inputName = "tags", onTagToggle }: TagFilterGroupProps) {
  const [selected, setSelected] = useState<Set<string>>(() => new Set(tags.filter((tag) => tag.isSelected).map((tag) => tag.id)));

  const handleToggle = (tagId: string) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(tagId)) next.delete(tagId);
      else next.add(tagId);
      return next;
    });
    onTagToggle?.(tagId);
  };

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-sm">
        {title}
        <span className="badge badge-primary badge-xs">{selected.size}</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <label key={tag.id} className="cursor-pointer">
            <input
              type="checkbox"
              name={inputName}
              value={tag.id}
              checked={selected.has(tag.id)}
              onChange={() => handleToggle(tag.id)}
              className="peer sr-only"
            />
            <span className="badge badge-lg border-icesi-gray bg-base-100 text-base-content/70 transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-content peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2">
              {tag.name}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
