type HeaderProps = {
  text?: string;
  children?: React.ReactNode;
};

export const Header = ({ text, children }: HeaderProps) => {
  return (
    <header className="flex justify-start pl-48 py-14 border border-dark-brown-400">
      <h3 className="text-2xl">{text}</h3>
      {children}
    </header>
  );
};
