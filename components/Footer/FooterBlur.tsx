const FooterBlur = () => {
  return (
    <div
      className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[50px] bg-gradient-to-t to-transparent [mask-image:linear-gradient(to_top,black_50%,transparent)] opacity-100 backdrop-blur-[5px] select-none [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)] dark:[mask-image:linear-gradient(to_top,black_50%,transparent)] dark:[-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)]"
      style={{ userSelect: "none" }}
    />
  );
};

export default FooterBlur;
