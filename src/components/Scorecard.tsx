import { useEffect, useState } from "react";
import styles from "./Scorecard.module.css";
import { getRanges } from "../service/scorecard";
import { Range, RangeType } from "../model/range";

const isBetween = (num: number, range: { min: number; max: number }) =>
  num >= range.min && num <= range.max;

const getClasNameForRange = (type?: RangeType) => {
  switch (type) {
    case RangeType.LOW:
      return styles.low;
    case RangeType.MEDIUM:
      return styles.medium;
    case RangeType.HIGH:
      return styles.high;
    case RangeType.CRITICAL:
      return styles.critical;
    default:
      return "";
  }
};

const getRange = (num: number, ranges: Range[]): string => {
  const range = ranges.find((range) => isBetween(num, range));
  return getClasNameForRange(range?.name);
};

const Scorecard = () => {
  const [ranges, setRanges] = useState<Range[]>([]);
  const getNumber = () => Math.round(Math.random() * 100);

  useEffect(() => {
    const getData = async () => {
      const response = await getRanges();
      console.log(response);
      setRanges(response);
    };
    getData();
  }, []);

  return (
    <table className={styles.test}>
      <caption>Certificate insights</caption>
      <thead>
        <tr>
          <th></th>
          <th colSpan={3}>Blast Radius (Shared Certs)</th>
          <th colSpan={2}>Certificate Status & Maturity</th>
          <th colSpan={3}>Expiration without autorenewal</th>
          <th>Incident Maturity</th>
          <th colSpan={2}>SNI Compliance</th>
        </tr>
        <tr>
          <th></th>
          <th>By Service</th>
          <th>By Cloud</th>
          <th>By Environment</th>
          <th>Non-Renewing</th>
          <th>{"Renewal > 90d"}</th>
          <th>{"Expiring < 90d"}</th>
          <th>{"Expiring 30-60d"}</th>
          <th>{"Expiring 60-90d"}</th>
          <th>{"Cert Related"}</th>
          <th>{"STI Auth"}</th>
          <th>{"Geneva Auth"}</th>
        </tr>
        <tr className={styles.addtitionalRow}>
          <th></th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
          <th>Lorem ipsum dolor sit, amet consectetur adipisicing.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Bogdan Balan</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td className={getRange(num, ranges)}>{num}</td>
          ))}
        </tr>
        <tr>
          <th>Jhon Doe</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td className={getRange(num, ranges)}>{num}</td>
          ))}
        </tr>
        <tr>
          <th>Roxana Onea</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td className={getRange(num, ranges)}>{num}</td>
          ))}
        </tr>
        <tr>
          <th>Jane Doe</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td className={getRange(num, ranges)}>{num}</td>
          ))}
        </tr>
        <tr>
          <th>Ion Pop Aglanetasului</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td className={getRange(num, ranges)}>{num}</td>
          ))}
        </tr>
        <tr>
          <th>All workloads</th>
          {Array.from({ length: 11 }, () => getNumber()).map((num) => (
            <td>{num}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Scorecard;
