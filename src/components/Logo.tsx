export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-serif text-[1.85rem] font-semibold tracking-[-0.03em] text-ambar italic">eleven</span>
      <span className="mt-1 pl-[3px] text-[8.5px] font-semibold tracking-[0.46em] text-creme/80 uppercase">
        Pizzaria
      </span>
    </span>
  );
}
