import { format, parseISO } from "date-fns";

type DateProps = {
  dateString: string;
};
export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d/M/y")}</time>;
}
