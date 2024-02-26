import './layout.scss';

export default function AnotherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
