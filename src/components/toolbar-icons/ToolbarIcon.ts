const ToolbarIcon = (iconPath: string, iconID: string): string => {
  const view = `
    <figure class="toolbar-icon nav-link" id="${iconID}" data-url="/todo">
      ${iconPath}
    </figure>
  `;

  return view;
};

export default ToolbarIcon;
