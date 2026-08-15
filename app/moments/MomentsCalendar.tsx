"use client";

import { useMemo, useState } from "react";
import type { Moment } from "../../lib/content";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdayLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function readYearMonth(date: string) {
  const [year, month] = date.split("-").map(Number);
  return { year, month: month - 1 };
}

function makeCalendarCells(year: number, month: number) {
  const firstDay = new Date(Date.UTC(year, month, 1));
  const leadingEmptyCells = (firstDay.getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return Array.from({ length: 42 }, (_, index) => {
    const day = index - leadingEmptyCells + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });
}

function findLatestMonth(moments: Moment[]) {
  const latestDate = moments.reduce(
    (latest, moment) => (moment.date > latest ? moment.date : latest),
    "",
  );
  return readYearMonth(latestDate || "2026-01-01");
}

export function MomentsCalendar({ moments }: { moments: Moment[] }) {
  const latest = findLatestMonth(moments);
  const [year, setYear] = useState(latest.year);
  const [month, setMonth] = useState(latest.month);

  const calendarCells = useMemo(() => makeCalendarCells(year, month), [year, month]);
  const monthMoments = useMemo(
    () =>
      moments.filter((moment) => {
        const momentDate = readYearMonth(moment.date);
        return momentDate.year === year && momentDate.month === month;
      }),
    [moments, year, month],
  );
  const momentsByDay = monthMoments.reduce((grouped, moment) => {
    const day = Number(moment.date.slice(8, 10));
    const entries = grouped.get(day) ?? [];
    entries.push(moment);
    grouped.set(day, entries);
    return grouped;
  }, new Map<number, Moment[]>());
  const yearOptions = useMemo(() => {
    const years = new Set(moments.map((moment) => readYearMonth(moment.date).year));
    for (let offset = -3; offset <= 3; offset += 1) {
      years.add(year + offset);
    }
    return [...years].sort((left, right) => left - right);
  }, [moments, year]);

  function moveMonth(offset: number) {
    const next = new Date(Date.UTC(year, month + offset, 1));
    setYear(next.getUTCFullYear());
    setMonth(next.getUTCMonth());
  }

  function showLatest() {
    setYear(latest.year);
    setMonth(latest.month);
  }

  const isLatest = year === latest.year && month === latest.month;
  const calendarLabel = `${monthNames[month]} ${year}`;

  return (
    <section className="calendar-panel" aria-labelledby="calendar-heading">
      <div className="calendar-topline">
        <div className="calendar-heading-group">
          <p className="calendar-year">Archive calendar</p>
          <h2 id="calendar-heading" aria-live="polite">
            {monthNames[month]} <span>{year}</span>
          </h2>
        </div>

        <div className="calendar-controls" role="group" aria-label="Choose calendar month">
          <button
            className="calendar-step"
            type="button"
            onClick={() => moveMonth(-1)}
            aria-label="Previous month"
          >
            ←
          </button>
          <label className="calendar-select">
            <span>Month</span>
            <select value={month} onChange={(event) => setMonth(Number(event.target.value))}>
              {monthNames.map((name, index) => (
                <option value={index} key={name}>{name}</option>
              ))}
            </select>
          </label>
          <label className="calendar-select calendar-year-select">
            <span>Year</span>
            <select value={year} onChange={(event) => setYear(Number(event.target.value))}>
              {yearOptions.map((option) => (
                <option value={option} key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button
            className="calendar-step"
            type="button"
            onClick={() => moveMonth(1)}
            aria-label="Next month"
          >
            →
          </button>
          <button
            className="calendar-latest"
            type="button"
            onClick={showLatest}
            disabled={isLatest}
          >
            Latest
          </button>
        </div>
      </div>

      <div className="calendar-legend" aria-label="Moment categories">
        <span><i className="legend-dot legend-blue" aria-hidden="true" /> Research / writing</span>
        <span><i className="legend-dot legend-orange" aria-hidden="true" /> Release</span>
        <span><i className="legend-dot legend-green" aria-hidden="true" /> Thinking</span>
      </div>

      <div className="calendar-table-wrap">
        <table className="calendar-grid">
          <caption className="sr-only">{calendarLabel}</caption>
          <thead>
            <tr>
              {weekdayLabels.map((weekday) => (
                <th className="calendar-weekday" scope="col" key={weekday}>
                  {weekday}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, week) => (
              <tr key={`${year}-${month}-week-${week}`}>
                {calendarCells.slice(week * 7, week * 7 + 7).map((day, dayIndex) => {
                  const dayMoments = day ? momentsByDay.get(day) ?? [] : [];
                  const firstMoment = dayMoments[0];
                  const cellClass = [
                    "calendar-day",
                    firstMoment ? "has-moment" : "",
                    firstMoment?.label === "Model release" ? "release-day" : "",
                    firstMoment?.label === "Thinking" ? "thinking-day" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <td className={cellClass} key={`${year}-${month}-${week}-${dayIndex}`}>
                      {day ? (
                        <>
                          {firstMoment ? (
                            <a
                              className="calendar-date-link"
                              href={firstMoment.href ?? `#${firstMoment.id}`}
                              aria-label={`${firstMoment.displayDate}: ${firstMoment.title}`}
                            >
                              {day}
                            </a>
                          ) : (
                            <span className="calendar-date-number">{day}</span>
                          )}
                          {dayMoments.length ? (
                            <div className="calendar-events">
                              {dayMoments.map((moment) => (
                                <a href={moment.href ?? `#${moment.id}`} key={moment.id}>
                                  {moment.title}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {monthMoments.length === 0 ? (
        <p className="calendar-empty" role="status">
          No recorded moments in this month yet.
        </p>
      ) : null}
    </section>
  );
}
