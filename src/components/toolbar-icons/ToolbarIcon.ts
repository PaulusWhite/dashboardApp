const ToolbarIcon = (iconPath: string, altText: string): string => {
  const view = `
    <figure class="toolbar-icon">
      <img src="${iconPath}" alt="${altText}" width="100%">
    </figure>
  `

  return view;
}

export default ToolbarIcon;