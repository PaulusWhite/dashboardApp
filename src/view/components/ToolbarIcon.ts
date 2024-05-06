const ToolbarIcon = (icon: string, navPath: string): string => {
  const view = `
    <figure class="toolbar-icon nav-link" data-url="${navPath}">
      ${icon}
    </figure>
  `;

  return view;
};

export default ToolbarIcon;
