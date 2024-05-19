import { format } from "date-fns";
import { uk } from "date-fns/locale";

const DateFormatter = ({ date }: { date?: Date }) => {
  const formatDate = (date: Date) => {
    return format(new Date(date), "d MMMM yyyy 'р.'", { locale: uk });
  };

  return date ? <span>{formatDate(date)}</span> : "";
};
export default DateFormatter;
