const archivedNotes = [
  {
    id: 101,
    status: "Archived",
    title: "Old React Optimization Plan",
    tags: ["Dev", "React"],
    edited_time: "15 Aug 2023",
    content: `Initial performance review notes for React app.\n- Consider lazy loading\n- Explore useMemo and useCallback\n- Test with React Profiler\n\nNo longer actively maintained.`,
  },
  {
    id: 102,
    status: "Archived",
    title: "Async JS Fundamentals",
    tags: ["JavaScript", "Async"],
    edited_time: "1 Sep 2023",
    content:
      "Covered callbacks and promises. Async/await added later. Note mostly outdated due to newer examples.",
  },
  {
    id: 103,
    status: "Archived",
    title: "Legacy Node.js Backend Setup",
    tags: ["Node.js", "Backend"],
    edited_time: "12 Jul 2023",
    content:
      "Basic Express server with outdated middleware. Used for early prototype APIs. Archived after migration to newer stack.",
  },
  {
    id: 104,
    status: "Archived",
    title: "CSS Layout Tricks",
    tags: ["CSS", "Design"],
    edited_time: "20 Aug 2023",
    content:
      "Used Grid for layout and Flexbox for alignment. This design is now replaced with new responsive approach.",
  },
  {
    id: 105,
    status: "Archived",
    title: "Database Optimization Log",
    tags: ["SQL", "Performance"],
    edited_time: "25 Jul 2023",
    content:
      "Logged index optimizations and query plans. Archived after schema refactor.",
  },
  {
    id: 106,
    status: "Archived",
    title: "Git Flow Guidelines",
    tags: ["Git", "Workflow"],
    edited_time: "5 Aug 2023",
    content:
      "Described Git workflow using develop and feature branches. This was replaced by trunk-based dev.",
  },
];

export default archivedNotes;
