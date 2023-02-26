const isMobile = (): boolean => {
  const rect = document.body.getBoundingClientRect();
  // 根据显示尺寸，粗略判断此时使用的设备
  return rect.width - 1 < 992;
};

export { isMobile };
