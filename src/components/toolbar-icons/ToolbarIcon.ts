const ToolbarIcon = (iconPath: string, iconID: string): string => {
  const view = `
    <figure class="toolbar-icon" id="${iconID}">
      ${iconPath}
    </figure>
  `;

  return view;
};

export default ToolbarIcon;
